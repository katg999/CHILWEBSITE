export const FileUploadExtension = {
  name: "UnifiedFileUpload",
  type: "response",
  match: ({ trace }) =>
    trace.type === "ext_fileUpload" ||
    trace.payload?.name === "ext_fileUpload" ||
    trace.type === "ext_doctorFileUpload" ||
    trace.payload?.name === "ext_doctorFileUpload",

  render: ({ trace, element }) => {
    // Determine if this is for doctor or school upload
    const isDoctorUpload =
      trace.type === "ext_doctorFileUpload" ||
      trace.payload?.name === "ext_doctorFileUpload";

    const uploadType = isDoctorUpload ? "doctor" : "school";
    const endpoint = isDoctorUpload
      ? "https://laravelbackendchil.onrender.com/api/update-latest-doctor-file"
      : "https://laravelbackendchil.onrender.com/api/update-latest-school-file";
    const signedUrlEndpoint =
      "https://laravelbackendchil.onrender.com/api/signed-url";
    const storeUrlsEndpoint =
      "https://laravelbackendchil.onrender.com/api/store-file-urls";

    console.log(`[FileUpload] Initializing for ${uploadType} upload`);
    console.log(`[Endpoints] 
      Signed URL: ${signedUrlEndpoint}
      Store URLs: ${storeUrlsEndpoint}
      Update Endpoint: ${endpoint}`);

    const uploadTitle = isDoctorUpload
      ? "Doctor's Document (License, Certification, etc.)"
      : "School Document";

    const uploadIcon = isDoctorUpload
      ? '<i class="fas fa-user-md" style="margin-right: 8px;"></i>'
      : '<i class="fas fa-school" style="margin-right: 8px;"></i>';

    const fileUploadContainer = document.createElement("div");
    fileUploadContainer.innerHTML = `
      <style>
        .unified-file-upload {
          border: 2px dashed ${
            isDoctorUpload
              ? "rgba(40, 167, 69, 0.3)"
              : "rgba(13, 110, 253, 0.3)"
          };
          padding: 20px;
          text-align: center;
          cursor: pointer;
          margin: 10px 0;
          transition: all 0.3s;
          border-radius: 5px;
        }
        .unified-file-upload:hover {
          background-color: ${
            isDoctorUpload
              ? "rgba(40, 167, 69, 0.1)"
              : "rgba(13, 110, 253, 0.1)"
          };
        }
        .upload-title {
          font-weight: 500;
          margin-bottom: 5px;
        }
        .upload-instructions {
          font-size: 0.8em;
          color: #6c757d;
        }
      </style>
      <div class='unified-file-upload'>
        ${uploadIcon}
        <div class="upload-title">${uploadTitle}</div>
        <div class="upload-instructions">Click or drag file to upload</div>
      </div>
      <input type='file' style='display: none;' accept=".pdf,.jpg,.jpeg,.png,.doc,.docx">
    `;

    const fileInput = fileUploadContainer.querySelector("input[type=file]");
    const fileUploadBox = fileUploadContainer.querySelector(
      ".unified-file-upload"
    );

    // Handle click
    fileUploadBox.addEventListener("click", function () {
      fileInput.click();
    });

    // Handle drag and drop
    fileUploadBox.addEventListener("dragover", (e) => {
      e.preventDefault();
      fileUploadBox.style.backgroundColor = isDoctorUpload
        ? "rgba(40, 167, 69, 0.2)"
        : "rgba(13, 110, 253, 0.2)";
    });

    fileUploadBox.addEventListener("dragleave", () => {
      fileUploadBox.style.backgroundColor = "";
    });

    fileUploadBox.addEventListener("drop", (e) => {
      e.preventDefault();
      fileUploadBox.style.backgroundColor = "";
      if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        const event = new Event("change");
        fileInput.dispatchEvent(event);
      }
    });

    // Handle file selection
    fileInput.addEventListener("change", async function () {
      const file = fileInput.files[0];
      if (!file) return;

      console.log(`[FileUpload] ${uploadType} file selected:`, file.name, file);
      fileUploadContainer.innerHTML = `
        <div class="text-center">
          <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/upload/upload.gif" 
               alt="Uploading" width="50" height="50">
          <div class="small mt-2">Uploading ${file.name}...</div>
        </div>
      `;

      try {
        // Step 1: Upload to temporary storage (for admin preview)
        console.log(`[Temporary Upload] Starting upload to tmpfiles.org`);
        const tempUploadResponse = await fetch(
          "https://tmpfiles.org/api/v1/upload",
          {
            method: "POST",
            body: (() => {
              const data = new FormData();
              data.append("file", file);
              return data;
            })(),
          }
        );

        console.log(
          `[Temporary Upload] Response status:`,
          tempUploadResponse.status
        );
        if (!tempUploadResponse.ok) {
          const errorText = await tempUploadResponse.text();
          console.error(`[Temporary Upload] Failed:`, errorText);
          throw new Error(
            `Temporary upload failed: ${tempUploadResponse.statusText}`
          );
        }

        const tempResult = await tempUploadResponse.json();
        console.log(`[Temporary Upload] Response data:`, tempResult);
        const tempFileUrl = tempResult.data.url.replace(
          "https://tmpfiles.org/",
          "https://tmpfiles.org/dl/"
        );
        console.log(`[Temporary Upload] Final URL:`, tempFileUrl);

        // Step 2: Get signed URL for permanent storage
        console.log(
          `[DigitalOcean] Requesting signed URL from:`,
          signedUrlEndpoint
        );
        const signedUrlResponse = await fetch(signedUrlEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filename: file.name,
            upload_type: uploadType,
            content_type: file.type,
          }),
        });

        console.log(
          `[DigitalOcean] Signed URL response status:`,
          signedUrlResponse.status
        );
        if (!signedUrlResponse.ok) {
          const errorText = await signedUrlResponse.text();
          console.error(`[DigitalOcean] Failed to get signed URL:`, errorText);
          throw new Error(
            `Failed to get signed URL: ${signedUrlResponse.statusText}`
          );
        }

        const signedUrlData = await signedUrlResponse.json();
        console.log(`[DigitalOcean] Signed URL data:`, signedUrlData);
        const { upload_url, public_url } = signedUrlData;

        // Step 3: Upload to DigitalOcean Spaces (permanent storage)
        console.log(`[DigitalOcean] Uploading to Spaces using signed URL`);
        const permanentUploadResponse = await fetch(upload_url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
          },
          body: file,
        });

        console.log(
          `[DigitalOcean] Upload response status:`,
          permanentUploadResponse.status
        );
        if (!permanentUploadResponse.ok) {
          const errorText = await permanentUploadResponse.text();
          console.error(`[DigitalOcean] Upload failed:`, errorText);
          throw new Error(
            `Permanent upload failed: ${permanentUploadResponse.statusText}`
          );
        }

        // Success UI
        console.log(`[Success] Both uploads completed successfully`);
        fileUploadContainer.innerHTML = `
          <div class="text-center text-success">
            <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/check/check.gif" 
                 alt="Success" width="50" height="50">
            <div class="small mt-2">Document uploaded successfully!</div>
            <div class="small mt-2">Temporary link: <a href="${tempFileUrl}" target="_blank">View File</a></div>
            <div class="small mt-2">Permanent link: <a href="${public_url}" target="_blank">View File</a></div>
          </div>
        `;

        // Send to Voiceflow
        console.log(`[Voiceflow] Sending completion with URLs to Voiceflow`);
        window.voiceflow.chat.interact({
          type: "complete",
          payload: {
            file_url: public_url,
            temp_file_url: tempFileUrl,
            upload_type: uploadType,
          },
        });

        // Send to backend - using the new store-file-urls endpoint
        console.log(`[Backend] Storing URLs at: ${storeUrlsEndpoint}`);
        const storeResponse = await fetch(storeUrlsEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            permanent_url: public_url,
            temp_url: tempFileUrl,
            upload_type: uploadType,
          }),
        });

        if (!storeResponse.ok) {
          const errorText = await storeResponse.text();
          console.error(`[Backend] Failed to store URLs:`, errorText);
        } else {
          const result = await storeResponse.json();
          console.log(`[Backend] URLs stored successfully:`, result);
        }

        // Also send to the original endpoint for compatibility
        console.log(`[Backend] Updating record at: ${endpoint}`);
        await sendFileUrlToBackend(
          {
            permanent_url: public_url,
            temp_url: tempFileUrl,
          },
          endpoint,
          uploadType
        );
      } catch (error) {
        console.error(`[Error] ${uploadType} file upload error:`, error);
        fileUploadContainer.innerHTML = `
          <div class="text-center text-danger">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="small mt-2">Upload failed: ${error.message}</div>
            <div class="small mt-2">Check console for details</div>
            <button class="btn btn-sm btn-secondary mt-2 retry-btn">
              Try Again
            </button>
          </div>
        `;

        // Add retry functionality
        const retryBtn = fileUploadContainer.querySelector(".retry-btn");
        retryBtn.addEventListener("click", () => {
          console.log(`[Retry] User clicked retry button`);
          fileInput.value = "";
          fileUploadContainer.innerHTML = fileUploadContainer.innerHTML;
        });
      }
    });

    element.appendChild(fileUploadContainer);
  },
};

async function sendFileUrlToBackend(urls, endpoint, uploadType) {
  try {
    console.log(`[Legacy Backend] Sending to ${endpoint}`, urls);
    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        permanent_url: urls.permanent_url,
        temp_url: urls.temp_url,
        upload_type: uploadType,
      }),
    });

    console.log(`[Legacy Backend] Response status:`, response.status);
    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `[Legacy Backend] Error updating ${uploadType} file URLs:`,
        errorData.message
      );
    } else {
      const result = await response.json();
      console.log(
        `[Legacy Backend] ${uploadType} file URLs updated successfully:`,
        result
      );
    }
  } catch (error) {
    console.error(
      `[Legacy Backend] Network error updating ${uploadType} file URLs:`,
      error
    );
  }
}

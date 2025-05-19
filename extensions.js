// Modified FileUploadExtension.js to use the proxy upload approach
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

    // New proxy upload endpoint
    const proxyUploadEndpoint =
      "https://laravelbackendchil.onrender.com/api/documents/proxy-upload";

    // Keep these for fallback
    const signedUrlEndpoint =
      "https://laravelbackendchil.onrender.com/api/documents/signed-url";
    const storeUrlsEndpoint =
      "https://laravelbackendchil.onrender.com/api/documents/store-file-urls";

    console.log(`[FileUpload] Initializing for ${uploadType} upload`);
    console.log(`[Endpoints] 
      Proxy Upload: ${proxyUploadEndpoint}
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
        // Using the proxy upload method which handles everything server-side
        console.log(
          `[ProxyUpload] Starting server-side upload via ${proxyUploadEndpoint}`
        );

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_type", uploadType);

        const proxyUploadResponse = await fetch(proxyUploadEndpoint, {
          method: "POST",
          body: formData,
        });

        console.log(
          `[ProxyUpload] Response status:`,
          proxyUploadResponse.status
        );

        if (!proxyUploadResponse.ok) {
          const errorText = await proxyUploadResponse.text();
          console.error(`[ProxyUpload] Failed:`, errorText);
          throw new Error(`Upload failed: ${proxyUploadResponse.statusText}`);
        }

        const result = await proxyUploadResponse.json();
        console.log(`[ProxyUpload] Success:`, result);

        const permanentUrl = result.file_url;
        const tempFileUrl = result.temp_file_url;

        // Success UI
        console.log(`[Success] Server-side upload completed successfully`);
        fileUploadContainer.innerHTML = `
          <div class="text-center text-success">
            <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/check/check.gif" 
                 alt="Success" width="50" height="50">
            <div class="small mt-2">Document uploaded successfully!</div>
      
          </div>
        `;

        // Send to Voiceflow
        console.log(`[Voiceflow] Sending completion with URLs to Voiceflow`);
        window.voiceflow.chat.interact({
          type: "complete",
          payload: {
            file_url: permanentUrl,
            temp_file_url: tempFileUrl,
            upload_type: uploadType,
          },
        });

        // Send to the original endpoint for compatibility (optional since our proxy already updates the model)
        console.log(`[Legacy Backend] Updating record at: ${endpoint}`);
        await sendFileUrlToBackend(
          {
            permanent_url: permanentUrl,
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

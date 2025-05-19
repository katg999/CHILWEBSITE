// Unified FileUploadExtension with both Digital Ocean upload and health facility endpoint updating
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

    // Health facility endpoint that needs to be called in all cases
    const healthFacilityEndpoint =
      "https://laravelbackendchil.onrender.com/api/update-latest-health-facility-file";

    // New proxy upload endpoint for Digital Ocean
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
      Health Facility Endpoint: ${healthFacilityEndpoint}
      Signed URL: ${signedUrlEndpoint}
      Store URLs: ${storeUrlsEndpoint}
      Type-specific Endpoint: ${endpoint}`);

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
        // PRIMARY APPROACH: Using the proxy upload method which handles server-side upload to Digital Ocean
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
          throw new Error(
            `Digital Ocean upload failed: ${proxyUploadResponse.statusText}`
          );
        }

        const result = await proxyUploadResponse.json();
        console.log(`[ProxyUpload] Success:`, result);

        const permanentUrl = result.file_url;
        const tempFileUrl = result.temp_file_url;

        // ADDITIONALLY: Maintain backward compatibility with the health facility endpoint
        console.log(`[HealthFacility] Updating health facility file URL`);
        await updateHealthFacilityFile(permanentUrl, healthFacilityEndpoint);

        // Success UI
        console.log(
          `[Success] Upload completed successfully to both destinations`
        );
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
      } catch (error) {
        console.error(`[Error] ${uploadType} file upload error:`, error);

        // FALLBACK: If Digital Ocean upload fails, try tmpfiles.org as a fallback
        console.log(`[Fallback] Attempting upload to tmpfiles.org as fallback`);

        try {
          // Upload to temporary storage
          const data = new FormData();
          data.append("file", file);

          const tmpFilesResponse = await fetch(
            "https://tmpfiles.org/api/v1/upload",
            {
              method: "POST",
              body: data,
            }
          );

          if (!tmpFilesResponse.ok) {
            throw new Error(
              `Fallback upload failed: ${tmpFilesResponse.statusText}`
            );
          }

          const tmpResult = await tmpFilesResponse.json();
          const fileUrl = tmpResult.data.url.replace(
            "https://tmpfiles.org/",
            "https://tmpfiles.org/dl/"
          );

          // Update the health facility endpoint with the temporary URL
          await updateHealthFacilityFile(fileUrl, healthFacilityEndpoint);

          // Success UI for fallback approach
          fileUploadContainer.innerHTML = `
            <div class="text-center text-warning">
              <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/check/check.gif" 
                   alt="Success" width="50" height="50">
              <div class="small mt-2">Document uploaded using fallback method!</div>
            </div>
          `;

          // Send to Voiceflow
          window.voiceflow.chat.interact({
            type: "complete",
            payload: {
              file_url: fileUrl,
              upload_type: uploadType,
            },
          });
        } catch (fallbackError) {
          console.error(
            `[FallbackError] Fallback upload also failed:`,
            fallbackError
          );

          fileUploadContainer.innerHTML = `
            <div class="text-center text-danger">
              <i class="fas fa-exclamation-triangle"></i>
              <div class="small mt-2">Upload failed: ${error.message}</div>
              <div class="small mt-2">Fallback also failed: ${fallbackError.message}</div>
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
            // Recreate the original upload UI
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
          });
        }
      }
    });

    element.appendChild(fileUploadContainer);
  },
};

// Helper function to update the health facility file
async function updateHealthFacilityFile(fileUrl, endpoint) {
  const payload = { file_url: fileUrl };

  console.log(`[HealthFacility] Sending file URL to endpoint:`, payload);

  try {
    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error: ${response.status}`);
    }

    const result = await response.json();
    console.log(`[HealthFacility] File URL updated successfully:`, result);
    return result;
  } catch (error) {
    console.error(`[HealthFacility] Error updating file URL:`, error.message);
    throw error;
  }
}

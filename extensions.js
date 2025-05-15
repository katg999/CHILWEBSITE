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
    fileInput.addEventListener("change", function () {
      const file = fileInput.files[0];
      if (!file) return;

      console.log(`${uploadType} file selected:`, file.name);
      fileUploadContainer.innerHTML = `
        <div class="text-center">
          <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/upload/upload.gif" 
               alt="Uploading" width="50" height="50">
          <div class="small mt-2">Uploading ${file.name}...</div>
        </div>
      `;

      const data = new FormData();
      data.append("file", file);

      // Upload to temporary storage
      fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
          }
          return response.json();
        })
        .then((result) => {
          const fileUrl = result.data.url.replace(
            "https://tmpfiles.org/",
            "https://tmpfiles.org/dl/"
          );

          fileUploadContainer.innerHTML = `
            <div class="text-center text-success">
              <img src="https://s3.amazonaws.com/com.voiceflow.studio/share/check/check.gif" 
                   alt="Success" width="50" height="50">
              <div class="small mt-2">Document uploaded successfully!</div>
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

          // Send to backend
          sendFileUrlToBackend(fileUrl, endpoint, uploadType);
        })
        .catch((error) => {
          console.error(`${uploadType} file upload error:`, error);
          fileUploadContainer.innerHTML = `
            <div class="text-center text-danger">
              <i class="fas fa-exclamation-triangle"></i>
              <div class="small mt-2">Upload failed: ${error.message}</div>
              <button class="btn btn-sm btn-secondary mt-2 retry-btn">
                Try Again
              </button>
            </div>
          `;

          // Add retry functionality
          const retryBtn = fileUploadContainer.querySelector(".retry-btn");
          retryBtn.addEventListener("click", () => {
            fileInput.value = "";
            fileUploadContainer.innerHTML = fileUploadContainer.innerHTML;
          });
        });
    });

    element.appendChild(fileUploadContainer);
  },
};

function sendFileUrlToBackend(fileUrl, endpoint, uploadType) {
  const payload = { file_url: fileUrl };

  console.log(`Sending ${uploadType} file URL to backend:`, payload);

  fetch(
    "https://laravelbackendchil.onrender.com/api/update-latest-doctor-file",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  )
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(`${uploadType} file URL updated successfully:`, result);
    })
    .catch((error) => {
      console.error(`Error updating ${uploadType} file URL:`, error.message);
    });
}

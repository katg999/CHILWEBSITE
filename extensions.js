export const FileUploadExtension = {
  name: "FileUpload",
  type: "response",
  match: ({ trace }) =>
    trace.type === "ext_fileUpload" || trace.payload?.name === "ext_fileUpload",
  render: ({ trace, element }) => {
    const fileUploadContainer = document.createElement("div");
    fileUploadContainer.innerHTML = `
      <style>
        .my-file-upload {
          border: 2px dashed rgba(46, 110, 225, 0.3);
          padding: 20px;
          text-align: center;
          cursor: pointer;
        }
      </style>
      <div class='my-file-upload'>Drag and drop a file here or click to upload</div>
      <input type='file' style='display: none;'>
    `;

    const fileInput = fileUploadContainer.querySelector("input[type=file]");
    const fileUploadBox = fileUploadContainer.querySelector(".my-file-upload");

    fileUploadBox.addEventListener("click", function () {
      fileInput.click();
    });

    fileInput.addEventListener("change", function () {
      const file = fileInput.files[0];
      console.log("File selected:", file);

      fileUploadContainer.innerHTML = `<img src="https://s3.amazonaws.com/com.voiceflow.studio/share/upload/upload.gif" alt="Upload" width="50" height="50">`;

      var data = new FormData();
      data.append("file", file);

      fetch("https://tmpfiles.org/api/v1/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Upload failed: " + response.statusText);
          }
        })
        .then((result) => {
          fileUploadContainer.innerHTML =
            '<img src="https://s3.amazonaws.com/com.voiceflow.studio/share/check/check.gif" alt="Done" width="50" height="50">';
          console.log("File uploaded:", result.data.url);

          // Get the file URL
          const fileUrl = result.data.url.replace(
            "https://tmpfiles.org/",
            "https://tmpfiles.org/dl/"
          );

          // Send the file URL to Voiceflow
          window.voiceflow.chat.interact({
            type: "complete",
            payload: {
              file: fileUrl,
            },
          });

          // Send ONLY the file URL to your Laravel backend
          sendFileUrlToBackend(fileUrl);
        })
        .catch((error) => {
          console.error(error);
          fileUploadContainer.innerHTML = "<div>Error during upload</div>";
        });
    });

    element.appendChild(fileUploadContainer);
  },
};

function sendFileUrlToBackend(fileUrl) {
  // Send ONLY the file URL to your Laravel backend
  fetch("https://laravelbackendchil.onrender.com/api/register-school", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      file_url: fileUrl, // Send ONLY the file URL
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to send file URL: " + response.statusText);
      }
    })
    .then((result) => {
      console.log("File URL sent successfully:", result);
    })
    .catch((error) => {
      console.error("Error sending file URL:", error);
    });
}

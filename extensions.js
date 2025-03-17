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

          // Send the file URL to Voiceflow
          window.voiceflow.chat.interact({
            type: "complete",
            payload: {
              file: result.data.url.replace(
                "https://tmpfiles.org/",
                "https://tmpfiles.org/dl/"
              ),
            },
          });

          // Capture user input (name, email, contact) and send to backend
          captureUserInput(result.data.url);
        })
        .catch((error) => {
          console.error(error);
          fileUploadContainer.innerHTML = "<div>Error during upload</div>";
        });
    });

    element.appendChild(fileUploadContainer);
  },
};

// Function to capture user input (name, email, contact) and send to backend
function captureUserInput(fileUrl) {
  // Listen for user input from Voiceflow
  window.voiceflow.chat.on("capture", (data) => {
    const {
      SchoolName,
      SchoolOfficialEmail,
      SchoolAdminContact,
      HealthFacilityName,
      HealthFacilityOfficialEmail,
      HealthFacilityAdminContact,
      PharmacyName,
      PharmacyEmail,
      PharmacyContact,
      LaboratoryName,
      LaboratoryEmail,
      LaboratoryContact,
      DoctorName,
      DoctorOfficialEmail,
      DoctorContact,
    } = data;

    // Prepare the payload to send to the backend
    const payload = {
      SchoolName,
      SchoolOfficialEmail,
      SchoolAdminContact,
      HealthFacilityName,
      HealthFacilityOfficialEmail,
      HealthFacilityAdminContact,
      PharmacyName,
      PharmacyEmail,
      PharmacyContact,
      LaboratoryName,
      LaboratoryEmail,
      LaboratoryContact,
      DoctorName,
      DoctorOfficialEmail,
      DoctorContact,
      fileUrl, // URL of the uploaded file
    };

    // Send the data to your Laravel backend
    fetch("/api/save-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data saved successfully:", result);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  });
}

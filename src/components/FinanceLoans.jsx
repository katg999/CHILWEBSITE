import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import Image31 from "../assets/images/image 31.svg"; // Correctly import the image

const FinanceLoans = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    facilityName: "",
  });

  // State to store uploaded files
  const [facilityReportFile, setFacilityReportFile] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);

  // Handle file upload for Facility Report
  const handleFacilityReportUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFacilityReportFile(file);
    }
  };

  // Handle file upload for License
  const handleLicenseUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLicenseFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send files and form data
    const formDataToSend = new FormData();

    // Append form fields to FormData
    formDataToSend.append("first_name", formData.firstName);
    formDataToSend.append("last_name", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("facility_name", formData.facilityName);

    // Append files to FormData
    if (facilityReportFile) {
      formDataToSend.append("facility_report", facilityReportFile);
    } else {
      alert("Please upload a Facility Report.");
      return;
    }
    if (licenseFile) {
      formDataToSend.append("license", licenseFile);
    } else {
      alert("Please upload a License.");
      return;
    }

    try {
      // Send POST request to your Laravel backend
      const response = await fetch(
        "https://laravelbackendchil.onrender.com/api/finance-loan-data",
        {
          method: "POST",
          body: formDataToSend, // Send FormData directly
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Form submitted successfully!");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          facilityName: "",
        });
        setFacilityReportFile(null);
        setLicenseFile(null);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert(
          `Failed to submit form: ${errorData.message || "Please try again."}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "40px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Finance asset loans
      </Typography>

      {/* Body Text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Keti is a leading provider of financing solutions to the healthcare
        industry in Africa. With more than 5 years of experience, we help
        customers improve their clinical, operational, and financial outcomes by
        providing flexible offerings to meet their cash and technology needs.
      </Typography>

      {/* Image and Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          gap: "40px",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        {/* Left: Image */}
        <Box
          sx={{
            flex: 1,
            maxWidth: "593px",
          }}
        >
          <Box
            component="img"
            src={Image31} // Use the imported image
            alt="Finance Loans"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "14px",
            }}
          />
        </Box>

        {/* Right: Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0%",
              marginBottom: "20px",
            }}
          >
            Our partner health facilities can apply for loans of up to $15000
            worth of Telemedicine devices. We have partnerships with more than
            15 telemedicine device makers, and all these are compatible with our
            telemedicine AI chatbot KETI.
          </Typography>

          {/* List of Devices */}
          <Box
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "30px",
              letterSpacing: "0%",
            }}
          >
            <Box>✅ EKG monitors</Box>
            <Box>✅ Pulse oximeters</Box>
            <Box>✅ Blood pressure monitors</Box>
            <Box>✅ Digital thermometers</Box>
            <Box>✅ Spirometers</Box>
            <Box>✅ Electrocardiogram (ECG) Monitors</Box>
          </Box>
        </Box>
      </Box>

      {/* Apply for Loan Section */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          fontWeight: 600,
          fontSize: "38px",
          lineHeight: "40px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Apply for loan
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* First Name and Last Name */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          }}
        >
          <TextField
            fullWidth
            label="First Name (*)"
            variant="outlined"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
          />
          <TextField
            fullWidth
            label="Last Name (*)"
            variant="outlined"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
        </Box>

        {/* Phone and Email */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          }}
        >
          <TextField
            fullWidth
            label="Phone (*)"
            variant="outlined"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          <TextField
            fullWidth
            label="Email (*)"
            variant="outlined"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </Box>

        {/* Facility Name */}
        <TextField
          fullWidth
          label="Facility Name (*)"
          variant="outlined"
          placeholder="Enter your facility name"
          name="facilityName"
          value={formData.facilityName}
          onChange={(e) =>
            setFormData({ ...formData, facilityName: e.target.value })
          }
          required
        />

        {/* Facility Report */}
        <Box>
          <input
            type="file"
            id="facility-report"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFacilityReportUpload}
            style={{ display: "none" }} // Hide the default file input
          />
          <label htmlFor="facility-report">
            <Button
              variant="outlined"
              component="span"
              sx={{
                width: "100%",
                padding: "10px",
                borderColor: "#890085",
                color: "#890085",
                "&:hover": {
                  borderColor: "#6a0067",
                  color: "#6a0067",
                },
              }}
            >
              {facilityReportFile
                ? facilityReportFile.name
                : "Upload Facility Report (*)"}
            </Button>
          </label>
        </Box>

        {/* License */}
        <Box>
          <input
            type="file"
            id="license"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleLicenseUpload}
            style={{ display: "none" }} // Hide the default file input
          />
          <label htmlFor="license">
            <Button
              variant="outlined"
              component="span"
              sx={{
                width: "100%",
                padding: "10px",
                borderColor: "#890085",
                color: "#890085",
                "&:hover": {
                  borderColor: "#6a0067",
                  color: "#6a0067",
                },
              }}
            >
              {licenseFile ? licenseFile.name : "Upload License (*)"}
            </Button>
          </label>
        </Box>

        {/* Request Loan Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#890085",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "25px",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#6a0067",
            },
          }}
        >
          Request Loan
        </Button>
      </Box>
    </Box>
  );
};

export default FinanceLoans;

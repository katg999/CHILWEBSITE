import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import Image31 from "../assets/images/image 31.svg"; // Correctly import the image

const FinanceLoans = () => {
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
          />
          <TextField
            fullWidth
            label="Last Name (*)"
            variant="outlined"
            placeholder="Enter your last name"
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
          />
          <TextField
            fullWidth
            label="Email (*)"
            variant="outlined"
            placeholder="Enter your email"
          />
        </Box>

        {/* Facility Name */}
        <TextField
          fullWidth
          label="Facility Name (*)"
          variant="outlined"
          placeholder="Enter your facility name"
        />

        {/* Facility Report */}
        <TextField
          fullWidth
          label="Facility Report (*)"
          variant="outlined"
          placeholder="Upload file (.pdf, .doc, .jpg, .png)"
          InputProps={{
            sx: {
              "& input::placeholder": {
                color: "#890085", // Placeholder color
              },
            },
          }}
        />

        {/* License */}
        <TextField
          fullWidth
          label="License (*)"
          variant="outlined"
          placeholder="Upload file (.pdf, .doc, .jpg, .png)"
          InputProps={{
            sx: {
              "& input::placeholder": {
                color: "#890085", // Placeholder color
              },
            },
          }}
        />

        {/* Request Loan Button */}
        <Button
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

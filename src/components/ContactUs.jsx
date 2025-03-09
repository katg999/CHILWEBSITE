import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import PolicyIcon from "../assets/images/Policy.svg"; // Ensure this path is correct
import LocationIcon from "../assets/images/location-01.svg"; // Ensure this path is correct

const ContactUs = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
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
        Get in touch
      </Typography>
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
        We’d love to hear from you. Please fill out this form.
      </Typography>

      {/* Form Section */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "40px", // Add space below the form
        }}
      >
        {/* Flexbox for First Name and Last Name */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on desktop
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

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email (*)"
          variant="outlined"
          placeholder="Enter your email"
        />

        {/* Phone Field */}
        <TextField
          fullWidth
          label="Phone"
          variant="outlined"
          placeholder="Enter your phone number"
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Message (*)"
          variant="outlined"
          placeholder="Enter your message"
          multiline
          rows={4}
        />

        {/* Privacy Policy */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <img src={PolicyIcon} alt="Privacy Policy" />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            You agree to our privacy-friendly policy.
          </Typography>
        </Box>

        {/* Send Message Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#890085",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "25px", // Rounded button
            "&:hover": {
              backgroundColor: "#6a0067",
            },
          }}
        >
          Send Message
        </Button>
      </Box>

      {/* Location Section */}
      <Box
        sx={{
          marginTop: "40px", // Add space above the location section
          backgroundColor: "#FDF7FD", // Background color
          borderRadius: "14px", // Rounded corners
          padding: "55px 144px", // Padding
          maxWidth: "991px", // Max width
          margin: "0 auto", // Center the section
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Kampala Location */}
          <Box
            sx={{
              width: "165px",
              textAlign: "center",
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Kampala
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              4th Floor Bible House Bombo Road Kampala
            </Typography>
          </Box>

          {/* Kenya Location */}
          <Box
            sx={{
              width: "165px",
              textAlign: "center",
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Kenya
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Uganda Road Daima Towers (MUPS) Eldoret
            </Typography>
          </Box>

          {/* Tanzania Location */}
          <Box
            sx={{
              width: "165px",
              textAlign: "center",
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Tanzania
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Sky City Mall Dar es Salaam
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import NewsIcon from "../assets/images/NEWS.svg";
import LeftIcon from "../assets/images/left1.svg";
import RightIcon from "../assets/images/right.svg";
import LogonvImage from "../assets/images/SHAM1.png";
import BloombergImage from "../assets/images/Bloomberg New Economy Catalyst.webp";
import ShamImage from "../assets/images/SHAM2.png";

const News = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white", // White background
        py: 8, // Padding for spacing
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative", // Relative positioning for scroll icons
      }}
    >
      {/* Scroll Icons (Left and Right) */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: 2,
        }}
      >
        {/* Left Icon with Circular Enclosure */}
        <Box
          sx={{
            backgroundColor: "white", // White background
            borderRadius: "50%", // Circular shape
            width: "40px", // Fixed width
            height: "40px", // Fixed height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
            cursor: "pointer", // Pointer cursor on hover
          }}
        >
          <Box
            component="img"
            src={LeftIcon}
            alt="Left Icon"
            sx={{ width: "24px", height: "24px" }}
          />
        </Box>

        {/* Right Icon with Circular Enclosure */}
        <Box
          sx={{
            backgroundColor: "white", // White background
            borderRadius: "50%", // Circular shape
            width: "40px", // Fixed width
            height: "40px", // Fixed height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
            cursor: "pointer", // Pointer cursor on hover
          }}
        >
          <Box
            component="img"
            src={RightIcon}
            alt="Right Icon"
            sx={{ width: "24px", height: "24px" }}
          />
        </Box>
      </Box>

      {/* News Icon */}
      <Box
        component="img"
        src={NewsIcon}
        alt="News Icon"
        sx={{ width: "120px", height: "120px", mb: 2 }} // Larger icon
      />

      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: "bold",
          color: "#000000",
          textAlign: "center",
          mb: 2,
        }}
      >
        See why Keti is making waves
      </Typography>

      {/* Body Text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist",
          color: "#333",
          textAlign: "center",
          maxWidth: "600px",
          mb: 6,
        }}
      >
        Top outlets spotlight our mission to transform healthcare.
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Card 1: New Vision */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative", // Relative positioning for button overlay
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={LogonvImage}
            alt="New Vision"
            sx={{
              width: "100%",
              borderRadius: "10px",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute", // Absolute positioning for button overlay
              top: "10px", // Adjust top position as needed
              left: "10px", // Adjust left position as needed
              backgroundColor: "white", // White background
              borderRadius: "20px",
              color: "#CD8800", // Text color
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "none",
              px: 2,
              py: 1,
              border: "2px solid #CD8800", // Border color
              "&:hover": {
                backgroundColor: "#f0f0f0", // Light gray on hover
              },
            }}
          >
            New Vision
          </Button>

          {/* Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              color: "#333",
              textAlign: "center",
            }}
          >
            Medical AI Platform to predict childbirth risks
          </Typography>
        </Box>

        {/* Card 2: Bloomberg */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative", // Relative positioning for button overlay
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={BloombergImage}
            alt="Bloomberg"
            sx={{
              width: "100%",
              borderRadius: "10px",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute", // Absolute positioning for button overlay
              top: "10px", // Adjust top position as needed
              left: "10px", // Adjust left position as needed
              backgroundColor: "#F4FFED", // Background color
              borderRadius: "20px",
              color: "#3D7400", // Text color
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "none",
              px: 2,
              py: 1,
              border: "2px solid #529700", // Border color
              "&:hover": {
                backgroundColor: "#e0f5d7", // Lighter green on hover
              },
            }}
          >
            Bloomberg
          </Button>

          {/* Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              color: "#333",
              textAlign: "center",
            }}
          >
            Drones and AI screen cancer in remote Uganda: Shamim Nabuuma
            Kaliisa’s tech saves lives in rural villages.
          </Typography>
        </Box>

        {/* Card 3: Independent */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative", // Relative positioning for button overlay
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={ShamImage}
            alt="Independent"
            sx={{
              width: "100%",
              borderRadius: "10px",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute", // Absolute positioning for button overlay
              top: "10px", // Adjust top position as needed
              left: "10px", // Adjust left position as needed
              backgroundColor: "#FFF8F6", // Background color
              borderRadius: "20px",
              color: "#DD0005", // Text color
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "none",
              px: 2,
              py: 1,
              border: "2px solid #FF3B30", // Border color
              "&:hover": {
                backgroundColor: "#ffe6e3", // Lighter red on hover
              },
            }}
          >
            Independent
          </Button>

          {/* Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              color: "#333",
              textAlign: "center",
            }}
          >
            Fighting cervical cancer deaths with AI innovation
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default News;

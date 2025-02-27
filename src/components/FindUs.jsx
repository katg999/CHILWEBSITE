import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Import the image
import virtualDocImage from "../assets/images/VIRTUALDOC.jpg";

// Styled component for the background image container
const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${virtualDocImage})`,
  backgroundSize: "cover", // Ensure the image covers the entire container
  backgroundPosition: "center", // Center the image
  height: "400px", // Set a fixed height (adjust as needed)
  display: "flex",
  alignItems: "center", // Vertically center the text
  justifyContent: "center", // Horizontally center the text
  color: "white", // Text color
  textAlign: "center", // Center align the text
  position: "relative", // For overlay effect
  width: "100vw", // Full viewport width
  marginLeft: "calc(-50vw + 50%)", // Center the component horizontally
  overflow: "hidden", // Hide overflow
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
  },
}));

// Styled component for the text
const OverlayText = styled(Typography)(({ theme }) => ({
  position: "relative", // Ensure text is above the overlay
  zIndex: 1, // Bring text to the front
  fontSize: "2rem", // Adjust font size as needed
  fontWeight: "bold", // Bold text
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem", // Smaller font size for mobile
  },
}));

const FindUs = () => {
  return (
    <BackgroundContainer>
      <OverlayText variant="h3">
        Find Us In Africa, Uganda, Kenya, Tanzania, and Ethiopia
      </OverlayText>
    </BackgroundContainer>
  );
};

export default FindUs;

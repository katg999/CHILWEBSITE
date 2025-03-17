import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import BackgroundSvg from "../assets/images/Vector.svg";
import WhatsappIcon from "../assets/images/Watsapp.svg";
import PlayStoreIcon from "../assets/images/Component 1.svg";
import AppStoreIcon from "../assets/images/Component 2.png";
import FemaleImage from "../assets/images/female.png";

const ActNow = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCEAFB", // Background color
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "40px 20px", md: "60px 40px" }, // Responsive padding
        position: "relative", // For absolute positioning of the background SVG
        overflow: "hidden", // Ensure the image blends seamlessly
        minHeight: "400px", // Reduced height
        width: "100%", // Ensure it spans the full width
        boxSizing: "border-box", // Prevent overflow
      }}
    >
      {/* Background SVG on the left */}
      <Box
        component="img"
        src={BackgroundSvg}
        alt="Background SVG"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%", // Ensure it covers the entire width
          zIndex: 1, // Ensure it stays behind the content
          opacity: 0.5, // Adjust opacity if needed
        }}
      />

      {/* Left Section: Text and Buttons */}
      <Box
        sx={{
          zIndex: 2, // Ensure content is above the background SVG
          maxWidth: { xs: "100%", md: "50%" }, // Limit width on desktop
          width: "100%", // Ensure it spans the full width
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "44px" }, // Responsive font size
            lineHeight: { xs: "40px", md: "52px" }, // Responsive line height
            letterSpacing: "0%",
            color: "#000000",
            mb: 2, // Margin bottom
          }}
        >
          Act now, your patients can’t wait
        </Typography>

        {/* Body Text */}
        <Typography
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            lineHeight: { xs: "20px", md: "26px" }, // Responsive line height
            letterSpacing: "0%",
            color: "#333",
            mb: 4, // Margin bottom
          }}
        >
          Without Keti AI, patients miss expert care daily. Join 1,030+ thriving
          facilities via WhatsApp, Android, or iOS—start now!
        </Typography>

        {/* Buttons Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on desktop
            gap: 2, // Spacing between buttons
            justifyContent: { xs: "center", md: "flex-start" }, // Center buttons on mobile
          }}
        >
          {/* Button 1: Chat with Keti */}
          <Button
            sx={{
              backgroundColor: "white",
              color: "#000000",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" }, // Responsive padding
              gap: "8px", // Adjusted gap between icon and text
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" }, // Responsive font size
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Ensure text stays on one line
              "&:hover": {
                backgroundColor: "#f0f0f0", // Light gray on hover
              },
            }}
          >
            <Box
              component="img"
              src={WhatsappIcon}
              alt="WhatsApp Icon"
              sx={{ width: "20px", height: "20px" }} // Fixed icon size
            />
            Chat with Keti
          </Button>

          {/* Button 2: Download Play Store */}
          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" }, // Responsive padding
              gap: "8px", // Adjusted gap between icon and text
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" }, // Responsive font size
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Ensure text stays on one line
              "&:hover": {
                backgroundColor: "#333333", // Darker black on hover
              },
            }}
          >
            <Box
              component="img"
              src={PlayStoreIcon}
              alt="Play Store Icon"
              sx={{ width: "20px", height: "20px" }} // Fixed icon size
            />
            Play Store
          </Button>

          {/* Button 3: Download On AppStore */}
          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" }, // Responsive padding
              gap: "8px", // Adjusted gap between icon and text
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" }, // Responsive font size
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Ensure text stays on one line
              "&:hover": {
                backgroundColor: "#333333", // Darker black on hover
              },
            }}
          >
            <Box
              component="img"
              src={AppStoreIcon}
              alt="App Store Icon"
              sx={{ width: "20px", height: "20px" }} // Fixed icon size
            />
            AppStore
          </Button>
        </Box>
      </Box>

      {/* Right Section: Female Image */}
      <Box
        sx={{
          zIndex: 2, // Ensure content is above the background SVG
          position: { xs: "relative", md: "absolute" }, // Relative on mobile, absolute on desktop
          top: { xs: "auto", md: 0 }, // Reset top on mobile
          right: { xs: "auto", md: 0 }, // Reset right on mobile
          height: { xs: "auto", md: "100%" }, // Auto height on mobile
          width: { xs: "100%", md: "40%" }, // Full width on mobile, 40% on desktop
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" }, // Center on mobile
          justifyContent: { xs: "center", md: "flex-end" }, // Center on mobile
          mt: { xs: 4, md: 0 }, // Add margin top on mobile
        }}
      >
        <Box
          component="img"
          src={FemaleImage}
          alt="Female Image"
          sx={{
            width: { xs: "80%", md: "100%" }, // Adjust width on mobile
            height: { xs: "auto", md: "100%" }, // Auto height on mobile
            objectFit: "cover", // Ensure the image covers the area
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ActNow;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import BackgroundSvg from "../assets/images/Vector.svg";
import WhatsappIcon from "../assets/images/Watsapp.svg";
import PlayStoreIcon from "../assets/images/Component 1.svg";
import AppStoreIcon from "../assets/images/Component 2.png";
import FemaleImage from "../assets/images/HandImage.png";

const ActNow = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCEAFB",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "40px 20px", md: "60px 40px" },
        position: "relative",
        overflow: "hidden",
        minHeight: "400px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Background SVG */}
      <Box
        component="img"
        src={BackgroundSvg}
        alt="Background SVG"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
          opacity: 0.5,
        }}
      />

      {/* Left Section: Text and Buttons */}
      <Box
        sx={{
          zIndex: 2,
          maxWidth: { xs: "100%", md: "50%" },
          width: "100%",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "44px" },
            lineHeight: { xs: "40px", md: "52px" },
            letterSpacing: "0%",
            color: "#000000",
            mb: 2,
          }}
        >
          Act now, your patients can't wait
        </Typography>

        <Typography
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "20px", md: "26px" },
            letterSpacing: "0%",
            color: "#333",
            mb: 4,
          }}
        >
          Without Keti AI, patients miss expert care daily. Join 1,030+ thriving
          facilities via WhatsApp, Android, or iOS—start now!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "#000000",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" },
              gap: "8px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Box
              component="img"
              src={WhatsappIcon}
              alt="WhatsApp Icon"
              sx={{ width: "20px", height: "20px" }}
            />
            Chat with Keti
          </Button>

          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" },
              gap: "8px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <Box
              component="img"
              src={PlayStoreIcon}
              alt="Play Store Icon"
              sx={{ width: "20px", height: "20px" }}
            />
            Play Store
          </Button>

          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "8px 16px" },
              gap: "8px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <Box
              component="img"
              src={AppStoreIcon}
              alt="App Store Icon"
              sx={{ width: "20px", height: "20px" }}
            />
            AppStore
          </Button>
        </Box>
      </Box>

      {/* Right Section: Female Image - Hidden on small screens */}
      <Box
        sx={{
          zIndex: 2,
          display: { xs: "none", md: "flex" }, // Hidden on xs, shown on md and up
          position: "absolute",
          right: 0,
          height: "100%",
          width: "40%",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="img"
          src={FemaleImage}
          alt="Female Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ActNow;

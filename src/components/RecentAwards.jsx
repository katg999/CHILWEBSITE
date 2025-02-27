import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import forbesLogo from "../assets/images/Forbes Youth Icon Awards.webp";
import GoogleForStartups from "../assets/images/GoogleForStartups.webp";
import BusinessFightsPoverty from "../assets/images/Business Fights Poverty.webp";
import FEMTECH from "../assets/images/FEMTECH.webp";
import Bloomberg from "../assets/images/Bloomberg New Economy Catalyst.webp";
import FemTechWorls from "../assets/images/Femtech Worls.webp";
import Forbes30Under30 from "../assets/images/Forbes 30 Under 30.webp";

// Keyframes for the scrolling animation
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Styled component for the scrolling container
const ScrollContainer = styled(Box)(({ theme, isPaused }) => ({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "200%", // Double the width to accommodate duplicated logos
  animation: `${scrollLeft} 20s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

// Styled component for each logo
const Logo = styled("img")(({ theme }) => ({
  height: "80px", // Logo size
  margin: "0 30px", // Spacing between logos
}));

const RecentAwards = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Logos array
  const logos = [
    forbesLogo,
    GoogleForStartups,
    BusinessFightsPoverty,
    FEMTECH,
    Bloomberg,
    FemTechWorls,
    Forbes30Under30,
  ];

  // Function to handle pause
  const handlePause = () => {
    setIsPaused(true);
  };

  // Function to handle play
  const handlePlay = () => {
    setIsPaused(false);
  };

  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        marginLeft: "calc(-50vw + 50%)", // Center the component horizontally
        overflow: "hidden", // Hide overflow
        position: "relative", // For absolute positioning of the pause overlay
        backgroundColor: "#f0f0f0", // Optional: Add a background color
        py: 4, // Add some vertical padding
        textAlign: "center", // Center align content
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "purple",
          mb: 2,
        }}
      >
        Recent Awards
      </Typography>
      <ScrollContainer isPaused={isPaused}>
        {/* Original logos */}
        {logos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Award Logo ${index + 1}`} />
        ))}
        {/* Duplicated logos for seamless scrolling */}
        {logos.map((logo, index) => (
          <Logo
            key={`dup-${index}`}
            src={logo}
            alt={`Award Logo ${index + 1}`}
          />
        ))}
      </ScrollContainer>
      {/* Pause and Play Buttons */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          onClick={handlePause}
          disabled={isPaused} // Disable if already paused
          sx={{
            mr: 2,
            backgroundColor: "purple", // Purple background
            color: "white", // White text
            "&:hover": {
              backgroundColor: "#6a1b9a", // Darker purple on hover
            },
          }}
        >
          Pause
        </Button>
        <Button
          variant="contained"
          onClick={handlePlay}
          disabled={!isPaused} // Disable if already playing
          sx={{
            backgroundColor: "purple", // Purple background
            color: "white", // White text
            "&:hover": {
              backgroundColor: "#6a1b9a", // Darker purple on hover
            },
          }}
        >
          Play
        </Button>
      </Box>
    </Box>
  );
};

export default RecentAwards;

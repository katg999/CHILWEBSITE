import React from "react";
import { Box, Typography } from "@mui/material";
import benefitsIcon from "../assets/images/Frame.svg"; // Use the SVG icon

const BenefitsSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      mt={{ xs: 3, md: 6 }}
      px={2}
    >
      {/* Icon and Benefits Text */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        position="relative" // Needed for the absolute positioning of the line
      >
        {/* Purple Line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "-12px", md: "-16px" }, // Adjust position based on screen size
            height: "100%", // Full height of the container
            width: "4px", // Thickness of the line
            backgroundColor: "#91368A", // Purple color
            borderRadius: "2px", // Rounded edges
          }}
        />

        {/* Benefits Icon */}
        <img
          src={benefitsIcon}
          alt="Benefits Icon"
          style={{ width: 24, height: 24 }}
        />

        {/* Benefits Text */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Bricolage Grotesque",
            color: "#91368A",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Benefits
        </Typography>
      </Box>

      {/* Main Heading with Line Breaks */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: "bold",
          color: "#000", // Bold Black Color
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          mt: 2,
          maxWidth: "90%",
        }}
      >
        Transform your facility into <br /> a healthcare powerhouse
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist",
          color: "#666",
          fontSize: { xs: "0.9rem", md: "1rem" },
          maxWidth: { xs: "90%", md: "600px" },
          mt: 2,
        }}
      >
        With Keti, your patients get world-class care onsite. Save time, cut
        costs, build trust—join 1,030+ thriving facilities. More than
        telehealth, it’s your success.
      </Typography>
    </Box>
  );
};

export default BenefitsSection;

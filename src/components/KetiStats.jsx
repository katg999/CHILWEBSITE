import React from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";

// Import the PNG images
import SHAM1 from "../assets/images/AccessCare.svg";
import SHAM2 from "../assets/images/AIPoweredAssistant.svg";
import SHAM3 from "../assets/images/HealthCare Facility.svg";
import SHAM4 from "../assets/images/PatientFollowUp.svg";
import SHAM5 from "../assets/images/SeamLessHealthCareExprience.svg";
import SHAM6 from "../assets/images/Privacy.svg";

const KetiStats = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Updated stats content with imported PNG images
  const stats = [
    {
      title: "24/7 Access to Care",
      description:
        "Get instant access to e-consultations, e-pharmacy, e-laboratory, and e-referrals; empowering you to deliver top-tier healthcare without extra overhead.",
      image: SHAM1,
    },
    {
      title: "AI-powered Assistant",
      description:
        "Discover seamless guidance with Keti, our AI assistant, for registering, scheduling, and answering your questions.",
      image: SHAM2,
    },
    {
      title: "Network of Specialists",
      description:
        "Get specialized care for your patients with licensed telemedicine specialists serving healthcare facilities worldwide.",
      image: SHAM3,
    },
    {
      title: "Patient Follow-up",
      description:
        "Secure unmatched 24/7 patient follow-up with our unique AI-human telemedicine blend, exclusive to Africa and the Middle East.",
      image: SHAM4,
    },
    {
      title: "Seamless Healthcare Experience",
      description:
        "Tap into nearby labs and services instantly with our platform—no stress over missing tests, just chat and get it done.",
      image: SHAM5,
    },
    {
      title: "Privacy & Security",
      description:
        "Get ultimate patient record confidentiality, ensuring secure access to medical records with advanced AI technology.",
      image: SHAM6,
    },
  ];

  return (
    <Box
      sx={{
        mt: 8,
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F7F9FD",
        py: 6,
      }}
    >
      {/* Stats Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // Single column on extra-small screens
            sm: "1fr 1fr", // Two columns on small screens
            md: "1fr 1fr 1fr", // Three columns on medium screens
            lg: "1fr 1fr 1fr 1fr", // Four columns on large screens
          },
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              color: "#000000",
              borderRadius: 2,
              overflow: "hidden", // Ensures image does not overflow
            }}
          >
            {/* Image Container - Adjusted for full coverage */}
            <Box
              component="img"
              src={stat.image}
              alt={stat.title}
              sx={{
                width: "100%",
                height: { xs: "150px", sm: "200px", md: "250px" }, // Adjust as needed
                objectFit: "cover", // Makes sure the image fills the space properly
              }}
            />

            {/* Stat Title - Updated Typography */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: { xs: "20px", sm: "24px" },
                letterSpacing: "0%",
                mt: 2,
                color: "#000000",
                textAlign: "center",
                px: 2,
              }}
            >
              {stat.title}
            </Typography>

            {/* Stat Description - Updated Typography */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "14px" },
                lineHeight: { xs: "16px", sm: "20px" },
                letterSpacing: "0%",
                color: "#333",
                mt: 1,
                textAlign: "center",
                px: 2, // Adds some padding for better readability
                pb: 2,
              }}
            >
              {stat.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default KetiStats;

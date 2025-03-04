import React from "react";
import { Box, Typography, Paper } from "@mui/material";

// Import the PNG images
import SHAM1 from "../assets/images/SHAM1.png";
import SHAM2 from "../assets/images/SHAM2.png";
import SHAM3 from "../assets/images/SHAM3.png";
import SHAM4 from "../assets/images/SHAM4.png";

const KetiStats = () => {
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
  ];

  return (
    <Box
      sx={{
        mt: 8,
        px: 4,
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
              p: 2,
              textAlign: "center",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              color: "#000000",
            }}
          >
            {/* Image at the top - Adjusted for better responsiveness */}
            <Box
              component="img"
              src={stat.image}
              alt={stat.title}
              sx={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {/* Stat Title */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mt: 2,
                fontFamily: "Bricolage Grotesque",
                color: "#000000",
              }}
            >
              {stat.title}
            </Typography>

            {/* Stat Description */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist",
                color: "#333",
                mt: 1,
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

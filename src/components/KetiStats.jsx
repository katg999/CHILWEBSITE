import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import GroupIcon from "@mui/icons-material/Group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const KetiStats = () => {
  // Array of stats data to dynamically render each statistic
  const stats = [
    {
      title: "50 Million Visits",
      description: "Achieved with KETI AI-powered services.",
      icon: <PeopleIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
    },
    {
      title: "1.2 Million Users",
      description:
        "Registered users benefiting from personalized AI healthcare.",
      icon: <GroupIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
    },
    {
      title: "95% Satisfaction",
      description: "Customer satisfaction rate based on surveys.",
      icon: <ArrowUpwardIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
    },
    {
      title: "1.5 Billion Data Points",
      description: "Analyzed and processed by our AI to improve accuracy.",
      icon: <ArrowUpwardIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
    },
    {
      title: "99% Uptime",
      description: "KETI AI is always available and reliable.",
      icon: <ArrowUpwardIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
    },
    {
      title: "500+ Healthcare Partners",
      description: "Collaborations with top healthcare organizations.",
      icon: <GroupIcon sx={{ fontSize: "2.5rem", color: "white" }} />, // White icon
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
      }}
    >
      {/* Title with Purple Color */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1 1 calc(33.333% - 32px)", // Adjust the width based on the gap
              minWidth: "250px",
              maxWidth: "300px",
              backgroundColor: "purple", // Purple background for the card
              color: "white", // White text for the card
            }}
          >
            <Box sx={{ mb: 1.5 }}>{stat.icon}</Box>
            {/* Stat Title with White Color */}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "white" }} // White text
            >
              {stat.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {" "}
              {stat.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default KetiStats;

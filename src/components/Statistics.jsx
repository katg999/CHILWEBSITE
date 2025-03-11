import React from "react";
import { Box, Typography } from "@mui/material";

const statisticsData = [
  { label: "Laboratories", value: "211" },
  { label: "Pharmacies", value: "96" },
  { label: "Consultations", value: "4M+", highlight: true },
  { label: "Facilities", value: "1030" },
  { label: "Doctors", value: "209" },
];

const Statistics = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {statisticsData.map((stat, index) => (
          <StatBox key={index} stat={stat} />
        ))}
      </Box>
    </Box>
  );
};

// Extracted reusable StatBox component
const StatBox = ({ stat }) => {
  return (
    <Box sx={{ minWidth: "120px", width: { xs: "100%", sm: "auto" } }}>
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(0, 0, 0, 0.54)",
        }}
      >
        {stat.label}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 800,
          fontSize: "54px",
          lineHeight: "100%",
          color: "black",
          marginTop: "8px",
        }}
      >
        {stat.value.includes("+") ? (
          <>
            {stat.value.replace("+", "")}
            <span style={{ color: "#7D0C75" }}>+</span>
          </>
        ) : (
          stat.value
        )}
      </Typography>
    </Box>
  );
};

export default Statistics;

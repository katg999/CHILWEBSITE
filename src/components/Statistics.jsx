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
        width: "100vw", // Expand to full viewport width
        backgroundColor: "white",
        padding: "40px 0", // Remove side padding
        overflowX: "hidden", // Prevent unwanted horizontal scrolling
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-evenly", // Spread items evenly across width
          alignItems: "center",
          width: "100%",
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

const StatBox = ({ stat }) => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center", minWidth: "120px" }}>
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

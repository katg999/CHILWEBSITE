import React from "react";
import { Box, Typography, Button } from "@mui/material";
import WorkIcon from "../assets/images/Work.svg"; // Icon for "Our Works"
import SHAM3 from "../assets/images/SHAM3.png"; // Image for the left side
import ArrowIcon from "../assets/images/arrow-right-02-sharp.svg"; // Purple arrow icon

const OurWorksSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Icon with Purple Line and "Our Works" Text at the Top */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          width: "132px",
          height: "32px",
          borderLeft: "1px solid #91368A", // Purple left border
          padding: "4px 16px", // Padding as specified
        }}
      >
        <img
          src={WorkIcon}
          alt="Our Works Icon"
          style={{ width: 24, height: 24 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Bricolage Grotesque",
            color: "#91368A",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Our Works
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          width: "100%",
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={SHAM3}
            alt="Healthcare Impact"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* Right Side - Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "44px" },
              lineHeight: { xs: "1.2", md: "52px" },
              color: "#000",
            }}
          >
            Real impact in action
          </Typography>

          {/* Body Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: { xs: "0.9rem", md: "16px" },
              lineHeight: { xs: "1.5", md: "20px" },
              color: "#666",
            }}
          >
            Bringing healthcare closer to those who need it most. Through
            innovative telemedicine and on-ground medical support, we’re
            transforming access to quality care. Every consultation, every
            diagnosis, and every treatment delivered makes a real difference in
            people’s lives.
          </Typography>

          {/* Bullet Points */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              pl: 0, // Remove default padding
            }}
          >
            {[
              "✅ Empowering local healthcare providers",
              "✅ Bridging the gap between technology & patient care",
              "✅ Ensuring no one is left behind",
            ].map((point, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start", // Align items to the start
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "30px",
                    color: "#666",
                    textAlign: "left", // Ensure text is aligned to the left
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Purple Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#91368A",
              color: "#FFF",
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "0.9rem", md: "1rem" },
              textTransform: "none",
              borderRadius: "24px",
              px: 4,
              py: 1.5,
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#7A2D75",
              },
            }}
          >
            See more of our work
            <Box
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={ArrowIcon}
                alt="Arrow Icon"
                style={{ width: "16px", height: "16px" }}
              />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorksSection;

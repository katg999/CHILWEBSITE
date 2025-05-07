import React from "react";
import { Box, Typography, Button } from "@mui/material";
import WorkIcon from "../assets/images/Work.svg";
import SHAM3 from "../assets/images/SHAM56.jpeg";
import ArrowIcon from "../assets/images/arrow-right-02-sharp.svg";

const OurWorksSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 3, sm: 4, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Icon with Purple Line and "Our Works" Text at the Top */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "8px", sm: "16px" },
          width: { xs: "auto", sm: "132px" },
          height: "32px",
          borderLeft: "1px solid #91368A",
          padding: { xs: "4px 8px", sm: "4px 16px" },
          alignSelf: { xs: "flex-start", sm: "center" },
        }}
      >
        <img
          src={WorkIcon}
          alt="Our Works Icon"
          style={{ width: 20, height: 20 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Bricolage Grotesque",
            color: "#91368A",
            fontWeight: 600,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            whiteSpace: "nowrap",
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
          gap: { xs: 3, md: 8 },
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
            width: "100%",
            maxWidth: { xs: "350px", sm: "500px" },
            margin: { xs: "0 auto", md: "0" },
          }}
        >
          <img
            src={SHAM3}
            alt="Healthcare Impact"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              maxWidth: "100%",
            }}
          />
        </Box>

        {/* Right Side - Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
            width: "100%",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem" },
              lineHeight: { xs: "1.3", md: "1.2" },
              color: "#000",
              textAlign: { xs: "center", md: "left" },
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
              fontSize: { xs: "0.875rem", sm: "1rem" },
              lineHeight: { xs: "1.5", md: "1.6" },
              color: "#666",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Bringing healthcare closer to those who need it most. Through
            innovative telemedicine and on-ground medical support, we're
            transforming access to quality care. Every consultation, every
            diagnosis, and every treatment delivered makes a real difference in
            people's lives.
          </Typography>

          {/* Bullet Points */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 0.5, md: 1 },
              pl: 0,
              mt: { xs: 1, md: 0 },
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
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    lineHeight: { xs: "1.5", sm: "1.8" },
                    color: "#666",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorksSection;

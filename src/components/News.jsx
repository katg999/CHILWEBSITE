import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import NewsIcon from "../assets/images/News (2).svg"; // Updated icon
import LogonvImage from "../assets/images/CNBC-Africa-Logo.png";
import BloombergImage from "../assets/images/Bloomberg.svg";
import ShamImage from "../assets/images/INDEPENDENT.svg";

const News = () => {
  // Define the URLs
  const cnbcUrl =
    "https://www.cnbcafrica.com/media/6362431458112/ai-healthcare-in-africa-scaling-challenges-and-opportunities/";
  const bloombergUrl =
    "https://www.bloomberg.com/news/newsletters/2021-06-26/catalysts-lead-the-way-out-of-pandemic-new-economy-saturday";
  const independentUrl =
    "https://www.independent.co.uk/happylist/uganda-artificial-intelligence-b1926215.html";

  return (
    <Box
      sx={{
        backgroundColor: "white", // White background
        py: 8, // Padding for spacing
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative", // Relative positioning for scroll icons
      }}
    >
      {/* News Icon with Purple Line and Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          width: "180px", // Adjusted width to fit text
          height: "32px",
          borderLeft: "1px solid #91368A", // Purple left border
          padding: "4px 16px", // Padding as specified
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={NewsIcon}
          alt="News Icon"
          sx={{ width: "24px", height: "24px" }} // Adjusted size
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
          In the News
        </Typography>
      </Box>

      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: "bold",
          color: "#000000",
          textAlign: "center",
          mb: 2,
        }}
      >
        See why Keti is making waves
      </Typography>

      {/* Body Text */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist",
          color: "#333",
          textAlign: "center",
          maxWidth: "600px",
          mb: 6,
        }}
      >
        Top outlets spotlight our mission to transform healthcare.
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Card 1: CNBC Africa */}
        <Box
          component="a"
          href={cnbcUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={LogonvImage}
            alt="New Vision"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "200px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "black",
              borderRadius: "20px",
              color: "#CD8800",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "none",
              px: 2,
              py: 1,
              border: "2px solid #000000",
              "&:hover": {
                backgroundColor: "FFFFFF",
              },
            }}
          >
            CNBC AFRICA
          </Button>

          {/* Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              color: "#333",
              textAlign: "center",
            }}
          ></Typography>
        </Box>

        {/* Card 2: Bloomberg */}
        <Box
          component="a"
          href={bloombergUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          {/* Container for image with padding */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              pt: 5,
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={BloombergImage}
              alt="Bloomberg"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "180px",
                objectFit: "contain",
                borderRadius: "10px",
                mt: 3,
              }}
            />

            {/* Button */}
            <Button
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "#F4FFED",
                borderRadius: "20px",
                color: "#3D7400",
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "none",
                px: 2,
                py: 1,
                border: "2px solid #529700",
                "&:hover": {
                  backgroundColor: "#e0f5d7",
                },
                zIndex: 2,
              }}
            >
              Bloomberg
            </Button>
          </Box>

          {/* Text Wrapper */}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                color: "#333",
                textAlign: "center",
              }}
            ></Typography>
          </Box>
        </Box>

        {/* Card 3: Independent */}
        <Box
          component="a"
          href={independentUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", md: "30%" },
            position: "relative",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={ShamImage}
            alt="Independent"
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#FFF8F6",
              borderRadius: "20px",
              color: "#DD0005",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "none",
              px: 2,
              py: 1,
              border: "2px solid #FF3B30",
              "&:hover": {
                backgroundColor: "#ffe6e3",
              },
            }}
          >
            Independent
          </Button>

          {/* Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              color: "#333",
              textAlign: "center",
            }}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default News;

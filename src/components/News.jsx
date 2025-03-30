import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import NewsIcon from "../assets/images/News (2).svg";
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
        backgroundColor: "white",
        py: { xs: 4, sm: 6, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 6 },
        position: "relative",
      }}
    >
      {/* News Icon with Purple Line and Text */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "8px", sm: "16px" },
          width: { xs: "auto", sm: "180px" },
          height: "32px",
          borderLeft: "1px solid #91368A",
          padding: { xs: "4px 8px", sm: "4px 16px" },
          mb: { xs: 3, sm: 4 },
          alignSelf: { xs: "flex-start", sm: "center" },
        }}
      >
        <Box
          component="img"
          src={NewsIcon}
          alt="News Icon"
          sx={{
            width: { xs: "20px", sm: "24px" },
            height: { xs: "20px", sm: "24px" },
          }}
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
          mb: { xs: 1, sm: 2 },
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          px: { xs: 1, sm: 0 },
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
          mb: { xs: 4, sm: 6 },
          fontSize: { xs: "0.875rem", sm: "1rem" },
          px: { xs: 2, sm: 0 },
        }}
      >
        Top outlets spotlight our mission to transform healthcare.
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 4 },
          maxWidth: "1200px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
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
            gap: { xs: 1, sm: 2 },
            width: { xs: "90%", sm: "30%" },
            maxWidth: { xs: "350px", sm: "none" },
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
            alt="CNBC Africa"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: "150px", sm: "200px" },
              objectFit: "contain",
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
              p: { xs: 1, sm: 2 },
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute",
              top: { xs: "8px", sm: "10px" },
              left: { xs: "8px", sm: "10px" },
              backgroundColor: "black",
              borderRadius: "20px",
              color: "#CD8800",
              fontSize: { xs: "10px", sm: "12px" },
              fontWeight: "bold",
              textTransform: "none",
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              border: "2px solid #000000",
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                color: "#000000",
              },
            }}
          >
            CNBC AFRICA
          </Button>
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
            gap: { xs: 1, sm: 2 },
            width: { xs: "90%", sm: "30%" },
            maxWidth: { xs: "350px", sm: "none" },
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
              pt: { xs: 3, sm: 5 },
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
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
                maxHeight: { xs: "130px", sm: "180px" },
                objectFit: "contain",
                mt: { xs: 1, sm: 3 },
                p: { xs: 1, sm: 2 },
              }}
            />

            {/* Button */}
            <Button
              sx={{
                position: "absolute",
                top: { xs: "8px", sm: "10px" },
                left: { xs: "8px", sm: "10px" },
                backgroundColor: "#F4FFED",
                borderRadius: "20px",
                color: "#3D7400",
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: "bold",
                textTransform: "none",
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                border: "2px solid #529700",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "#e0f5d7",
                },
                zIndex: 2,
              }}
            >
              Bloomberg
            </Button>
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
            gap: { xs: 1, sm: 2 },
            width: { xs: "90%", sm: "30%" },
            maxWidth: { xs: "350px", sm: "none" },
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
              height: { xs: "150px", sm: "200px" },
              objectFit: "cover",
              borderRadius: "10px",
              backgroundColor: "#f5f5f5",
            }}
          />

          {/* Button */}
          <Button
            sx={{
              position: "absolute",
              top: { xs: "8px", sm: "10px" },
              left: { xs: "8px", sm: "10px" },
              backgroundColor: "#FFF8F6",
              borderRadius: "20px",
              color: "#DD0005",
              fontSize: { xs: "10px", sm: "12px" },
              fontWeight: "bold",
              textTransform: "none",
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              border: "2px solid #FF3B30",
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "#ffe6e3",
              },
            }}
          >
            Independent
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default News;

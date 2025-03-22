import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Import images and icons
import TestimonailIcon from "../assets/images/Testimonail.svg"; // Updated icon
import TestImage from "../assets/images/TEST.png";
import QuoteIcon from "../assets/images/QUOTE.svg";
import LeftIcon from "../assets/images/left1.svg";
import RightIcon from "../assets/images/right.svg";

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white", // Explicitly set background to white
        py: 8, // Add padding for spacing
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative", // For positioning buttons
      }}
    >
      {/* Testimonial Icon with Purple Line and Text */}
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
          src={TestimonailIcon}
          alt="Testimonial Icon"
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
          Testimonials
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
          mb: 4,
        }}
      >
        Join 1,030+ healthcare heroes thriving with Keti
      </Typography>

      {/* Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center", // Center items vertically
          gap: { xs: 4, md: 8 },
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Image on the Left */}
        <Box
          component="img"
          src={TestImage}
          alt="Testimonial Image"
          sx={{
            width: { xs: "100%", md: "40%" },
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        />

        {/* Testimonial Text and Author */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "60%" },
            textAlign: "left", // Align text to the left
          }}
        >
          {/* Quote Icon and Testimonial Text */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              component="img"
              src={QuoteIcon}
              alt="Quote Icon"
              sx={{ width: "24px", height: "24px", mt: 0.5 }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              Before Keti, my clinic was a referral waiting room. I couldn’t
              help half my patients. Now, I consult specialists instantly, treat
              tough cases, and doubled my patient load in six months. Keti is my
              partner in saving lives and thriving. I’m proud of this network!
            </Typography>
          </Box>

          {/* Testimonial Author */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: "bold",
              color: "#000000",
              textAlign: "left", // Align author to the left
            }}
          >
            Dr. Amina Okoro, General Practitioner
          </Typography>
        </Box>
      </Box>

      {/* Scroll Buttons */}
      <Box
        sx={{
          position: "absolute", // Position buttons absolutely
          right: { xs: "10px", md: "20px" }, // Move buttons to the extreme right
          bottom: { xs: "10px", md: "20px" }, // Move buttons to the bottom
          display: "flex",
          gap: 2,
        }}
      >
        {/* Left Scroll Button */}
        {/* <Button
          sx={{
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white", // White background
            border: "1px solid #ddd", // Add a light border
            "&:hover": {
              backgroundColor: "#f5f5f5", // Light gray on hover
            },
          }}
        >
          <Box
            component="img"
            src={LeftIcon}
            alt="Left Scroll"
            sx={{ width: "20px", height: "20px" }}
          />
        </Button> */}

        {/* Right Scroll Button */}
        {/* <Button
          sx={{
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white", // White background
            border: "1px solid #ddd", // Add a light border
            "&:hover": {
              backgroundColor: "#f5f5f5", // Light gray on hover
            },
          }}
        >
          <Box
            component="img"
            src={RightIcon}
            alt="Right Scroll"
            sx={{ width: "20px", height: "20px" }}
          />
        </Button> */}
      </Box>
    </Box>
  );
};

export default Testimonials;

import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

// Import images
import ketiaiLogo from "../assets/images/KETIAI.jpeg";
import appStore from "../assets/images/AppStore.webp";
import playStore from "../assets/images/PlayStore.webp";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "purple", // Purple background
        padding: { xs: 2, md: 4 }, // Responsive padding
        borderTop: "1px solid #ddd",
        width: "100%", // Full width
        color: "white", // Set default text color to white
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, horizontally on larger screens
          justifyContent: "space-between", // Spread content evenly
          alignItems: "flex-start", // Align items to the top
          gap: 4, // Spacing between columns
          padding: { xs: "0 16px", md: "0" }, // Add padding on small screens to prevent overflow
        }}
      >
        {/* Column 1: Logo and About Us */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <img
            src={ketiaiLogo}
            alt="KETIAI Logo"
            style={{ width: "150px", marginBottom: "16px" }}
          />
          <Typography variant="body2" color="inherit">
            {" "}
            {/* Inherit white color */}
            We get you specialised medical care for your patients online through
            Chilfemtech center AI telehealth platform.
          </Typography>
        </Box>

        {/* Column 2: Quick Links */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom color="inherit">
            {" "}
            {/* Inherit white color */}
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit">
              {" "}
              {/* Inherit white color */}
              Home
            </Link>
            <Link href="#" color="inherit">
              Contact Us
            </Link>
            <Link href="#" color="inherit">
              What we treat
            </Link>
            <Link href="#" color="inherit">
              Services
            </Link>
            <Link href="#" color="inherit">
              Careers
            </Link>
            <Link href="#" color="inherit">
              Press
            </Link>
            <Link href="#" color="inherit">
              E-Hygiene Shop
            </Link>
            <Link href="#" color="inherit">
              AI medical interpreter
            </Link>
          </Stack>
        </Box>

        {/* Column 3: More Links */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom color="inherit">
            {" "}
            {/* Inherit white color */}
            More Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit">
              {" "}
              {/* Inherit white color */}
              Book consultation
            </Link>
            <Link href="#" color="inherit">
              Request a Lab Test
            </Link>
            <Link href="#" color="inherit">
              Order for drugs
            </Link>
            <Link href="#" color="inherit">
              Register as doctor
            </Link>
            <Link href="#" color="inherit">
              Register as laboratory
            </Link>
            <Link href="#" color="inherit">
              Whatsapp Chat
            </Link>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms and conditions
            </Link>
          </Stack>
        </Box>

        {/* Column 4: App Download Links */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom color="inherit">
            {" "}
            {/* Inherit white color */}
            Download Our App
          </Typography>
          <Stack spacing={2}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={appStore}
                alt="Download on the App Store"
                style={{ width: "150px" }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={playStore}
                alt="Download on the Play Store"
                style={{ width: "150px" }}
              />
            </a>
          </Stack>
        </Box>
      </Box>

      {/* Footer Bottom: Copyright and Legal */}
      <Box
        sx={{
          marginTop: 4,
          paddingTop: 2,
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="inherit">
          {" "}
          {/* Inherit white color */}© 2025 KETIAI. All rights reserved.
        </Typography>
        <Typography variant="body2" color="inherit">
          {" "}
          {/* Inherit white color */}
          PL015954.A
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

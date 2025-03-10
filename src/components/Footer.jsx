import React from "react";
import { Box, Typography, Link, Stack, Button, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Import images
import ketiaiLogo from "../assets/images/emoji-logo-black.svg";
import arrowIcon from "../assets/images/arrow-right-02-sharp.svg";
import linkedinIcon from "../assets/images/Linkeldn.svg";
import twitterIcon from "../assets/images/Twitter.svg";
import PlayStoreIcon from "../assets/images/Component 1.svg";
import AppStoreIcon from "../assets/images/Component 2.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: { xs: 2, md: 2.5 },
        borderTop: "1px solid #ddd",
        width: "100%",
        color: "#333",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 2, md: 1 },
          padding: { xs: "0 8px", md: "0" },
        }}
      >
        {/* Column 1: Logo and About Us */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "160px" } }}>
          <img
            src={ketiaiLogo}
            alt="KETIAI Logo"
            style={{ width: "120px", marginBottom: "12px" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#890085",
              color: "white",
              borderRadius: "32px",
              padding: { xs: "6px 16px", md: "6px 20px" },
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 500,
              textTransform: "none",
              mb: 1.5,
              "&:hover": {
                backgroundColor: "#b37600",
              },
            }}
          >
            Get Started
          </Button>
          <Typography variant="body2" color="#333" sx={{ fontSize: "12px" }}>
            © 2025 Keti AI. All rights reserved.
          </Typography>
        </Box>

        {/* Column 2: Quick Links */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "130px" } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20px",
              letterSpacing: "-2%",
              textAlign: { xs: "left", md: "center" },
              color: "#000000",
              mb: 1,
            }}
          >
            Company
          </Typography>
          <Stack spacing={0.5}>
            <Link
              component={RouterLink}
              to="/what-we-treat"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              What we Treat
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Careers
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              E-Hygiene shop
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              AI medical interpreter
            </Link>
          </Stack>
        </Box>

        {/* Column 3: Helpful Links */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "130px" } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20px",
              letterSpacing: "-2%",
              textAlign: { xs: "left", md: "center" },
              color: "#000000",
              mb: 1,
            }}
          >
            Helpful Links
          </Typography>
          <Stack spacing={0.5}>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Book consultation
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Order for drugs
            </Link>
            <Link
              component={RouterLink}
              to="/disaster"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Disaster Medicine
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Register a facility
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Chat with Keti
            </Link>
          </Stack>
        </Box>

        {/* Column 4: Legal */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "130px" } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20px",
              letterSpacing: "-2%",
              textAlign: { xs: "left", md: "center" },
              color: "#000000",
              mb: 1,
            }}
          >
            Legal
          </Typography>
          <Stack spacing={0.5}>
            <Link
              component={RouterLink}
              to="/privacypolicy"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: "18px",
                letterSpacing: "-2%",
                textAlign: { xs: "left", md: "center" },
                color: "#333",
                textDecoration: "none",
              }}
            >
              Terms and Conditions
            </Link>
          </Stack>
        </Box>

        {/* Column 5: Socials */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "130px" } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20px",
              letterSpacing: "-2%",
              textAlign: { xs: "left", md: "center" },
              color: "#000000",
              mb: 1,
            }}
          >
            Socials
          </Typography>
          <Stack
            spacing={1}
            direction="column"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={linkedinIcon}
                alt="LinkedIn Icon"
                sx={{ width: "20px", height: "20px", mr: 1 }}
              />
              <Typography
                sx={{
                  color: "#333",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "18px",
                }}
              >
                LinkedIn
              </Typography>
            </Link>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={twitterIcon}
                alt="Twitter Icon"
                sx={{ width: "20px", height: "20px", mr: 1 }}
              />
              <Typography
                sx={{
                  color: "#333",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "18px",
                }}
              >
                (Formerly Twitter)
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Newsletter Section */}
      <Box
        sx={{
          marginTop: 2.5,
          paddingTop: 2,
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "15px" },
            lineHeight: "20px",
            letterSpacing: "-2%",
            textAlign: "center",
            color: "#000000",
            mb: 1,
          }}
        >
          Subscribe to Our Newsletter
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            backgroundColor: "white",
            borderRadius: "32px",
            border: "1px solid #ddd",
            padding: "5px 14px",
            width: { xs: "90%", sm: "400px" },
            height: "40px",
            margin: "0 auto",
          }}
        >
          <TextField
            placeholder="Enter your email to subscribe to our newsletter!"
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              style: { textDecoration: "none" },
            }}
            sx={{
              flex: 1,
              "& .MuiInputBase-input": {
                fontSize: { xs: "12px", md: "13px" },
                color: "#333",
                textDecoration: "none",
              },
            }}
          />
          <Button
            sx={{
              backgroundColor: "#890085",
              color: "white",
              borderRadius: "32px",
              padding: { xs: "3px 8px", md: "3px 10px" },
              gap: "6px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "13px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#b37600",
              },
            }}
          >
            Subscribe
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={arrowIcon}
                alt="Arrow Icon"
                sx={{ width: "14px", height: "14px" }}
              />
            </Box>
          </Button>
        </Box>
      </Box>

      {/* Download App Buttons */}
      <Box
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
        >
          {/* Button 2: Download Play Store */}
          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "6px 14px" },
              gap: "6px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "13px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <Box
              component="img"
              src={PlayStoreIcon}
              alt="Play Store Icon"
              sx={{ width: "18px", height: "18px" }}
            />
            Play Store
          </Button>

          {/* Button 3: Download On AppStore */}
          <Button
            sx={{
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "40px",
              padding: { xs: "6px 12px", md: "6px 14px" },
              gap: "6px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "13px" },
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <Box
              component="img"
              src={AppStoreIcon}
              alt="App Store Icon"
              sx={{ width: "18px", height: "18px" }}
            />
            AppStore
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

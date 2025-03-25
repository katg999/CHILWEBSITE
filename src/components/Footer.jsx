import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  Button,
  TextField,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

// Import images
import ketiaiLogo from "../assets/images/emoji-logo-black.svg";
import arrowIcon from "../assets/images/arrow-right-02-sharp.svg";
import linkedinIcon from "../assets/images/Linkeldn.svg";
import twitterIcon from "../assets/images/Twitter.svg";
import PlayStoreIcon from "../assets/images/Component 1.svg";
import AppStoreIcon from "../assets/images/Component 2.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Function to open Voiceflow chatbot
  const openVoiceflowChat = () => {
    try {
      if (window.voiceflow?.chat?.open) {
        window.voiceflow.chat.open();
      } else if (window.voiceflow?.chat?.show) {
        window.voiceflow.chat.show();
      } else {
        const chatButton = document.querySelector(".vfrc-launcher-button");
        if (chatButton) chatButton.click();
      }
    } catch (err) {
      console.error("Error opening Voiceflow chat:", err);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://laravelbackendchil.onrender.com/api/newsletter/subscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setSnackbar({
        open: true,
        message: response.data.message || "Thank you for subscribing!",
        severity: "success",
      });
      setEmail("");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors?.email?.[0] ||
        "Failed to subscribe. Please try again.";

      setSnackbar({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          backgroundColor: "white",
          padding: { xs: 2, sm: 3, md: 4 },
          borderTop: "1px solid #ddd",
          width: "100%",
          color: "#333",
          marginBottom: 0,
          paddingBottom: { xs: 3, md: 4 },
        }}
      >
        {/* Main Content */}
        <Grid container spacing={{ xs: 3, md: 2 }}>
          {/* Column 1: Logo and About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack
              direction="column"
              spacing={1.5}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <img
                src={ketiaiLogo}
                alt="KETIAI Logo"
                style={{ width: "120px", marginBottom: "12px" }}
              />
              <Button
                variant="contained"
                onClick={openVoiceflowChat}
                sx={{
                  backgroundColor: "#890085",
                  color: "white",
                  borderRadius: "32px",
                  padding: { xs: "6px 16px", md: "8px 24px" },
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#b37600" },
                }}
              >
                Get Started
              </Button>
              <Typography
                variant="body2"
                color="#333"
                sx={{
                  fontSize: "12px",
                  mt: 1,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                © 2025 Keti AI. All rights reserved.
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                letterSpacing: "-2%",
                textAlign: { xs: "center", sm: "left" },
                color: "#000000",
                mb: 1.5,
              }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              {[
                { name: "What we Treat", to: "/what-we-treat", isRoute: true },
                { name: "E-Hygiene shop", to: "/ehygiene", isRoute: true },
              ].map((item, index) => (
                <Link
                  key={index}
                  component={item.isRoute ? RouterLink : "a"}
                  to={item.isRoute ? item.to : undefined}
                  href={!item.isRoute ? item.to : undefined}
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "18px",
                    letterSpacing: "-2%",
                    textAlign: { xs: "center", sm: "left" },
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": {
                      color: "#890085",
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Helpful Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                letterSpacing: "-2%",
                textAlign: { xs: "center", sm: "left" },
                color: "#000000",
                mb: 1.5,
              }}
            >
              Helpful Links
            </Typography>
            <Stack spacing={1}>
              {[
                { name: "Disaster Medicine", to: "/disaster", isRoute: true },
                {
                  name: "Chat with Keti",
                  to: "#",
                  onClick: openVoiceflowChat,
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  component={item.isRoute ? RouterLink : "a"}
                  to={item.isRoute ? item.to : undefined}
                  href={!item.isRoute ? item.to : undefined}
                  onClick={item.onClick}
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "18px",
                    letterSpacing: "-2%",
                    textAlign: { xs: "center", sm: "left" },
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": {
                      color: "#890085",
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Legal */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                letterSpacing: "-2%",
                textAlign: { xs: "center", sm: "left" },
                color: "#000000",
                mb: 1.5,
              }}
            >
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/privacypolicy"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "18px",
                  letterSpacing: "-2%",
                  textAlign: { xs: "center", sm: "left" },
                  color: "#333",
                  textDecoration: "none",
                  display: "block",
                  "&:hover": {
                    color: "#890085",
                  },
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
                  textAlign: { xs: "center", sm: "left" },
                  color: "#333",
                  textDecoration: "none",
                  display: "block",
                  "&:hover": {
                    color: "#890085",
                  },
                }}
              >
                Terms and Conditions
              </Link>
            </Stack>
          </Grid>

          {/* Column 5: Socials */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                letterSpacing: "-2%",
                textAlign: { xs: "center", sm: "left" },
                color: "#000000",
                mb: 1.5,
              }}
            >
              Socials
            </Typography>
            <Stack
              spacing={1}
              direction="column"
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { opacity: 0.8 },
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
                  "&:hover": { opacity: 0.8 },
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
          </Grid>
        </Grid>

        {/* Newsletter Section */}
        <Box
          sx={{
            marginTop: { xs: 4, md: 5 },
            paddingTop: { xs: 3, md: 3 },
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
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20px",
              letterSpacing: "-2%",
              textAlign: "center",
              color: "#000000",
              mb: 2,
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              backgroundColor: "white",
              borderRadius: "32px",
              border: "1px solid #ddd",
              padding: "5px 14px",
              width: { xs: "100%", sm: "80%", md: "400px" },
              height: "40px",
              margin: "0 auto",
              maxWidth: "600px",
            }}
          >
            <TextField
              placeholder="Enter your email to subscribe to our newsletter!"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              disabled={loading}
              InputProps={{
                disableUnderline: true,
                style: {
                  textDecoration: "none",
                  fontSize: theme.typography.pxToRem(13),
                },
              }}
              sx={{
                flex: 1,
                "& .MuiInputBase-input": {
                  color: "#333",
                },
              }}
            />
            <Button
              type="submit"
              disabled={loading}
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
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#b37600",
                },
                "&:disabled": {
                  backgroundColor: "#cccccc",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <>
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
                </>
              )}
            </Button>
          </Box>
        </Box>

        {/* Download App Buttons */}
        <Box
          sx={{
            marginTop: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
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
                padding: { xs: "8px 16px", md: "8px 20px" },
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
                sx={{ width: "18px", height: "18px", mr: 0.5 }}
              />
              Play Store
            </Button>

            {/* Button 3: Download On AppStore */}
            <Button
              sx={{
                backgroundColor: "#000000",
                color: "white",
                borderRadius: "40px",
                padding: { xs: "8px 16px", md: "8px 20px" },
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
                sx={{ width: "18px", height: "18px", mr: 0.5 }}
              />
              AppStore
            </Button>
          </Stack>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Footer;

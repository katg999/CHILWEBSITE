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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

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
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "white",
      }}
      disableGutters
    >
      <Box
        sx={{
          padding: { xs: 3, sm: 4, md: 5 },
          borderTop: "1px solid #ddd",
          width: "100%",
          color: "#333",
        }}
      >
        {/* Main Content */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Column 1: Logo and About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack
              direction="column"
              spacing={1.5}
              alignItems={{ xs: "center", sm: "flex-start" }}
              sx={{
                px: { xs: 2, sm: 0 },
                maxWidth: { xs: "300px", sm: "none" },
                mx: { xs: "auto", sm: 0 },
              }}
            >
              <img
                src={ketiaiLogo}
                alt="KETIAI Logo"
                style={{
                  width: "120px",
                  marginBottom: "12px",
                }}
              />
              <Button
                variant="contained"
                onClick={openVoiceflowChat}
                sx={{
                  backgroundColor: "#890085",
                  color: "white",
                  borderRadius: "32px",
                  padding: { xs: "8px 20px", md: "10px 24px" },
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: 500,
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
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
                  width: "100%",
                }}
              >
                © 2025 Keti AI. All rights reserved.
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={3} md={2}>
            <Stack
              spacing={1.5}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  textAlign: { xs: "center", sm: "left" },
                  color: "#000000",
                  mb: 1.5,
                }}
              >
                Company
              </Typography>
              <Stack
                spacing={1.5}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Link
                  component={RouterLink}
                  to="/what-we-treat"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "18px",
                    letterSpacing: "-0.02em",
                    textAlign: { xs: "center", sm: "left" },
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": {
                      color: "#890085",
                    },
                  }}
                >
                  What we Treat
                </Link>
                <Link
                  component={RouterLink}
                  to="/ehygiene"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "18px",
                    letterSpacing: "-0.02em",
                    textAlign: { xs: "center", sm: "left" },
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": {
                      color: "#890085",
                    },
                  }}
                >
                  E-Hygiene shop
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Link
                    component={RouterLink}
                    to="/careers"
                    sx={{
                      fontFamily: "Geist",
                      fontWeight: 400,
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: "18px",
                      letterSpacing: "-0.02em",
                      textAlign: { xs: "center", sm: "left" },
                      color: "#333",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#890085",
                      },
                    }}
                  >
                    Careers
                  </Link>
                  <Button
                    variant="outlined"
                    component={RouterLink}
                    to="/careers"
                    sx={{
                      fontFamily: "Geist",
                      fontWeight: 500,
                      fontSize: "10px",
                      lineHeight: "14px",
                      letterSpacing: "-0.02em",
                      backgroundColor: "#F4FFE9",
                      color: "#529700",
                      borderRadius: "12px",
                      border: "0.6px solid #F4FFE9",
                      padding: "2px 6px",
                      minWidth: "auto",
                      height: "18px",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#E0F5D1",
                        border: "0.6px solid #E0F5D1",
                      },
                    }}
                  >
                    Opportunities
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Column 3: Helpful Links */}
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              marginLeft: { xs: 0, sm: "50px" },
            }}
          >
            <Stack
              spacing={1.5}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  textAlign: { xs: "center", sm: "left" },
                  color: "#000000",
                  mb: 1.5,
                }}
              >
                Helpful Links
              </Typography>
              <Stack
                spacing={1}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                {[
                  { name: "Disaster Medicine", to: "/disaster", isRoute: true },
                  {
                    name: "Maternal Health",
                    to: "/maternal-health",
                    isRoute: true,
                  },
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
                      letterSpacing: "-0.02em",
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
            </Stack>
          </Grid>

          {/* Column 4: Legal */}
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              marginLeft: { xs: 0, sm: "80px" },
            }}
          >
            <Stack
              spacing={1.5}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  textAlign: { xs: "center", sm: "left" },
                  color: "#000000",
                  mb: 1.5,
                }}
              >
                Legal
              </Typography>
              <Stack
                spacing={1}
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                <Link
                  component={RouterLink}
                  to="/privacypolicy"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: "18px",
                    letterSpacing: "-0.02em",
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
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Newsletter Section */}
        <Box
          sx={{
            marginTop: { xs: 4, md: 5 },
            paddingTop: { xs: 3, md: 4 },
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
              letterSpacing: "-0.02em",
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
            {/* Commented out app store buttons */}
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

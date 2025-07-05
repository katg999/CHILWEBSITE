import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationIcon from "../assets/images/location-01.svg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    accept_policy: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.accept_policy) {
      setError("Please accept the privacy policy");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://laravelbackendchil.onrender.com/api/contact-submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setSuccess(true);
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        accept_policy: false,
      });
    } catch (err) {
      setError(err.message || "An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: "20px 16px", sm: "30px 24px", md: "40px 20px" },
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
          lineHeight: { xs: "32px", sm: "36px", md: "40px" },
          letterSpacing: "0%",
          textAlign: "center",
          marginTop: { xs: "80px", md: "120px" },
          marginBottom: { xs: "16px", md: "20px" },
        }}
      >
        Get in touch
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "18px" },
          lineHeight: { xs: "22px", md: "26px" },
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: { xs: "24px", md: "40px" },
          padding: { xs: "0 16px", md: 0 },
        }}
      >
        We'd love to hear from you. Please fill out this form.
      </Typography>

      {/* Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "16px", md: "20px" },
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: { xs: "32px", md: "40px" },
          width: "100%",
        }}
      >
        {/* Display success/error messages */}
        {error && (
          <Alert severity="error" sx={{ mb: { xs: 1, md: 2 } }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: { xs: 1, md: 2 } }}>
            Thank you! Your message has been submitted successfully.
          </Alert>
        )}

        {/* Name Fields */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "12px", md: "20px" },
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            label="First Name (*)"
            variant="outlined"
            placeholder="Enter your first name"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            required
            disabled={loading}
            size={isMobile ? "small" : "medium"}
          />
          <TextField
            fullWidth
            label="Last Name (*)"
            variant="outlined"
            placeholder="Enter your last name"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            required
            disabled={loading}
            size={isMobile ? "small" : "medium"}
          />
        </Box>

        {/* Contact Fields */}
        <TextField
          fullWidth
          label="Email (*)"
          variant="outlined"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          disabled={loading}
          size={isMobile ? "small" : "medium"}
        />

        <TextField
          fullWidth
          label="Phone"
          variant="outlined"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={loading}
          size={isMobile ? "small" : "medium"}
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Message (*)"
          variant="outlined"
          placeholder="Enter your message"
          multiline
          rows={isMobile ? 3 : 4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          disabled={loading}
        />

        {/* Privacy Policy */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: { xs: "16px", md: "20px" },
            cursor: "pointer",
            textAlign: "left",
          }}
          onClick={() =>
            !loading &&
            setFormData({ ...formData, accept_policy: !formData.accept_policy })
          }
        >
          {formData.accept_policy ? (
            <CheckBoxIcon
              sx={{ color: "primary.main", fontSize: 24, mt: 0.5 }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              sx={{ color: "action.active", fontSize: 24, mt: 0.5 }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "140%",
              letterSpacing: "0%",
              userSelect: "none",
            }}
          >
            You agree to our privacy-friendly policy.
          </Typography>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth={isMobile}
          sx={{
            backgroundColor: "#890085",
            color: "white",
            padding: { xs: "8px 16px", md: "10px 20px" },
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            borderRadius: "25px",
            alignSelf: isMobile ? "stretch" : "center",
            maxWidth: isMobile ? "100%" : "200px",
            "&:hover": {
              backgroundColor: "#6a0067",
            },
            "&:disabled": {
              backgroundColor: "#cccccc",
            },
          }}
        >
          {loading ? (
            <CircularProgress
              size={isMobile ? 20 : 24}
              sx={{ color: "white" }}
            />
          ) : (
            "Send Message"
          )}
        </Button>
      </Box>

      {/* Location Section */}
      <Box
        sx={{
          marginTop: { xs: "32px", md: "40px" },
          backgroundColor: "#FDF7FD",
          borderRadius: { xs: "10px", md: "14px" },
          padding: {
            xs: "24px 16px",
            sm: "32px 24px",
            md: "48px 32px",
            lg: "55px 144px",
          },
          maxWidth: "991px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "24px", md: "40px" },
            flexWrap: "wrap",
          }}
        >
          {/* Kampala Location */}
          <Box
            sx={{
              width: { xs: "100%", sm: "160px", md: "165px" },
              textAlign: "center",
              maxWidth: { xs: "240px", sm: "none" },
              margin: { xs: "0 auto", sm: "0" },
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Uganda
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: "20px", md: "22px" },
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              4th Floor Bible House Bombo Road Kampala
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "15px" },
                lineHeight: { xs: "18px", md: "20px" },
                letterSpacing: "0%",
                color: "#8B4513",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#8B4513",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                ☎
              </Box>
              +256 751062999
            </Typography>
          </Box>

          {/* Kenya Location */}
          <Box
            sx={{
              width: { xs: "100%", sm: "160px", md: "165px" },
              textAlign: "center",
              maxWidth: { xs: "240px", sm: "none" },
              margin: { xs: "0 auto", sm: "0" },
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Kenya
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: "20px", md: "22px" },
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Uganda Road Daima Towers (MUPS) Eldoret
            </Typography>
          </Box>

          {/* Tanzania Location */}
          <Box
            sx={{
              width: { xs: "100%", sm: "160px", md: "165px" },
              textAlign: "center",
              maxWidth: { xs: "240px", sm: "none" },
              margin: { xs: "0 auto", sm: "0" },
            }}
          >
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "18px", md: "20px" },
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Tanzania
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: "20px", md: "22px" },
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Sky City Mall Dar-es-Salaam
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;

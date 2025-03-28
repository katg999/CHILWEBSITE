import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import LocationIcon from "../assets/images/location-01.svg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const ContactUs = () => {
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
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Bricolage Grotesque, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "40px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Get in touch
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "40px",
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
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "40px",
        }}
      >
        {/* Display success/error messages */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Thank you! Your message has been submitted successfully.
          </Alert>
        )}

        {/* Name Fields */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", sm: "row" },
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
        />

        <TextField
          fullWidth
          label="Phone"
          variant="outlined"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={loading}
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Message (*)"
          variant="outlined"
          placeholder="Enter your message"
          multiline
          rows={4}
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
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
          onClick={() =>
            !loading &&
            setFormData({ ...formData, accept_policy: !formData.accept_policy })
          }
        >
          {formData.accept_policy ? (
            <CheckBoxIcon sx={{ color: "primary.main", fontSize: 24 }} />
          ) : (
            <CheckBoxOutlineBlankIcon
              sx={{ color: "action.active", fontSize: 24 }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
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
          sx={{
            backgroundColor: "#890085",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "25px",
            "&:hover": {
              backgroundColor: "#6a0067",
            },
            "&:disabled": {
              backgroundColor: "#cccccc",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Send Message"
          )}
        </Button>
      </Box>

      {/* Location Section */}
      <Box
        sx={{
          marginTop: "40px",
          backgroundColor: "#FDF7FD",
          borderRadius: "14px",
          padding: "55px 144px",
          maxWidth: "991px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Kampala Location */}
          <Box sx={{ width: "165px", textAlign: "center" }}>
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Kampala
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              4th Floor Bible House Bombo Road Kampala
            </Typography>
          </Box>

          {/* Kenya Location */}
          <Box sx={{ width: "165px", textAlign: "center" }}>
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
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
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Uganda Road Daima Towers (MUPS) Eldoret
            </Typography>
          </Box>

          {/* Tanzania Location */}
          <Box sx={{ width: "165px", textAlign: "center" }}>
            <img src={LocationIcon} alt="Location" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
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
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                marginTop: "8px",
              }}
            >
              Sky City Mall Dar es Salaam
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;

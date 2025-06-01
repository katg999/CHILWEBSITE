import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

// Import icons (replace with actual paths)
import DisasterImage from "../assets/images/Disaster.svg";
import RapidIcon from "../assets/images/Rapid.svg";
import AdvancedHospitalIcon from "../assets/images/AdvancedHospital.svg";
import SupportIcon from "../assets/images/Suppourt.svg";
import ArrowIcon from "../assets/images/arrow-right-02-sharp.svg";

const Disaster = () => {
  // Data for the cards
  const solutions = [
    {
      icon: RapidIcon,
      heading: "Rapid Emergency Response",
      body: "Our specialized medical teams can be mobilized within 2 hours of notification, fully equipped with state-of-the-art medical supplies and equipment. We maintain round-the-clock readiness for immediate deployment.",
      linkText: "Request assistance",
      linkIcon: ArrowIcon,
    },
    {
      icon: AdvancedHospitalIcon,
      heading: "Advanced Field Hospitals",
      body: "Our modular field hospitals can be operational within 6 hours, offering full surgical capabilities, ICU beds, and advanced diagnostic equipment. Each unit is self-sufficient for up to 30 days.",
      linkText: "Learn more",
      linkIcon: ArrowIcon,
    },
    {
      icon: SupportIcon,
      heading: "Telemedicine Support",
      body: "Our telemedicine network links disaster zones with specialists worldwide, enabling real-time consultations and coordination. We support over 50 medical specialties and maintain a 99.9% uptime.",
      linkText: "Get support",
      linkIcon: ArrowIcon,
    },
  ];

  return (
    <Box sx={{ textAlign: "center", padding: "40px 20px" }}>
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "54px",
          letterSpacing: "0%",
          marginTop: "70px",
          marginBottom: "20px",
        }}
      >
        Disaster medicine & Emergency response
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={DisasterImage}
        alt="Disaster Medicine"
        sx={{
          width: "100%",
          maxWidth: "982px",
          height: "auto",
          borderRadius: "14px",
          marginBottom: "40px",
        }}
      />

      {/* Body */}
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "40px",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        As a leader in emergency medical response, we provide comprehensive
        disaster medicine services designed to save lives and maintain critical
        healthcare operations during crises. Our certified teams are trained to
        handle mass casualty incidents, natural disasters, and complex
        emergencies. With over 15 years of experience, we've successfully
        deployed in more than 50 major disasters worldwide, maintaining a 98%
        success rate in emergency response operations.
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "40px",
          letterSpacing: "0%",
          marginBottom: "40px",
        }}
      >
        Comprehensive disaster response solutions
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {solutions.map((solution, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: "20px",
              flex: "1 1 300px",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* Icon Container */}
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "500px", // Fully rounded corners
                  backgroundColor: "#FDF7FD", // Background color
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px", // Padding inside the container
                  margin: "0 auto 20px", // Center the icon and add margin below
                }}
              >
                <img
                  src={solution.icon}
                  alt={solution.heading}
                  style={{ width: "40px", height: "40px" }} // Adjust icon size
                />
              </Box>

              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0%",
                  marginBottom: "10px",
                }}
              >
                {solution.heading}
              </Typography>

              {/* Body */}
              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0%",
                  marginBottom: "20px",
                }}
              >
                {solution.body}
              </Typography>
            </Box>

            {/* Link */}
            <Button
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                color: "#A1339D",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {solution.linkText}
              <img
                src={solution.linkIcon}
                alt="Arrow"
                style={{ width: "16px", height: "16px" }}
              />
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Disaster;

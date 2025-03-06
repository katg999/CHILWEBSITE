import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";

// Importing SVG icons
import LabIcon from "../assets/images/Lab.svg";
import PharmIcon from "../assets/images/Pharm.svg";
import DocIcon from "../assets/images/Doc.svg";
import HealthIcon from "../assets/images/Health.svg";
import ArrowIcon from "../assets/images/arrow-right-02-sharp.svg";
import FrameIcon from "../assets/images/Frame1.svg";
import AwardsIcon from "../assets/images/Awards (2).svg";

// Import award images
import FemtechWorld from "../assets/images/Femtech Worls.webp";
import FEMTECH from "../assets/images/FEMTECH.webp";
import Forbes30Under30 from "../assets/images/Forbes 30 Under 30.webp";
import ForbesYouthIconAwards from "../assets/images/Forbes Youth Icon Awards.webp";
import GoogleForStartups from "../assets/images/GoogleForStartups.webp";
import BusinessFightsPoverty from "../assets/images/Business Fights Poverty.webp";
import RUFORUM from "../assets/images/RUFORUM.webp";
import MOVINGWORLDS from "../assets/images/MOVINGWORLDS.webp";

const services = [
  {
    title: "Laboratories",
    description:
      "Offer diagnostic services and receive patient referrals seamlessly.",
    icon: LabIcon,
  },
  {
    title: "Pharmacies",
    description:
      "Provide prescribed medications through AI-driven recommendations.",
    icon: PharmIcon,
  },
  {
    title: "Doctors",
    description:
      "Consult with patients virtually and expand your practice reach.",
    icon: DocIcon,
  },
  {
    title: "Health facilities",
    description:
      "Access a network of specialists, labs, and pharmacies without extra overhead.",
    icon: HealthIcon,
  },
];

// Award images configuration
const awardImages = [
  { src: FemtechWorld, alt: "Femtech World" },
  { src: FEMTECH, alt: "FEMTECH" },
  { src: Forbes30Under30, alt: "Forbes 30 Under 30" },
  { src: ForbesYouthIconAwards, alt: "Forbes Youth Icon Awards" },
  { src: GoogleForStartups, alt: "Google For Startups" },
  { src: BusinessFightsPoverty, alt: "Business Fights Poverty" },
  { src: RUFORUM, alt: "RUFORUM" },
  { src: MOVINGWORLDS, alt: "MOVINGWORLDS" },
];

const StyledButton = styled(Button)({
  backgroundColor: "#91368A",
  color: "white",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "&:hover": {
    backgroundColor: "#7a2d73",
  },
});

const KetiServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#faf0f9",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* Icon and Heading Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={FrameIcon}
          alt="Frame Icon"
          sx={{ width: "70px", height: "70px", mb: 2 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Your Role, Your Power
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Geist",
            color: "#333",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Whether you're a lab, pharmacy, doctor, or health facility, Keti
          boosts your impact.
        </Typography>
      </Box>

      {/* Services Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1200px",
          width: "100%",
          pl: 0,
          pr: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "10px",
              backgroundColor: "white",
              width: "100%",
              maxWidth: "300px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#faf0f9",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={service.icon}
                alt={service.title}
                sx={{ width: "20px", height: "20px" }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                mb: 1,
                color: "#000000",
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Geist",
                color: "#333",
              }}
            >
              {service.description}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Join Keti Today Button */}
      <StyledButton sx={{ mt: 6 }}>
        Join Keti today
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{ width: "2px", height: "24px", backgroundColor: "#91368A" }}
          />
          <Box
            component="span"
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={ArrowIcon}
              alt="arrow"
              sx={{ width: "14px", height: "14px" }}
            />
          </Box>
        </Box>
      </StyledButton>

      {/* Awards Section */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Awards Icon */}
        <Box
          component="img"
          src={AwardsIcon}
          alt="Awards Icon"
          sx={{ width: "70px", height: "70px" }}
        />

        {/* Recognised. Tested. Trusted Text */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Geist",
            color: "#5C687D",
            fontWeight: "bold",
          }}
        >
          Recognised. Tested. Trusted
        </Typography>

        {/* Award Icons in Two Rows */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, sm: 4 },
            mt: 2,
          }}
        >
          {/* First Row of Awards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 4, md: 6 },
            }}
          >
            {awardImages.slice(0, 4).map((award, index) => (
              <Box
                key={index}
                component="img"
                src={award.src}
                alt={award.alt}
                sx={{
                  width: "auto",
                  height: { xs: "40px", sm: "60px", md: "80px" },
                  mb: 2,
                }}
              />
            ))}
          </Box>

          {/* Second Row of Awards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 4, md: 6 },
            }}
          >
            {awardImages.slice(4).map((award, index) => (
              <Box
                key={index}
                component="img"
                src={award.src}
                alt={award.alt}
                sx={{
                  width: "auto",
                  height: { xs: "40px", sm: "60px", md: "80px" },
                  mb: 2,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KetiServices;

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

// Import icons (replace with actual paths)
import DocIcon from "../assets/images/Doc.svg";
import NeurologyIcon from "../assets/images/Neurology.svg";
import OncologyIcon from "../assets/images/Oncology.svg";
import NephrologyIcon from "../assets/images/Nephrology.svg";
import EndocrinologyIcon from "../assets/images/Endocrinology.svg";
import UrologyIcon from "../assets/images/Urology.svg";
import PaediatricIcon from "../assets/images/Paediatric.svg";
import SchoolTelemedicineIcon from "../assets/images/SchoolTelemedicine.svg";
import ObstetricIcon from "../assets/images/Obsetric.svg";

const WhatWeTreat = () => {
  // Data for the cards
  const specializations = [
    {
      icon: DocIcon,
      heading: "Cardiology",
      body: "Need a heart specialist for your patient? Keti has assembled a team of world-class cardiologists, fully licensed to provide expert care. Simply book an appointment and ensure your patient gets the best treatment.",
    },
    {
      icon: NeurologyIcon,
      heading: "Neurology",
      body: "Our neurologists are experts in the nervous system, diagnosing and treating migraines, epilepsy, and neurodegenerative diseases. They also help manage symptoms of stroke, multiple sclerosis, and other complex neurological conditions.",
    },
    {
      icon: OncologyIcon,
      heading: "Oncology",
      body: "For years, Africa has faced a shortage of cancer specialists. Keti has assembled a team of 21 world-class oncologists, available to consult with your patients from anywhere in the world. We specialize in breast, cervical, prostate, ovarian, and throat cancers, ensuring your patients receive top-tier care.",
    },
    {
      icon: NephrologyIcon,
      heading: "Nephrology",
      body: "Our nephrologists specialize in diagnosing and treating conditions related to the kidneys and urinary system, including kidney stones, urinary tract infections, and chronic kidney disease. They also provide guidance on maintaining kidney health and implementing prevention strategies.",
    },
    {
      icon: EndocrinologyIcon,
      heading: "Endocrinology",
      body: "We want to showcase how your facility treats conditions like diabetes and thyroid disorders. Patients won't need to leave your facility, as our endocrinologists are just a chat away.",
    },
    {
      icon: UrologyIcon,
      heading: "Urology",
      body: "Our urologists specialize in the urinary system and male reproductive health. They diagnose and treat conditions such as urinary incontinence and prostate issues, and may also perform minimally invasive procedures.",
    },
    {
      icon: PaediatricIcon,
      heading: "Paediatric",
      body: "We ensure that patients in need of pediatric care receive it at your facility. All medical care for infants, children, and adolescents is provided by your team.",
    },
    {
      icon: SchoolTelemedicineIcon,
      heading: "School Telemedicine",
      body: "We partner with schools and their sickbays to act as our spokes. When a child falls ill, the on-duty nurse arranges an e-consultation with our doctors.",
    },
    {
      icon: ObstetricIcon,
      heading: "Obstetric and Gynaecology",
      body: "We understand that your facility serves as the first responder to pregnancy-related issues in your area. Let us assist you by providing specialized care for patients with these needs.",
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
          lineHeight: "40px",
          letterSpacing: "0%",
          marginBottom: "20px",
        }}
      >
        What we treat
      </Typography>

      {/* Body */}
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "26px",
          letterSpacing: "0%",
          marginBottom: "40px",
        }}
      >
        Keti is a marketplace where your clinic can access real-time specialized
        services for your patients. Forget the burden of hiring permanent
        doctors or specialists—simply explore the marketplace to find the
        resources your patients need, when they need them.
      </Typography>

      {/* Specializations Section */}
      <Box sx={{ backgroundColor: "#FDF7FD", padding: "40px 20px" }}>
        <Typography
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "0%",
            marginBottom: "40px",
          }}
        >
          We offer different medical specialisation services
        </Typography>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {specializations.map((specialization, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                {/* Icon with Background Color */}
                <Box
                  sx={{
                    backgroundColor: "#FDF7FD", // Updated background color
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <img
                    src={specialization.icon}
                    alt={specialization.heading}
                    style={{ width: "40px", height: "40px" }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Bricolage Grotesque",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      marginBottom: "10px",
                    }}
                  >
                    {specialization.heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Geist",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0%",
                    }}
                  >
                    {specialization.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhatWeTreat;

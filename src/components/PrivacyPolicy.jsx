import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import ShareIcon from "@mui/icons-material/Share";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const PrivacyPolicy = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Table of contents - makes policy more navigable
  const sections = [
    { id: "introduction", title: "Introduction", icon: <InfoIcon /> },
    {
      id: "information",
      title: "Information We Collect",
      icon: <PrivacyTipIcon />,
    },
    { id: "use", title: "Use of Information", icon: <PrivacyTipIcon /> },
    { id: "sharing", title: "Information Sharing", icon: <ShareIcon /> },
    { id: "security", title: "Data Security", icon: <SecurityIcon /> },
    { id: "contact", title: "Contact Us", icon: <ContactSupportIcon /> },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5, mt: 9 }}>
      <Card sx={{ mb: 4, borderRadius: 2, overflow: "hidden" }}>
        <Box
          sx={{
            bgcolor: "#890085",
            py: 4,
            px: 3,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 700 }}
          >
            Privacy Policy
          </Typography>
          <Typography sx={{ mt: 1, fontFamily: "Geist" }}>
            Effective Date: 1st May 2019
          </Typography>
          <Chip
            label="Your data is important to us"
            sx={{
              mt: 2,
              bgcolor: "rgba(255,255,255,0.2)",
              color: "white",
              fontFamily: "Geist",
            }}
          />
        </Box>

        <CardContent sx={{ p: 0 }}>
          {/* Table of Contents */}
          <Box sx={{ p: 3, bgcolor: "#f7f7f7" }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
            >
              Policy Contents
            </Typography>
            <Grid container spacing={1}>
              {sections.map((section) => (
                <Grid item xs={12} sm={6} md={4} key={section.id}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={section.icon}
                    onClick={() => {
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    sx={{
                      justifyContent: "flex-start",
                      mb: 1,
                      borderColor: "#890085",
                      color: "#890085",
                      "&:hover": {
                        borderColor: "#6a0068",
                        bgcolor: "rgba(137, 0, 133, 0.04)",
                      },
                    }}
                  >
                    {section.title}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider />

          {/* Introduction Section */}
          <Box id="introduction" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <InfoIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Introduction
              </Typography>
            </Box>
            <Typography
              sx={{ fontFamily: "Geist", fontSize: "16px", lineHeight: 1.6 }}
            >
              Welcome to the Keti AI Telemedicine Platform. This Data Privacy
              Policy outlines how Keti collects, uses, discloses, and protects
              your personal information when you interact with our Platform. The
              Platform encompasses the Keti website, KETI AI chatbots, and any
              associated technologies used to deliver telemedicine services.
            </Typography>
          </Box>

          <Divider />

          {/* Information We Collect Section */}
          <Box id="information" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <PrivacyTipIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Information We Collect
              </Typography>
            </Box>

            {/* Using accordions for subsections to keep the page cleaner */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                "&:before": { display: "none" },
                borderRadius: "4px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#f9f9f9" }}
              >
                <Typography
                  sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
                >
                  2.1. User Accounts
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                  When you create an account on our Platform, we collect the
                  following information:
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Name: Your full name."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Email Address: Your email address for communication and account verification."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Phone Number: Your contact number for communication and verification purposes."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Username/Password: Credentials for secure access to your account."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleAccordionChange("panel2")}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                "&:before": { display: "none" },
                borderRadius: "4px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#f9f9f9" }}
              >
                <Typography
                  sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
                >
                  2.2. Patient Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                  Patients using the Platform may provide:
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Medical History Details: Information about your past medical conditions, treatments, and surgeries."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Symptoms: Details about current symptoms for consultation and diagnosis."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Medication Inquiries: Information regarding current medications and any inquiries about prescriptions."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Demographic Information: Data such as age, gender, and other relevant demographic details collected during interactions with KETI AI or healthcare providers."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleAccordionChange("panel3")}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                "&:before": { display: "none" },
                borderRadius: "4px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#f9f9f9" }}
              >
                <Typography
                  sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
                >
                  2.3. Appointment Requests
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                  When scheduling an appointment, we collect:
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Appointment Time: Your preferred date and time for consultation."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Preferred Healthcare Provider: Your choice of healthcare provider."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Reason for Consultation: A brief description of the reason for the appointment."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleAccordionChange("panel4")}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                "&:before": { display: "none" },
                borderRadius: "4px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#f9f9f9" }}
              >
                <Typography
                  sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
                >
                  2.4. Technical Data
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                  We automatically collect certain technical data, including:
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Device Information: Type of device, operating system, and browser type."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="IP Address: Your IP address, which may be anonymized."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Usage Data: Information about how you use the Platform, including time of interaction and features accessed."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleAccordionChange("panel5")}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                "&:before": { display: "none" },
                borderRadius: "4px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: "#f9f9f9" }}
              >
                <Typography
                  sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
                >
                  2.5. Partner Data (Optional)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                  With explicit consent from our partners, Keti AI may collect
                  limited data about:
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Spoke Facilities: Location: Address of the facility. Contact Information: Contact details of the facility. Areas of Specialization: Specialties and services offered."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Pharmacies: Name: Name of the pharmacy. Location: Address of the pharmacy. Contact Information: Contact details of the pharmacy. Licensing Credentials: Verification of licensing and credentials (inventory data might be anonymized and aggregated)."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Laboratories: Name: Name of the laboratory. Location: Address of the laboratory. Contact Information: Contact details of the laboratory. Licensing/Accreditation Details: Verification of licensing and accreditation. Limited, Anonymized Test Information (Optional): Aggregated and anonymized test data."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Divider />

          {/* Use of Information */}
          <Box id="use" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <PrivacyTipIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Use of Information
              </Typography>
            </Box>

            <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  3.1. Provide and Improve Services
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 2 }}>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="User Accounts: Manage user accounts and facilitate access to the Platform."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Patient Information: Facilitate medical consultations, deliver telemedicine services, and improve patient care. KETI AI may use anonymized data to provide general health information."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Appointment Requests: Schedule consultations with healthcare providers."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Technical Data: Enhance Platform functionality, personalize user experience, and troubleshoot technical issues."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item", py: 0.5 }}>
                    <ListItemText
                      primary="Partner Data: Manage partner relationships and optimize service delivery across the network using anonymized data."
                      primaryTypographyProps={{ fontFamily: "Geist" }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>

          <Divider />

          {/* Information Sharing */}
          <Box id="sharing" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <ShareIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Information Sharing
              </Typography>
            </Box>

            <Card variant="outlined" sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  4.1. Healthcare Providers
                </Typography>
                <Typography sx={{ fontFamily: "Geist" }}>
                  We will share relevant information with the healthcare
                  provider(s) you consult on the Platform.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Divider />

          {/* Data Security */}
          <Box id="security" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <SecurityIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Data Security
              </Typography>
            </Box>

            <Card
              variant="outlined"
              sx={{
                mb: 3,
                p: 2,
                bgcolor: "#f8f9fa",
                borderRadius: 2,
                borderColor: "#890085",
              }}
            >
              <Typography sx={{ fontFamily: "Geist" }}>
                Keti AI takes reasonable steps to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
                However, no internet transmission or electronic storage is
                completely secure, and we cannot guarantee the absolute security
                of your information.
              </Typography>
            </Card>
          </Box>

          <Divider />

          {/* Contact Us */}
          <Box id="contact" sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <ContactSupportIcon sx={{ mr: 1, color: "#890085" }} />
              <Typography
                variant="h5"
                sx={{ fontFamily: "Bricolage Grotesque", fontWeight: 600 }}
              >
                Contact Us
              </Typography>
            </Box>

            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 2,
                bgcolor: "#890085",
                color: "white",
              }}
            >
              <Typography sx={{ fontFamily: "Geist", mb: 2 }}>
                If you have any questions or concerns about this Policy or our
                data practices, please contact us at:
              </Typography>
              <Button
                variant="contained"
                href="mailto:info@chilhygienecenter.org"
                sx={{
                  bgcolor: "white",
                  color: "#890085",
                  textTransform: "none", // Add this line to prevent auto-capitalization
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                info@chilhygienecenter.org
              </Button>
            </Card>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;

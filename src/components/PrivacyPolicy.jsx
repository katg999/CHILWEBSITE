import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "54px",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Privacy Policy
      </Typography>

      {/* Effective Date */}
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Effective Date: 1st May 2019
      </Typography>

      {/* Introduction */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        Introduction
      </Typography>
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "40px",
        }}
      >
        Welcome to the Keti AI ("KETI") Telemedicine Platform. This Data Privacy
        Policy ("Policy") outlines how Keti collects, uses, discloses, and
        protects your personal information when you interact with our Platform.
        The Platform encompasses the Keti website, KETI AI chatbots (web and
        WhatsApp), and any associated technologies used to deliver telemedicine
        services.
      </Typography>

      {/* Information We Collect */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2. Information We Collect
      </Typography>

      {/* 2.1 User Accounts */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2.1. User Accounts
      </Typography>
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
        When you create an account on our Platform, we collect the following
        information:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Name: Your full name." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Email Address: Your email address for communication and account verification." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Phone Number: Your contact number for communication and verification purposes." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Username/Password: Credentials for secure access to your account." />
        </ListItem>
      </List>

      {/* 2.2 Patient Information */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2.2. Patient Information
      </Typography>
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
        Patients using the Platform may provide:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Medical History Details: Information about your past medical conditions, treatments, and surgeries." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Symptoms: Details about current symptoms for consultation and diagnosis." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Medication Inquiries: Information regarding current medications and any inquiries about prescriptions." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Demographic Information: Data such as age, gender, and other relevant demographic details collected during interactions with KETI AI or healthcare providers." />
        </ListItem>
      </List>

      {/* 2.3 Appointment Requests */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2.3. Appointment Requests
      </Typography>
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
        When scheduling an appointment, we collect:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Appointment Time: Your preferred date and time for consultation." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Preferred Healthcare Provider: Your choice of healthcare provider." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Reason for Consultation: A brief description of the reason for the appointment." />
        </ListItem>
      </List>

      {/* 2.4 Technical Data */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2.4. Technical Data
      </Typography>
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
        We automatically collect certain technical data, including:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Device Information: Type of device, operating system, and browser type." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="IP Address: Your IP address, which may be anonymized." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Usage Data: Information about how you use the Platform, including time of interaction and features accessed." />
        </ListItem>
      </List>

      {/* 2.5 Partner Data */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "20px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        2.5. Partner Data (Optional)
      </Typography>
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
        With explicit consent from our partners, Keti AI may collect limited
        data about:
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Spoke Facilities: Location: Address of the facility. Contact Information: Contact details of the facility. Areas of Specialization: Specialties and services offered." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Pharmacies: Name: Name of the pharmacy. Location: Address of the pharmacy. Contact Information: Contact details of the pharmacy. Licensing Credentials: Verification of licensing and credentials (inventory data might be anonymized and aggregated)." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Laboratories: Name: Name of the laboratory. Location: Address of the laboratory. Contact Information: Contact details of the laboratory. Licensing/Accreditation Details: Verification of licensing and accreditation. Limited, Anonymized Test Information (Optional): Aggregated and anonymized test data." />
        </ListItem>
      </List>

      {/* Use of Information */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        3. Use of Information
      </Typography>
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
        3.1. Provide and Improve Services
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4, mb: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="User Accounts: Manage user accounts and facilitate access to the Platform." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Patient Information: Facilitate medical consultations, deliver telemedicine services, and improve patient care. KETI AI may use anonymized data to provide general health information." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Appointment Requests: Schedule consultations with healthcare providers." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Technical Data: Enhance Platform functionality, personalize user experience, and troubleshoot technical issues." />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Partner Data: Manage partner relationships and optimize service delivery across the network using anonymized data." />
        </ListItem>
      </List>

      {/* Information Sharing */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        4. Information Sharing
      </Typography>
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
        4.1. Healthcare Providers
      </Typography>
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
        We will share relevant information with the healthcare provider(s) you
        consult on the Platform.
      </Typography>

      {/* Data Security */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        5. Data Security
      </Typography>
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
        Keti AI takes reasonable steps to protect your information from
        unauthorized access, disclosure, alteration, or destruction. However, no
        internet transmission or electronic storage is completely secure, and we
        cannot guarantee the absolute security of your information.
      </Typography>

      {/* Contact Us */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "22px",
          letterSpacing: "0%",
          marginBottom: "10px",
        }}
      >
        11. Contact Us
      </Typography>
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
        If you have any questions or concerns about this Policy or our data
        practices, please contact us at{" "}
        <a href="mailto:info@ketiai.com">info@ketiai.com</a>.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;

import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("bids");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: { xs: "40px 16px", md: "60px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header Section */}
      <Typography
        sx={{
          fontFamily: "Bricolage Grotesque",
          fontWeight: 700,
          fontSize: { xs: "36px", md: "48px" },
          lineHeight: "40px",
          textAlign: "center",
          marginTop: "60px",
          color: "black",
        }}
      >
        Join Our Team At Keti AI
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Geist",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "18px" },
          lineHeight: "26px",
          textAlign: "center",
          maxWidth: "800px",
          marginBottom: "40px",
          px: { xs: 2, md: 0 },
          color: "rgba(0, 0, 0, 0.8)",
        }}
      >
        At Keti AI, we believe in building a team of skilled and passionate
        individuals while fostering a culture that empowers them to deliver
        their best work.
      </Typography>

      {/* Job Selection Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginBottom: "32px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setActiveTab("bids")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color:
              activeTab === "developers" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor:
              activeTab === "developers" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor:
                activeTab === "developers" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          BID NOTICE(4)
        </Button>
        <Button
          onClick={() => setActiveTab("impact")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: activeTab === "impact" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: activeTab === "impact" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor: activeTab === "impact" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          Impact Management
        </Button>
        <Button
          onClick={() => setActiveTab("executive")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: activeTab === "executive" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor:
              activeTab === "executive" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor:
                activeTab === "executive" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          Executive Roles (2)
        </Button>
        <Button
          onClick={() => setActiveTab("field")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: activeTab === "field" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: activeTab === "field" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor: activeTab === "field" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          Field Workers
        </Button>
      </Box>

      {/* Bids  Section */}
      {/* Bids Section */}
      {activeTab === "bids" && (
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          {/* Bid Notice 1 */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "24px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "24px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#7F007B",
                  }}
                >
                  Dettol Hygiene Quest Data Assessment Consultancy Services
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Active
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                }}
              >
                Official bid notice for the Dettol Hygiene Quest program
                implementation. Includes scope of work, requirements, and
                submission guidelines.
              </Typography>

              <Button
                variant="contained"
                href="https://docs.google.com/document/d/1IOWB6qTascKrqKMSFX2xjQznIxuD2c8-/edit?usp=sharing&ouid=103687665460868616174&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#7F007B",
                  "&:hover": { backgroundColor: "#6A0066" },
                  textTransform: "none",
                  mt: 1,
                }}
              >
                Download Full Bid Document
              </Button>
            </CardContent>
          </Card>

          {/* Bid Notice 2 */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "24px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "24px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#7F007B",
                  }}
                >
                  Dettol Hygiene Quest Booklet Printing Bid
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Active
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                }}
              >
                Request for proposals for printing educational booklets for the
                hygiene awareness campaign. Specifications and quantity
                requirements included.
              </Typography>

              <Button
                variant="contained"
                href="https://docs.google.com/document/d/1ig9ZX6bXqiNPfGfs5JggUt4ucCALb5n9/edit?usp=sharing&ouid=103687665460868616174&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#7F007B",
                  "&:hover": { backgroundColor: "#6A0066" },
                  textTransform: "none",
                  mt: 1,
                }}
              >
                Download Full Bid Document
              </Button>
            </CardContent>
          </Card>

          {/* Bid Notice 3 */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "24px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "24px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#7F007B",
                  }}
                >
                  Dettol Hygiene Quest Construction Bid
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Active
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                }}
              >
                Bid for construction and renovation of hygiene facilities in
                target schools. Includes architectural plans and material
                specifications.
              </Typography>

              <Button
                variant="contained"
                href="https://docs.google.com/document/d/1jYc9tbL8f1w266WkwaPmzLhF7IVMJ12g/edit?usp=sharing&ouid=103687665460868616174&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#7F007B",
                  "&:hover": { backgroundColor: "#6A0066" },
                  textTransform: "none",
                  mt: 1,
                }}
              >
                Download Full Bid Document
              </Button>
            </CardContent>
          </Card>

          {/* Bid Notice 4 */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "24px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "24px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#7F007B",
                  }}
                >
                  Dettol Hygiene Translation Bid Notice
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Active
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                }}
              >
                Request for translation services of hygiene education materials
                into multiple local languages. Language pairs and volume
                specified.
              </Typography>

              <Button
                variant="contained"
                href="https://docs.google.com/document/d/1LBEWZIDjSUrVDs4AAmoHV4hH2PWBDVM0/edit?usp=sharing&ouid=103687665460868616174&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#7F007B",
                  "&:hover": { backgroundColor: "#6A0066" },
                  textTransform: "none",
                  mt: 1,
                }}
              >
                Download Full Bid Document
              </Button>
            </CardContent>
          </Card>

          {/* General Information */}
          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "center",
              mt: 2,
              mb: 4,
              px: 2,
            }}
          >
            For any questions regarding these bids, please contact our team at:
            <Box
              component="span"
              sx={{ fontWeight: 500, color: "rgba(0, 0, 0, 0.8)" }}
            >
              {" "}
              info@chilhygienecenter.org
            </Box>
          </Typography>
        </Box>
      )}

      {/* Impact Management Section */}
      {activeTab === "impact" && (
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          {/* Impact Manager Card */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "40px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "24px",
                    color: "#7F007B",
                    marginRight: "12px",
                  }}
                >
                  Impact Manager – Dettol Hygiene Quest Program
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Hiring
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                  textAlign: "left",
                }}
              >
                KETI AI Solutions is seeking a highly motivated and experienced
                Impact Manager to lead and oversee the Dettol Hygiene Quest
                Program, a flagship initiative aimed at promoting hygiene
                education and behavioral change among primary schools in Uganda
                and the broader African region.
              </Typography>

              {/* Key Responsibilities */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Key Responsibilities
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Lead the planning, implementation, and management of the
                  Dettol Hygiene Quest program
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Develop and execute hygiene promotion strategies
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Coordinate with Reckitt Benckiser (Dettol) and other key
                  partners
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Oversee monitoring, evaluation, and reporting framework
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Prepare comprehensive impact reports
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Manage stakeholder relationships and facilitate
                  communication
                </Typography>
              </Box>

              {/* Qualifications */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Qualifications and Experience
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Bachelor's degree in Public Health, Social Sciences,
                  Environmental Health, or related field (Master's preferred)
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Minimum 3 years experience managing hygiene, WASH, or health
                  promotion programs
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Experience in behavior change communication and hygiene
                  promotion campaigns
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Strong skills in monitoring, evaluation, and data analysis
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Excellent written and verbal communication skills
                </Typography>
              </Box>

              {/* Application Details */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Application Details
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    ml: { xs: 0, sm: -3 },
                    color: "rgba(0, 0, 0, 0.8)",
                    mb: 1,
                  }}
                >
                  <strong>Location:</strong> Uganda (Remote and Field-Based
                  Work)
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -2 },
                    mb: 1,
                  }}
                >
                  <strong>Application Deadline:</strong> Wednesday, 30th June
                  2025, 5:00 PM EAT
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -1 },
                  }}
                >
                  <strong>How to Apply:</strong> Submit your CV and a cover
                  letter to:{" "}
                  <Box
                    component="span"
                    sx={{
                      wordBreak: { xs: "break-all", sm: "normal" },
                      display: { xs: "block", sm: "inline" },
                      mt: { xs: 0.5, sm: 0 },
                      fontWeight: 500,
                      color: "rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    info@chilhygienecenter.org
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Executive Roles Section */}
      {activeTab === "executive" && (
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          {/* Regional Impact Chief Executive Card */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "40px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "24px",
                    color: "#7F007B",
                    marginRight: "12px",
                  }}
                >
                  Regional Impact Chief Executive – Hygiene Projects
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Hiring
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                  textAlign: "left",
                }}
              >
                KETI AI Solutions is seeking an accomplished and visionary
                leader to serve as Regional Impact Chief Executive for our
                hygiene-focused projects across East Africa. This role will
                oversee strategic leadership, operational management, and impact
                delivery for multiple hygiene and WASH initiatives in the
                region.
              </Typography>

              {/* Key Responsibilities */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Key Responsibilities
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Lead strategic planning and implementation of hygiene and
                  WASH programs across East Africa
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Oversee program management and ensure achievement of impact
                  targets
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Build and maintain strategic partnerships with government
                  agencies, NGOs, and corporate partners
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Represent KETI AI Solutions at regional forums and public
                  engagements
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Lead the regional team, fostering a culture of
                  accountability and innovation
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Manage regional budgets and resource mobilization efforts
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Drive advocacy and policy engagement
                </Typography>
              </Box>

              {/* Qualifications */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Qualifications and Experience
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Master's degree in Public Health, International Development,
                  or related field
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Minimum 7 years of senior leadership experience in
                  hygiene/WASH programs
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Proven track record managing multi-country projects and
                  teams
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Strong knowledge of hygiene promotion and behavior change
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Excellent leadership, communication, and negotiation skills
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Willingness to travel frequently within the region
                </Typography>
              </Box>

              {/* Application Details */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Application Details
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    ml: { xs: 0, sm: -3 },
                    color: "rgba(0, 0, 0, 0.8)",
                    mb: 1,
                  }}
                >
                  <strong>Location:</strong> Dar es Salaam, Tanzania (with
                  regional travel)
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -2 },
                    mb: 1,
                  }}
                >
                  <strong>Application Deadline:</strong> Wednesday, 30th June
                  2025, 5:00 PM EAT
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: { xs: "20px", sm: "24px" },
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -1 },
                  }}
                >
                  <strong>How to Apply:</strong> Submit your CV and a cover
                  letter to:{" "}
                  <Box
                    component="span"
                    sx={{
                      wordBreak: { xs: "break-all", sm: "normal" },
                      display: { xs: "block", sm: "inline" },
                      mt: { xs: 0.5, sm: 0 },
                      fontWeight: 500,
                      color: "rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    info@chilhygienecenter.org
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Chief Executive Director - UAE Card */}
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "40px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "24px",
                    color: "#7F007B",
                    marginRight: "12px",
                  }}
                >
                  Chief Executive Director – UAE Office
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Hiring
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                  textAlign: "left",
                }}
              >
                KETI AI Solutions is seeking a dynamic and visionary Chief
                Executive Director to lead its UAE operations based in Dubai or
                Abu Dhabi. This senior leadership role will be responsible for
                driving strategic growth, overseeing organizational management,
                and strengthening partnerships to expand the company's impact in
                digital health and hygiene sectors across the Middle East and
                Africa.
              </Typography>

              {/* Key Responsibilities */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Key Responsibilities
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Develop and execute the strategic vision for KETI AI
                  Solutions UAE
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Lead business development and partnership efforts across
                  UAE, Middle East, and Africa
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Manage organizational operations including financial
                  management and compliance
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Represent the organization with government agencies, donors,
                  and corporate partners
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Drive fundraising and resource mobilization strategies
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Oversee program delivery and quality assurance
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Build and lead a motivated and effective team
                </Typography>
              </Box>

              {/* Qualifications */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Qualifications and Experience
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Master's degree in Business Administration, Public Health,
                  or related field preferred
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Minimum 10 years of senior leadership experience in digital
                  health or NGO management
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Proven track record in strategic planning, fundraising, and
                  partnership development
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Strong understanding of UAE, Middle East, and African health
                  landscapes
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Eligibility to work in the UAE required
                </Typography>
              </Box>

              {/* Application Details */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Application Details
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    ml: { xs: 0, sm: -6.25 }, // 0 on mobile, -50px equivalent on larger screens
                    color: "rgba(0, 0, 0, 0.8)",
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                  }}
                >
                  <strong>Location:</strong> Dubai or Abu Dhabi, United Arab
                  Emirates
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    ml: { xs: 0, sm: -5 }, // 0 on mobile, -40px equivalent on larger screens
                    color: "rgba(0, 0, 0, 0.8)",
                    mt: 1,
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                  }}
                >
                  <strong>Application Deadline:</strong> Wednesday, 30th June
                  2025, 5:00 PM GST
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -3.375 }, // 0 on mobile, -27px equivalent on larger screens
                    mt: 1,
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                    wordBreak: "break-word", // Handle long email address
                  }}
                >
                  <strong>How to Apply:</strong> Submit your CV and a cover
                  letter to: info@chilhygienecenter.org
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Field Workers Section */}
      {activeTab === "field" && (
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          <Card
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              marginBottom: "40px",
            }}
          >
            <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "24px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "24px",
                    color: "#7F007B",
                    marginRight: "12px",
                  }}
                >
                  Field Workers – Hygiene Quest Program
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.02em",
                    backgroundColor: "#F4FFE9",
                    color: "#529700",
                    borderRadius: "20px",
                    border: "0.6px solid #F4FFE9",
                    padding: "3px 12px",
                    minWidth: "55px",
                    height: "24px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E0F5D1",
                      border: "0.6px solid #E0F5D1",
                    },
                  }}
                >
                  Hiring
                </Button>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                  marginBottom: "16px",
                  textAlign: "left",
                }}
              >
                KETI AI Solutions is recruiting motivated and dedicated Field
                Workers to support the implementation of the Hygiene Quest
                Program, a key initiative promoting hygiene education and
                behavior change in schools and communities across Uganda.
              </Typography>

              {/* Key Responsibilities */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Key Responsibilities
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Conduct hygiene education and outreach activities in schools
                  and communities
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Support data collection and reporting on program activities
                  and impact
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Assist in organizing hygiene promotion events and
                  demonstrations
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Liaise with school administrators, teachers, and community
                  leaders
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Distribute hygiene materials and ensure proper usage
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Provide feedback and insights from the field to inform
                  program improvements
                </Typography>
              </Box>

              {/* Qualifications */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Qualifications and Experience
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Bachelor's degree in Public Health, Environmental Health,
                  Social Sciences, or related field
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Prior experience in community mobilization, health
                  promotion, or hygiene programs preferred
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Strong interpersonal and communication skills
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Ability to work independently and as part of a team
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  • Willingness to travel extensively within assigned areas
                </Typography>
              </Box>

              {/* Application Details */}
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "black",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                Application Details
              </Typography>
              <Box sx={{ pl: 3, mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    ml: { xs: 0, sm: -6.875 }, // 0 on mobile, -55px equivalent on larger screens
                    color: "rgba(0, 0, 0, 0.8)",
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                  }}
                >
                  <strong>Location:</strong> Various locations across Uganda
                  (Field-based)
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.8)",
                    ml: { xs: 0, sm: -6 }, // 0 on mobile, -48px equivalent on larger screens
                    mt: 1,
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                  }}
                >
                  <strong>Application Deadline:</strong> Wednesday, 30th June
                  2025, 5:00 PM EAT
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "16px" },
                    lineHeight: "24px",
                    ml: { xs: 0, sm: -3.75 }, // 0 on mobile, -30px equivalent on larger screens
                    color: "rgba(0, 0, 0, 0.8)",
                    mt: 1,
                    px: { xs: 2, sm: 0 }, // Add padding on mobile
                    wordBreak: "break-word", // Handle long email address
                  }}
                >
                  <strong>How to Apply:</strong> Submit your CV and a brief
                  cover letter to: info@chilhygienecenter.org
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default Careers;

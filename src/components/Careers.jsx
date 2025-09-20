import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

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
        At Keti AI, we believe in building a team of skilled, diverse and
        passionate individuals while fostering a culture that empowers them to
        deliver their best work.
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
          Hygiene Quest Paid Intern(3)
        </Button>
        <Button
          onClick={() => setActiveTab("pyhsician")}
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
          E-Physician
        </Button>
        <Button
          onClick={() => setActiveTab("salesexecutive")}
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
          B2B Sales Executive
        </Button>
        <Button
          onClick={() => setActiveTab("developer")}
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
          Junior FullStack Developer (Part Time)
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
                  Hygiene Quest Paid Intern
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
                  Opportunity
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
                Dettol Hygiene Quest under KETI AI Solutions is seeking a
                talented and motivated Interns to join our dynamic team. Dettol
                Hygiene Quest is an initiative aimed at promoting hygiene
                education and practices among school children. The campaign
                focuses on improving health outcomes by raising awareness on
                handwashing, sanitation and personal hygiene with an emphasis on
                school and community engagement.
              </Typography>

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
                  • Partake in the implementation of the Dettol Hygiene Quest
                  campaign in your assigned district.
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
                  • Engage school leaders, teachers, and students to ensure
                  successful delivery of hygiene activities.
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
                  • Conduct school visits, workshops and interactive sessions on
                  proper hygiene practices through the Dettol Hygiene Quest
                  Chatbot.
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
                  • Distribute learning materials and resources provided by the
                  campaign.
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
                  • Collect feedback and data on campaign activities for
                  monitoring and reporting.
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
                  • Act as a local ambassador for hygiene promotion, fostering
                  sustainable behaviour change
                </Typography>
              </Box>

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
                  • Bachelor's degree in Public Health, Education, Social Work
                  or related field. Preferred but not always mandatory
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
                  • Previous experience in community outreach, school engagement
                  or volunteer programs is an added advantage.
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
                  • Strong communication and facilitation skills
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
                  • Willingness to travel and work across different districts as
                  required by the program.
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
                  • A passion for community development and health promotion
                </Typography>
              </Box>

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
                  <strong>Location:</strong> Uganda-Field-Based Work
                </Typography>
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
                  <strong>Note:</strong> Female applicants are highly encouraged
                  to apply as they will be given priority.
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
                  <strong>Application Deadline:</strong> Tuesday, 23rd September
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
                  <strong>How to Apply:</strong> Submit your CV, cover letter :{" "}
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
                    sandranabakka.hygienequest@ketiai.com
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {activeTab === "pyhsician" && (
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
                  E-Physicians
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
                  Opportunity
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
                KETI AI Solutions is seeking a talented and motivated Physicians
                to join our dynamic team. Keti AI is leading provider of
                telemedicine services, leveraging technology to connect patients
                with qualified healthcare professionals remotely. Our mission is
                to improve access to quality healthcare, especially in
                underserved and remote areas.
              </Typography>
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
                  • Provide secure telehealth consultations to patients via our
                  telemedicine platform.
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
                  • Diagnose and treat a variety of medical conditions remotely,
                  following established clinical guidelines.
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
                  • Collaborate with partner health facilities to ensure
                  continuity of care for patients requiring in-person follow-up.
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
                  • Expand healthcare access to underserved populations through
                  virtual consultations.
                </Typography>
              </Box>

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
                  • Hold a valid medical license and strong clinical expertise
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
                  • Previous experience in telehealth is a plus but not
                  mandatory
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
                  • Strong communication and facilitation skills
                </Typography>
              </Box>
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
                We Offer
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
                  • Pay-per-patient model(earn more as you see more patients)
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
                  • Real Impact on African healthcare access
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
                  • Flexible schedules
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
                  • Be part of telehealth innovation
                </Typography>
              </Box>

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
                  <strong>Location:</strong> Uganda
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
                  <strong>Application Deadline:</strong> Tuesday, 23rd September
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
                  <strong>How to Apply:</strong> Submit your CV, cover letter :{" "}
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
                    nabacwa@ketiai.com
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {activeTab === "salesexecutive" && (
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
                  B2B Sales Executive
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
                  Opportunity
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
                KETI AI Solutions is seeking B2B Sales Executives to join our
                dynamic team. Keti AI is leading provider of telemedicine
                services, leveraging technology to connect patients with
                qualified healthcare professionals remotely. Our mission is to
                improve access to quality healthcare. The B2B Sales Executives
                shall drive business growth by engaging corporate clients,
                healthcare providers, schools and government agencies with CHIL
                Femtech Center's innovative telemedicine solutions.
              </Typography>

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
                  • Drive B2B Sales in healthcare and education
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
                  • Build and maintain client relationships
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
                  • Negotiate contracts and close deals
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
                  • Collaborate with all teams
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
                  • Track sales and provide feedback
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
                  • Stay updated on telemedicine trends
                </Typography>
              </Box>

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
                  • Bachelor's degree in any related field
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
                  • Candidate must have a B2B sales experience.
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
                  • 3 or more years of B2B sales experience
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
                  • Knowledge of healthcare is an added advantage.
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
                  • A passion for community development and health promotion
                </Typography>
              </Box>

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
                  Location:Uganda
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
                  <strong>Application Deadline:</strong> Tuesday, 23rd September
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
                  <strong>How to Apply:</strong> Submit your CV, cover letter:{" "}
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
                    nabacwa@ketiai.com
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {activeTab === "developer" && (
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
                  Full Stack Developer(Part Time)
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
                  Opportunity
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
                KETI AI Solutions is seeking FullStack Developer(PartTime) to
                join our dynamic team. Keti AI is leading provider of
                telemedicine services, leveraging technology to connect patients
                with qualified healthcare professionals remotely. Our mission is
                to improve access to quality healthcare.
              </Typography>

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
                  • Develop and maintain web applications using modern tools for
                  our different projects.
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
                  • Manage and optimise databases for security and performance.
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
                  • Buid and integrate APIs with internal and external services.
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
                  • Test, debug and ensure smooth application functionality
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
                  • Provide techinical support, system optimisation and manage
                  different project requirements
                </Typography>
              </Box>

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
                  • Bachelor's degree in any IT related field / Experience with
                  coding
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
                  • Familiarity with Git and collaborative developement
                  workflows
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
                  • Please Share a link to your Github profile showcasing your
                  completed projects
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
                  • Strong knowledge of front-end and back-end technologies for
                  example React, PHP, Python
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
                  • Strong knowledge of database management systems such as
                  MySQL, PostgreSQL
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
                  • Good Knowledge of API development and integration
                </Typography>
              </Box>

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
                  Location: Uganda
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
                  <strong>Application Deadline:</strong> Tuesday, 23rd September
                  2025, 5:00 PM EAT
                </Typography>
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
                  <strong>Note:</strong> Female developers are highly encouraged
                  to apply.
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
                  <strong>How to Apply:</strong> Submit your CV, cover letter:{" "}
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
                    nabacwa@ketiai.com
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {/* APK Download Section - Added here for field team visibility */}
      <Card
        sx={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          marginBottom: "32px",
          background: "linear-gradient(135deg, #7F007B 0%, #A000A0 100%)",
          color: "white",
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
            <PhoneAndroidIcon sx={{ fontSize: 28, color: "white" }} />
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "24px",
                color: "white",
              }}
            >
              Field Team Mobile App
            </Typography>
            <Button
              variant="outlined"
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.02em",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "3px 12px",
                minWidth: "55px",
                height: "24px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              Latest
            </Button>
          </Box>

          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "20px",
            }}
          >
            Download the latest version of our field application for data
            collection, reporting, and team coordination. Compatible with
            Android devices. This app is only our field team members.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              href="/downloads/OTP.apk"
              download="keti-field-app-v2.1.0.apk"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "white",
                color: "#7F007B",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  transform: "translateY(-1px)",
                },
                textTransform: "none",
                fontWeight: 600,
                padding: "10px 20px",
              }}
            >
              Download APK (v2.1.0)
            </Button>

            {/* Alternative: External hosting link */}
            {/* 
            <Button
              variant="contained"
              href="https://your-file-hosting-service.com/keti-field-app.apk"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: "white",
                color: "#7F007B",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Download APK
            </Button>
            */}
          </Box>

          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              color: "rgba(255, 255, 255, 0.8)",
              marginTop: "16px",
            }}
          >
            File size: ~80MB | Latest update: September 2025
          </Typography>
        </CardContent>
      </Card>
      ;
    </Box>
  );
};

export default Careers;

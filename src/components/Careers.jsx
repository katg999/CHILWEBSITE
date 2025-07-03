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
          Junior FullStack Developer (1)
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
          {/* Junior Developer Card */}
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
                  Junior Fullstack Software Developer
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
                KETI AI Solutions is seeking a talented and motivated Junior
                Fullstack Software Developer to join our dynamic development
                team. This is an excellent opportunity for a passionate
                developer to grow their career while working on innovative
                AI-powered solutions and educational technology platforms. We
                particularly encourage applications from female developers as
                part of our commitment to diversity and inclusion in tech.
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
                  • Develop and maintain web applications using modern frontend
                  and backend technologies
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
                  • Write clean, efficient, and well-documented code following
                  best practices
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
                  • Collaborate with senior developers and participate in code
                  reviews
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
                  • Assist in database design, API development, and system
                  integration
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
                  • Participate in testing, debugging, and troubleshooting
                  applications
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
                  • Contribute to project planning and technical documentation
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
                  • Bachelor's degree in Computer Science, Software Engineering,
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
                  • 1-2 years of experience in fullstack development or strong
                  portfolio of projects
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
                  • Proficiency in JavaScript, HTML, CSS, and at least one
                  modern framework (React, Vue, Angular)
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
                  • Experience with backend technologies (Node.js, Python, or
                  similar) and databases
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
                  • Understanding of version control systems (Git) and
                  collaborative development
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
                  <strong>Location:</strong> Uganda ( Office-Based Work)
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
                  <strong>Application Deadline:</strong> Tuesday, 15th July
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
                  <strong>How to Apply:</strong> Submit your CV, cover letter,
                  and portfolio/GitHub links to:{" "}
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
                    info@ketiai.com
                  </Box>
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

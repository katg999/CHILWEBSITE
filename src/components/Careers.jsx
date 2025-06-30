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
    </Box>
  );
};

export default Careers;

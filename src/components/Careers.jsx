import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("community");

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
          onClick={() => setActiveTab("community")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: activeTab === "community" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor:
              activeTab === "community" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor:
                activeTab === "community" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          Community Impact Officers
        </Button>
        <Button
          onClick={() => setActiveTab("designer")}
          sx={{
            fontFamily: "Geist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: activeTab === "designer" ? "#7F007B" : "rgba(0, 0, 0, 0.6)",
            textTransform: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor:
              activeTab === "designer" ? "#F9F0F9" : "transparent",
            "&:hover": {
              backgroundColor: activeTab === "designer" ? "#F9F0F9" : "#F5F5F5",
            },
          }}
        >
          Junior Graphics Designer
        </Button>
      </Box>

      {/* Community Impact Officers Card */}
      {activeTab === "community" && (
        <Card
          sx={{
            width: { xs: "100%", md: "800px" },
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            marginBottom: "40px",
          }}
        >
          <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
            {/* Job Title and Hiring Button */}
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
                Community Impact Officers
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
                  left: "-20px",
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

            {/* Job Description */}
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
              We are excited to announce our recent partnership, expanding
              tele-mental health services to young refugees residing in Ugandan
              refugee settlements. We are on the lookout for passionate
              Community Impact Officers—dynamic professionals committed to
              driving social change on the ground.
            </Typography>

            {/* Role Overview */}
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
              Role Overview
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
                • Serve as a vital bridge between our innovative tele-mental
                health initiatives and the communities we support.
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
                • Engage directly with refugee populations, ensuring they
                receive timely, compassionate mental health services.
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
                • Collaborate with local stakeholders to facilitate service
                delivery and community empowerment.
              </Typography>
            </Box>

            {/* What We Offer */}
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
              What We Offer
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
                • A full-time opportunity to make a lasting social impact.
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
                • A collaborative work environment with a focus on innovation
                and community development.
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
                • Competitive remuneration and professional growth opportunities
                in the social business sector.
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
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Submit your application via email at{" "}
                <span style={{ color: "#7D0C75", fontWeight: 500 }}>
                  info@chilhygienecenter.org
                </span>{" "}
                (this should include a simple portfolio showing a sample of your
                work) or bring your application in person to our office
                reception at Bible House, fourth floor. All applications must be
                received by 30th May 2025.
              </Typography>
            </Box>

            {/* Closing Statement */}
            <Typography
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(0, 0, 0, 0.9)",
                marginTop: "24px",
                textAlign: "left",
              }}
            >
              Be part of our mission to empower communities through technology
              and compassionate care. Your expertise can make a difference!
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Junior Graphics Designer Card */}
      {activeTab === "designer" && (
        <Card
          sx={{
            width: { xs: "100%", md: "800px" },
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            marginBottom: "40px",
          }}
        >
          <CardContent sx={{ padding: { xs: "20px", md: "32px" } }}>
            {/* Job Title and Hiring Button */}
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
                Junior Graphics Designer (Part-Time)
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
                  left: "-20px",
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

            {/* Job Description */}
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
              We're seeking a talented Junior Graphics Designer to join our
              creative team. This is a part-time role where you'll work 2 days a
              week in our office and the rest of the week remotely. You'll have
              the opportunity to create visual content that supports our social
              impact initiatives and communicates our mission effectively.
            </Typography>

            {/* Role Overview */}
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
              Role Overview
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
                • Create engaging visual content for digital and print media.
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
                • Design social media graphics, reports, presentations, and
                marketing materials.
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
                • Collaborate with the communications team to maintain brand
                consistency.
              </Typography>
            </Box>

            {/* What We Offer */}
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
              What We Offer
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
                • Flexible part-time schedule (2 days in office, rest remote).
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
                • Opportunity to build your portfolio with meaningful social
                impact work.
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
                • Supportive team environment with creative freedom.
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
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                Submit your application via email at{" "}
                <span style={{ color: "#7D0C75", fontWeight: 500 }}>
                  info@chilhygienecenter.org
                </span>{" "}
                or bring your application in person to our office reception at
                Bible House, fourth floor. All applications must be received by
                30th April 2025.
              </Typography>
            </Box>

            {/* Closing Statement */}
            <Typography
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
                color: "rgba(0, 0, 0, 0.9)",
                marginTop: "24px",
                textAlign: "left",
              }}
            >
              Join our team and use your creative skills to make a positive
              impact in the world. We look forward to seeing your portfolio!
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Careers;

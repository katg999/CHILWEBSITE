import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MaternalImage from "../assets/images/HoldingAIComparison (2).png";
import MaternityIcon from "../assets/images/MaternityIcon.svg";
import MaternalCareIcon from "../assets/images/MaternalCareIcon.svg";
import PostnatalIcon from "../assets/images/PostnatalIcon.svg";
import PregnantImage from "../assets/images/Maternal2.jpeg";
import ProcessIcon from "../assets/images/ProcessIcon.svg";
import PregnancyIcon1 from "../assets/images/PregnancyIcon1.svg";
import RiskPredictionIcon from "../assets/images/RiskPrediction.svg";
import PersonalisedCareIcon from "../assets/images/PersonalisedCare.svg";
import LogoMark1 from "../assets/images/logo mark 1.svg";
import LogoMark2 from "../assets/images/logo mark 2.svg";
import RegisterPatientImage from "../assets/images/register patient.png";
import UploadRecordsImage from "../assets/images/upload medical records.png";
import AIComparisonsImage from "../assets/images/get ai comparisons (1).png";
import RecommendationImage from "../assets/images/get recommendation.png";

const MaternalComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const statisticsData = [
    { label: "Health Facilities Using KETI", value: "150+" },
    { label: "Reduction In Pregnancy Complications", value: "30%" },
    { label: "Mothers Supported", value: "100,000+", highlight: true },
    { label: "AI-Driven Infant Care Recovery", value: "9.5M" },
  ];

  const openChatBot = async () => {
    try {
      // First open the chat
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.open();

        // Get the current user ID (or set one if needed)
        const userID =
          window.voiceflow.chat.userID ||
          "user-" + Math.random().toString(36).substring(2, 9);

        // Make a direct API call to set the conversation state
        await fetch(
          "https://general-runtime.voiceflow.com/state/user/" +
            userID +
            "/interact",
          {
            method: "POST",
            headers: {
              Authorization: "VF.DM.67d83b405ba282486271b4c2.WWCyGXI9kTCxOHdb", // Replace with your actual API key
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: {
                type: "jump",
                payload: {
                  blockID: "67d5cd5ab95dee3341a81a75", // Replace with your actual block ID
                },
              },
            }),
          }
        );

        console.log("API call made to jump to health facility");
      } else {
        console.error("Voiceflow chat not available");
      }
    } catch (error) {
      console.error("Error using API approach:", error);
    }

    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          mb: { xs: 4, md: 8 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, maxWidth: { md: "50%" }, order: { xs: 2, md: 1 } }}>
          {/* Maternity Tag */}

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 200,
              fontSize: { xs: "32px", sm: "38px", md: "48px" }, // Reduced from original
              lineHeight: { xs: "36px", sm: "42px", md: "52px" }, // Tighter line heights
              letterSpacing: "-0.02em",
              mb: 3,
              whiteSpace: "pre-line", // Allows manual line breaks
              textAlign: "center", // Helps with balanced line breaking
              maxWidth: "800px", // Constrains container width
              mx: "auto", // Centers the text block
              marginLeft: "25%",
            }}
          >
            Transform Maternal Care{"\n"}with AI Precision
          </Typography>

          {/* Body Text */}
          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 100,
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: { xs: "24px", md: "26px" },
              letterSpacing: "-2%",
              color: "#666",
              marginLeft: "25%",
              mb: 4,
            }}
          >
            Keti AI revolutionizes antenatal and postnatal care with AI-driven
            precision and support.
          </Typography>

          {/* Button */}
          <Button
            onClick={openChatBot}
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15%",
              gap: "10px",
              padding: { xs: "12px 24px", md: "15px 30px" },
              borderRadius: "30px",
              right: "-100px", // Moves left by 20px
              backgroundColor: "#800080",
              color: "white",
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "'Geist', sans-serif",
              textTransform: "none",
              "&:hover": { backgroundColor: "#6a006a" },
            }}
          >
            <span>Improve Maternal Care Now</span>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "24px", md: "30px" },
                height: { xs: "24px", md: "30px" },
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#800080"}
                fill={"none"}
              >
                <path
                  d="M14 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Button>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            marginTop: "10px",
            justifyContent: { xs: "center", md: "flex-end" },
            width: "100%",
            order: { xs: 1, md: 2 },
            mt: { xs: 2, md: 0 },
            mb: { xs: 4, md: 0 },
            pt: (theme) =>
              `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(2)})`, // Reduced spacing
            alignSelf: "center", // Better vertical alignment
          }}
        >
          <img
            src={MaternalImage}
            alt="Maternal Care"
            style={{
              width: "100%",
              maxWidth: { xs: "220px", sm: "260px", md: "350px" }, // Reduced sizes
              height: "auto",
              maxHeight: "400px", // Added max-height constraint
              display: "block",
              margin: "0 auto",
              paddingTop: { xs: "0", md: "10px" }, // Reduced padding
              boxSizing: "border-box",
              marginLeft: { xs: "0", md: "20%" }, // Reduced margin
              objectFit: "contain",
              objectPosition: "center", // Ensures proper centering
            }}
          />
        </Box>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "white",
          padding: { xs: "20px 0", md: "40px 0" },
          overflowX: "hidden",
          marginLeft: "calc(-50vw + 50%)",
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
          }}
        >
          {statisticsData.map((stat, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "0 0 50%", sm: 1 },
                minWidth: { xs: "120px", sm: "auto" },
                textAlign: "center",
                py: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              >
                {stat.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 800,
                  fontSize: { xs: "36px", sm: "44px", md: "54px" },
                  color: "black",
                  mt: 1,
                }}
              >
                {stat.value.includes("+") ? (
                  <>
                    {stat.value.replace("+", "")}
                    <span style={{ color: "#7D0C75" }}>+</span>
                  </>
                ) : stat.value.includes("%") ? (
                  <>
                    {stat.value.replace("%", "")}
                    <span style={{ color: "#7D0C75" }}>%</span>
                  </>
                ) : stat.value.includes("M") ? (
                  <>
                    {stat.value.replace("M", "")}
                    <span style={{ color: "#7D0C75" }}>M</span>
                  </>
                ) : (
                  stat.value
                )}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* What We Do Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          px: { xs: 0, sm: 2, md: 6 },
          py: { xs: 4, md: 8 },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Icon with Purple Line */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            height: "32px",
            borderLeft: "1px solid #91368A",
            padding: "4px 16px",
            width: "fit-content",
          }}
        >
          <img
            src={ProcessIcon}
            alt="What We Do Icon"
            style={{ width: 24, height: 24 }}
          />
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: 1000,
              fontSize: "1rem",
            }}
          >
            What We Do
          </Typography>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
            width: "100%",
          }}
        >
          {/* Left Side - Content */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: { xs: "28px", sm: "36px", md: "44px" },
                lineHeight: { xs: "1.2", md: "52px" },
              }}
            >
              Transforming maternal health With Keti AI
            </Typography>

            {/* Feature 1 */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                backgroundColor: "#f8f8f8",
                borderRadius: "12px",
                p: 3,
                mb: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box
                sx={{
                  minWidth: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(145, 54, 138, 0.1)",
                  borderRadius: "10px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={MaternalCareIcon}
                  alt="Maternal Care"
                  style={{ width: 28, height: 28 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: 1.3,
                    mb: 1.5,
                    color: "#333",
                  }}
                >
                  Empowering maternal care
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: 1.6,
                    color: "#555",
                  }}
                >
                  Health facilities can monitor each mother's pregnancy journey,
                  anticipate potential complications, and deliver personalized
                  care based on real-time insights.
                </Typography>
              </Box>
            </Box>

            {/* Feature 2 */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                backgroundColor: "#f8f8f8",
                borderRadius: "12px",
                p: 3,
                mb: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box
                sx={{
                  minWidth: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(145, 54, 138, 0.1)",
                  borderRadius: "10px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={PostnatalIcon}
                  alt="Postnatal Support"
                  style={{ width: 28, height: 28 }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: 1.3,
                    mb: 1.5,
                    color: "#333",
                  }}
                >
                  Comprehensive postnatal support
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: 1.6,
                    color: "#555",
                  }}
                >
                  New mothers receive AI-generated postnatal guidance via text,
                  audio, video, and photos, helping them confidently navigate
                  early motherhood.
                </Typography>
              </Box>
            </Box>

            {/* Button */}
            <Button
              onClick={openChatBot}
              sx={{
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: { xs: "8px 16px", md: "10px 20px" },
                borderRadius: "30px",
                backgroundColor: "white",
                color: "#800080",
                fontSize: { xs: "14px", md: "16px" },
                border: "1px solid #800080",
                fontFamily: "'Geist', sans-serif",
                textTransform: "none",
                marginLeft: "43%",
                mt: 2,
                "&:hover": { backgroundColor: "#f5e5f5" },
              }}
            >
              <span>Discover How it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#800080"}
                fill={"none"}
              >
                <path
                  d="M14 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Box>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ width: "100%", mt: 6 }}>
          {/* Process Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "32px",
              borderLeft: "1px solid #91368A",
              padding: "4px 16px",
              width: "fit-content",
              mx: "auto",
              mb: 4,
            }}
          >
            <img
              src={ProcessIcon}
              alt="Process Icon"
              style={{ width: 24, height: 24 }}
            />
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                color: "#91368A",
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Why Choose KetiAI Maternity?
            </Typography>
          </Box>

          {/* Cards for Process */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              width: "100%",
              justifyContent: "center",
            }}
          >
            {/* Pregnancy Monitoring Card */}
            <Card
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "300px" },
                maxWidth: { md: "30%" },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                backgroundColor: "white",
                color: "inherit",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  backgroundColor: "#890085",
                  color: "white",
                  "& .MuiTypography-root": {
                    color: "white",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: { xs: "16px", md: "24px" },
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    mb: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <img
                    src={PregnancyIcon1}
                    alt="Pregnancy Monitoring"
                    style={{
                      width: 40,
                      height: 40,
                      transition: "all 0.3s ease",
                      filter: "brightness(0.9)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
                    color: "#333",
                    transition: "color 0.3s ease",
                  }}
                >
                  Pregnancy Monitoring
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: "1.6",
                    color: "#666",
                    transition: "color 0.3s ease",
                  }}
                >
                  Track each mother's pregnancy journey with advanced AI
                  insights.
                </Typography>
              </CardContent>
            </Card>

            {/* Risk Prediction Card */}
            <Card
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "300px" },
                maxWidth: { md: "30%" },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                backgroundColor: "white",
                color: "inherit",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  backgroundColor: "#890085",
                  color: "white",
                  "& .MuiTypography-root": {
                    color: "white",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: { xs: "16px", md: "24px" },
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white", // White background
                    borderRadius: "50%",
                    mb: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Subtle shadow
                    "&:hover": {
                      backgroundColor: "white", // Stays white on card hover
                    },
                  }}
                >
                  <img
                    src={RiskPredictionIcon}
                    alt="Risk Prediction"
                    style={{
                      width: 40,
                      height: 40,
                      transition: "all 0.3s ease",
                      filter: "brightness(0.9)", // Slightly dimmed in normal state
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
                    color: "#333",
                    transition: "color 0.3s ease",
                  }}
                >
                  Risk Prediction
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: "1.6",
                    color: "#666",
                    transition: "color 0.3s ease",
                  }}
                >
                  Anticipate potential complications using AI-driven analysis.
                </Typography>
              </CardContent>
            </Card>

            {/* Personalized Care Card */}
            <Card
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: "300px" },
                maxWidth: { md: "30%" },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                backgroundColor: "white",
                color: "inherit",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  backgroundColor: "#890085",
                  color: "white",
                  "& .MuiTypography-root": {
                    color: "white",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: { xs: "16px", md: "24px" },
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    mb: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <img
                    src={PersonalisedCareIcon}
                    alt="Personalized Care"
                    style={{
                      width: 40,
                      height: 40,
                      transition: "all 0.3s ease",
                      filter: "brightness(0.9)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
                    color: "#333",
                    transition: "color 0.3s ease",
                  }}
                >
                  Personalized Care
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: "1.6",
                    color: "#666",
                    transition: "color 0.3s ease",
                  }}
                >
                  Deliver tailored care and recommendations based on real-time
                  insights.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Benefits Section - Updated with Mockups */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, md: 8 },
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 8 },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Icon with Purple Line */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            height: "32px",
            borderLeft: "1px solid #91368A",
            padding: "4px 16px",
            width: "fit-content",
          }}
        >
          <img
            src={ProcessIcon}
            alt="Benefits Icon"
            style={{ width: 24, height: 24 }}
          />
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Benefits
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 600,
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            lineHeight: { xs: "1.2", md: "52px" },
            textAlign: "center",
          }}
        >
          How It Works
        </Typography>

        {/* First Row of Mockups */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Register Patient */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "20px",
                color: "#800080",
                textAlign: "center",
              }}
            >
              1. Register Patient
            </Typography>
            <img
              src={RegisterPatientImage}
              alt="Register Patient"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Box>

          {/* Upload Patient Records */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "20px",
                color: "#800080",
                textAlign: "center",
              }}
            >
              2. Upload Patient Records
            </Typography>
            <img
              src={UploadRecordsImage}
              alt="Upload Medical Records"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* Second Row of Mockups */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Get AI Comparisons */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "20px",
                color: "#800080",
                textAlign: "center",
              }}
            >
              3. Get AI Comparisons
            </Typography>
            <img
              src={AIComparisonsImage}
              alt="Get AI Comparisons"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Box>

          {/* Get AI Best Hospital */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "20px",
                color: "#800080",
                textAlign: "center",
              }}
            >
              4. Get AI Best Hospital
            </Typography>
            <img
              src={RecommendationImage}
              alt="Get AI Recommendation"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Join Our Mission Section */}
      <Box
        sx={{
          backgroundColor: "#FCEAFB",
          padding: { xs: "32px 16px", md: "60px 40px" },
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          mt: 8,
          mb: 4,
          mx: { xs: -2, sm: 0 },
        }}
      >
        {/* Background elements */}
        <Box
          component="img"
          src={LogoMark1}
          alt="Background Element"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "90%",
            zIndex: 1,
            opacity: 0.3,
            display: { xs: "none", sm: "block" },
          }}
        />
        <Box
          component="img"
          src={LogoMark2}
          alt="Logo Mark 2"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: { xs: "150px", md: "250px" },
            height: "auto",
            zIndex: 2,
            maxHeight: "50%",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            zIndex: 3,
            position: "relative",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 600,
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              mb: 3,
            }}
          >
            Join our Mission
          </Typography>

          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              color: "#333",
              mb: 4,
              px: { xs: 1, sm: 0 },
            }}
          >
            Join hospitals and patients in transforming Maternal Care.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              onClick={openChatBot}
              sx={{
                backgroundColor: "white",
                color: "#000000",
                borderRadius: "40px",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                "&:hover": { backgroundColor: "#f0f0f0" },
                minWidth: { xs: "140px", sm: "180px" },
              }}
            >
              Register As A Hospital
            </Button>

            <Button
              onClick={openChatBot}
              sx={{
                backgroundColor: "#9C27B0",
                color: "white",
                borderRadius: "40px",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                "&:hover": { backgroundColor: "#7B1FA2" },
                minWidth: { xs: "140px", sm: "180px" },
              }}
            >
              Register As A Patient
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MaternalComponent;

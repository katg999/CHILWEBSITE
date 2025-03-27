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
import MaternalImage from "../assets/images/MaternalImage.svg";
import MaternityIcon from "../assets/images/MaternityIcon.svg";
import MaternalCareIcon from "../assets/images/MaternalCareIcon.svg";
import PostnatalIcon from "../assets/images/PostnatalIcon.svg";
import PregnantImage from "../assets/images/Pregnant.svg";
import ProcessIcon from "../assets/images/ProcessIcon.svg";
import PregnancyIcon1 from "../assets/images/PregnancyIcon1.svg";
import RiskPredictionIcon from "../assets/images/RiskPrediction.svg";
import PersonalisedCareIcon from "../assets/images/PersonalisedCare.svg";
import LogoMark1 from "../assets/images/logo mark 1.svg";
import LogoMark2 from "../assets/images/logo mark 2.svg";

const MaternalComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const statisticsData = [
    { label: "Health Facilities Using KETI", value: "1500+" },
    { label: "Reduction In Pregnancy Complications", value: "30%" },
    { label: "Mothers Supported", value: "100,000+", highlight: true },
    { label: "AI-Driven Infant Care Recovery", value: "9.5M" },
  ];

  const openChatBot = () => {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.open();
      console.log("Voiceflow chat opened");
    } else {
      console.error("Voiceflow chat not available");
      setTimeout(() => {
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.open();
          console.log("Voiceflow chat opened on retry");
        } else {
          console.error("Voiceflow chat still not available after retry");
        }
      }, 1000);
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mb: 3,
              backgroundColor: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              width: "fit-content",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={MaternityIcon}
              alt="Maternity"
              style={{ width: 20, height: 20 }}
            />
            <Typography
              sx={{
                fontFamily: "Geist",
                fontWeight: 500,
                fontSize: "14px",
                color: "#800080",
              }}
            >
              Maternity
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 600,
              fontSize: { xs: "36px", sm: "44px", md: "58px" },
              lineHeight: { xs: "40px", sm: "48px", md: "64px" },
              letterSpacing: "-2%",
              mb: 3,
            }}
          >
            Transform Maternal Care with AI Precision
          </Typography>

          {/* Body Text */}
          <Typography
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: { xs: "16px", md: "19px" },
              lineHeight: { xs: "24px", md: "26px" },
              letterSpacing: "-2%",
              color: "#666",
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
              gap: "10px",
              padding: { xs: "12px 24px", md: "15px 30px" },
              borderRadius: "30px",
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
            justifyContent: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <img
            src={MaternalImage}
            alt="Maternal Care"
            style={{
              width: "100%",
              maxWidth: { xs: "300px", sm: "400px", md: "600px" },
              height: "auto",
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
              fontWeight: 600,
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
              Transforming maternal health
            </Typography>

            {/* Feature 1 */}
            <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
              <img
                src={MaternalCareIcon}
                alt="Maternal Care"
                style={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: { xs: "24px", md: "28px" },
                    mb: 1,
                  }}
                >
                  Empowering maternal care
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: "20px", md: "24px" },
                    color: "#666",
                  }}
                >
                  Health facilities can monitor each mother's pregnancy journey,
                  anticipate potential complications, and deliver personalized
                  care based on real-time insights.
                </Typography>
              </Box>
            </Box>

            {/* Feature 2 */}
            <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
              <img
                src={PostnatalIcon}
                alt="Postnatal Support"
                style={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    lineHeight: { xs: "24px", md: "28px" },
                    mb: 1,
                  }}
                >
                  Comprehensive postnatal support
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Geist",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: "20px", md: "24px" },
                    color: "#666",
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

          {/* Right Side - Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={PregnantImage}
              alt="Pregnant Woman"
              style={{
                width: "100%",
                maxWidth: { xs: "300px", sm: "400px", md: "500px" },
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Benefits Section */}
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
          Why choose Keti Maternity?
        </Typography>

        {/* Benefits Content */}
        <Typography
          sx={{
            fontFamily: "Geist",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "20px", md: "24px" },
            color: "#666",
            maxWidth: "800px",
            textAlign: "center",
            mb: 4,
            px: { xs: 2, sm: 0 },
          }}
        >
          Keti Maternity combines cutting-edge AI technology with compassionate
          care to revolutionize maternal health outcomes. Our platform empowers
          both healthcare providers and mothers with data-driven insights and
          personalized support throughout the pregnancy journey and beyond.
        </Typography>

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
              How It Works
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
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#800080",
                color: "white",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
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
                <img
                  src={PregnancyIcon1}
                  alt="Pregnancy Monitoring"
                  style={{ width: 60, height: 60, marginBottom: "16px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
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
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
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
                <img
                  src={RiskPredictionIcon}
                  alt="Risk Prediction"
                  style={{ width: 60, height: 60, marginBottom: "16px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
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
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
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
                <img
                  src={PersonalisedCareIcon}
                  alt="Personalized Care"
                  style={{ width: 60, height: 60, marginBottom: "16px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Bricolage Grotesque",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "20px" },
                    mb: 2,
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

import React from "react";
import PupilsImage from "../assets/images/Pupils.svg"; // Background image
import HygieneIcon from "../assets/images/HygieneIcon.svg"; // First button icon
import benefitsIcon from "../assets/images/Frame.svg"; // Benefits icon
import AttendanceIcon from "../assets/images/Attendance.svg"; // Attendance icon
import SupportIcon from "../assets/images/Suppourt (2).svg"; // Community support icon
import QualityProductsIcon from "../assets/images/QualityProducts.svg"; // Quality products icon
import PartnerImage from "../assets/images/PartnerImage.svg"; // Partner image
import ProcessIcon from "../assets/images/ProcessIcon.svg"; // Process icon
import SickBayIcon from "../assets/images/SickBay.svg"; // Sick Bay icon
import CreditIcon from "../assets/images/Credit.svg"; // Credit icon
import PayLaterIcon from "../assets/images/PayLater.svg"; // Pay Later icon
import WhatWeOfferIcon from "../assets/images/WhatWeOffer.svg"; // What We Offer icon
import ReusableSanitaryPadsImage from "../assets/images/ReusableSanitaryPads.svg"; // Reusable Sanitary Pads image
import DisposableSanitaryPadsImage from "../assets/images/DisposableSanitaryPads.svg"; // Disposable Sanitary Pads image
import CompleteHygieneKitImage from "../assets/images/CompleteHygieneKit.svg"; // Complete Hygiene Kit image
import TestimonailIcon from "../assets/images/Testimonail.svg"; // Testimonial icon
import TestimonialImage from "../assets/images/Testimonial123.svg"; // Testimonial image (updated path)
import QuoteIcon from "../assets/images/QUOTE.svg"; // Quote icon
import LeftIcon from "../assets/images/left1.svg"; // Left navigation icon
import RightIcon from "../assets/images/right.svg"; // Right navigation icon
import { Box, Typography, Button, Card, CardContent } from "@mui/material"; // Import MUI components
// Add these imports at the top with the existing imports
import PartnershipsIcon from "../assets/images/Partnerships.svg";
import PrimarySchoolIcon1 from "../assets/images/PrimarySchoolIcon1.svg";
import PrimarySchoolIcon2 from "../assets/images/PrimarySchoolIcon2.svg";
import PrimarySchoolIcon3 from "../assets/images/PrimarySchoolIcon3.svg";
import LogoMark1 from "../assets/images/logo mark 1.svg"; // Background decorative element
import LogoMark2 from "../assets/images/logo mark 2.svg"; // Logo for bottom left

const EHygiene = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${PupilsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          marginTop: 0,
          paddingTop: 0,
          position: "relative",
          width: "100vw", // Ensure it touches the left and right edges
          marginLeft: "calc(-50vw + 50%)", // Center the image and stretch it
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Button with Hygiene Icon (Above the text) */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "25px",
              border: "2px solid white",
              backgroundColor: "white",
              color: "#800080",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "100px",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <img
              src={HygieneIcon}
              alt="Hygiene Icon"
              style={{ width: "16px", height: "16px", color: "#800080" }}
            />
            <span>E-Hygiene Shop</span>
          </button>

          {/* Main Heading */}
          <h1
            style={{
              color: "white",
              fontSize: "48px",
              margin: "0",
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            Empowering Education
            <br />
            through Better Health
          </h1>

          {/* Sub Heading */}
          <p
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "10px auto",
              fontSize: "18px",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            Providing dignified access to hygiene products for students across
            Africa, ensuring no one misses class.
          </p>

          {/* Partner With Us Button (Below the text) */}
          <button
            onClick={() => {
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
                    console.error(
                      "Voiceflow chat still not available after retry"
                    );
                  }
                }, 1000);
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 30px",
              borderRadius: "30px",
              backgroundColor: "#800080",
              color: "white",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <span>Partner With Us Today</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
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
            </div>
          </button>
        </div>
      </div>
      {/* Benefits and Partner Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }} // Stack on mobile, row on desktop
        alignItems="center"
        justifyContent="space-between"
        mt={{ xs: 3, md: 6 }}
        px={{ xs: 2, md: 6 }}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Left Side: Text Content */}
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap={4}
          pr={{ md: 4 }}
        >
          {/* Benefits Section - FIXED to properly center */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              position="relative"
              sx={{ paddingLeft: { xs: "20px", md: "24px" } }}
            >
              {/* Purple Line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  height: "100%",
                  width: "4px",
                  backgroundColor: "#91368A",
                  borderRadius: "2px",
                }}
              />

              {/* Benefits Icon */}
              <img
                src={benefitsIcon}
                alt="Benefits Icon"
                style={{ width: 24, height: 24 }}
              />

              {/* Benefits Text */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  color: "#91368A",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Benefits
              </Typography>
            </Box>
          </Box>

          {/* Why Partner with Keti AI */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "52px",
            }}
          >
            Why partner with Keti AI
          </Typography>

          {/* Sub Text */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Geist",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              maxWidth: "600px",
            }}
          >
            We make hygiene simple, affordable, and impactful.
          </Typography>

          {/* Attendance Section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <img
              src={SupportIcon}
              alt="AttendanceIcon"
              style={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Improved attendance
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                See up to 95% improvement in female student attendance rates.
              </Typography>
            </Box>
          </Box>

          {/* Community Support Section */}
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src={SupportIcon}
              alt="Support Icon"
              style={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Community support
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Access to our network of health educators and support resources.
              </Typography>
            </Box>
          </Box>

          {/* Quality Products Section */}
          <Box display="flex" alignItems="center" gap={2}>
            <img
              src={QualityProductsIcon}
              alt="Quality Products Icon"
              style={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                }}
              >
                Quality products
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Partner with trusted manufacturers for reliable hygiene
                products.
              </Typography>
            </Box>
          </Box>

          {/* Discover How It Works Button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 30px",
              borderRadius: "30px",
              backgroundColor: "#800080",
              color: "white",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Geist', sans-serif",
              marginTop: "20px",
            }}
          >
            <span>Discover How It Works</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
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
            </div>
          </button>
        </Box>

        {/* Right Side: Partner Image */}
        <Box
          flex={1}
          display="flex"
          justifyContent="flex-end"
          mt={{ xs: 4, md: 0 }}
        >
          <img
            src={PartnerImage}
            alt="Partner Image"
            style={{
              width: "628px",
              height: "426px",
              borderRadius: "14px",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>

      {/* Process Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={6}
        px={{ xs: 2, md: 6 }}
        maxWidth="1200px"
        mx="auto"
      >
        {/* Process Icon and Text */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          position="relative"
          sx={{ paddingLeft: { xs: "20px", md: "24px" } }}
        >
          {/* Purple Line */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              height: "100%",
              width: "4px",
              backgroundColor: "#91368A",
              borderRadius: "2px",
            }}
          />

          <img
            src={ProcessIcon}
            alt="Process Icon"
            style={{ width: 24, height: 24 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Process
          </Typography>
        </Box>

        {/* Cards for Process - UPDATED to use Material UI Cards */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          mt={4}
          width="100%"
          justifyContent="center"
        >
          {/* Sick Bay Card */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "30%" },
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
                padding: "24px",
                height: "100%",
              }}
            >
              <img
                src={SickBayIcon}
                alt="Sick Bay Icon"
                style={{ width: 60, height: 60, marginBottom: "16px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "24px",
                  mb: 2,
                }}
              >
                Visit School Sick Bay
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Students can discreetly visit their school's sick bay whenever
                they need hygiene products.
              </Typography>
            </CardContent>
          </Card>

          {/* Credit Card */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "30%" },
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
                padding: "24px",
                height: "100%",
              }}
            >
              <img
                src={CreditIcon}
                alt="Credit Icon"
                style={{ width: 60, height: 60, marginBottom: "16px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "24px",
                  mb: 2,
                }}
              >
                Get Products on Credit
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Access quality products immediately with our student-friendly
                credit system.
              </Typography>
            </CardContent>
          </Card>

          {/* Pay Later Card */}
          <Card
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "30%" },
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
                padding: "24px",
                height: "100%",
              }}
            >
              <img
                src={PayLaterIcon}
                alt="Pay Later Icon"
                style={{ width: 60, height: 60, marginBottom: "16px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "24px",
                  mb: 2,
                }}
              >
                Pay Later
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Parents can settle the credit during visiting day or at the end
                of term.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* What We Offer Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={6}
        px={{ xs: 2, md: 6 }}
        maxWidth="1200px"
        mx="auto"
      >
        {/* What We Offer Icon and Text */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          position="relative"
          sx={{ paddingLeft: { xs: "20px", md: "24px" } }}
        >
          {/* Purple Line */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              height: "100%",
              width: "4px",
              backgroundColor: "#91368A",
              borderRadius: "2px",
            }}
          />

          <img
            src={WhatWeOfferIcon}
            alt="What We Offer Icon"
            style={{ width: 24, height: 24 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            What We Offer
          </Typography>
        </Box>

        {/* Products Heading and Body */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 600,
            fontSize: "44px",
            lineHeight: "52px",
            mt: 2,
          }}
        >
          Products
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Geist",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            maxWidth: "600px",
            textAlign: "center",
            mt: 2,
            mb: 4,
          }}
        >
          Quality hygiene products from trusted manufacturers.
        </Typography>

        {/* Cards for Products - Modified to show images in cards with text under */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          justifyContent="center"
          width="100%"
        >
          {/* Reusable Sanitary Pads Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={ReusableSanitaryPadsImage}
              alt="Reusable Sanitary Pads"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Reusable Sanitary Pads
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              Eco-friendly, comfortable, and cost-effective solution for up to 2
              years.
            </Typography>
          </Box>

          {/* Disposable Sanitary Pads Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={DisposableSanitaryPadsImage}
              alt="Disposable Sanitary Pads"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Disposable Sanitary Pads
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              High-quality disposable pads with wings for secure protection.
            </Typography>
          </Box>

          {/* Complete Hygiene Kit Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={CompleteHygieneKitImage}
              alt="Complete Hygiene Kit"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Complete Hygiene Kit
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              Essential hygiene products including soap, sanitizer, and more.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Testimonials Section - Integrated here after Products section */}
      <Box
        sx={{
          backgroundColor: "white",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          maxWidth: "1200px",
          mx: "auto",
          mb: 6,
        }}
      >
        {/* Testimonial Icon with Purple Line and Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "180px",
            height: "32px",
            borderLeft: "4px solid #91368A",
            padding: "4px 16px",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={TestimonailIcon}
            alt="Testimonial Icon"
            sx={{ width: "24px", height: "24px" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Testimonials
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: "bold",
            color: "#000000",
            textAlign: "center",
            mb: 4,
          }}
        >
          Join 1,030+ healthcare heroes thriving with Keti
        </Typography>

        {/* Content Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
            width: "100%",
          }}
        >
          {/* Image on the Left - Using the specified image path */}
          <Box
            component="img"
            src={TestimonialImage}
            alt="Testimonial Image"
            sx={{
              width: { xs: "100%", md: "40%" },
              maxWidth: "400px",
              borderRadius: "10px",
            }}
          />

          {/* Testimonial Text and Author */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", md: "60%" },
              textAlign: "left",
            }}
          >
            {/* Quote Icon and Testimonial Text */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="img"
                src={QuoteIcon}
                alt="Quote Icon"
                sx={{ width: "24px", height: "24px", mt: 0.5 }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Geist",
                  color: "#333",
                  lineHeight: 1.6,
                }}
              >
                Since introducing the E-Hygiene Shop program, we've seen
                remarkable improvement in female student attendance. Free
                sanitary products have given our students confidence, helping
                them focus on education.
              </Typography>
            </Box>

            {/* Testimonial Author */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: "bold",
                color: "#000000",
                textAlign: "left",
              }}
            >
              Ms. Grace Nakato, Principal @ St. Mary’s High School
            </Typography>
          </Box>
        </Box>

        {/* Scroll Buttons - removed as per instruction */}
      </Box>

      {/* Partnerships Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={6}
        px={{ xs: 2, md: 6 }}
        maxWidth="1200px"
        mx="auto"
        mb={6}
      >
        {/* Partnerships Icon and Text */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          position="relative"
          sx={{ paddingLeft: { xs: "20px", md: "24px" } }}
        >
          {/* Purple Line */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              height: "100%",
              width: "4px",
              backgroundColor: "#91368A",
              borderRadius: "2px",
            }}
          />
          <img
            src={PartnershipsIcon}
            alt="Partnerships Icon"
            style={{ width: 24, height: 24 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Bricolage Grotesque",
              color: "#91368A",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Partnerships
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Bricolage Grotesque",
            fontWeight: 600,
            fontSize: "44px",
            lineHeight: "52px",
            textAlign: "center",
            mt: 2,
          }}
        >
          Our Partner Schools
        </Typography>

        {/* Body */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Geist",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            textAlign: "center",
            maxWidth: "600px",
            mt: 2,
            mb: 4,
          }}
        >
          Join our growing network of schools committed to student well-being.
        </Typography>

        {/* Cards for Partner Schools */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          justifyContent="center"
          width="100%"
        >
          {/* St Mary's Kishai Primary School Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={PrimarySchoolIcon1}
              alt="St Mary's Kishai Primary School Icon"
              style={{ width: 40, height: 40, marginBottom: "16px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              St Mary's Kishai Primary School
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              Kampala, Uganda
            </Typography>
          </Box>

          {/* Rwentobo Preparatory School Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={PrimarySchoolIcon2}
              alt="Rwentobo Preparatory School Icon"
              style={{ width: 40, height: 40, marginBottom: "16px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Rwentobo Preparatory School
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              Dar es Salaam, Tanzania
            </Typography>
          </Box>

          {/* Birere Primary School Card */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              maxWidth: "300px",
            }}
          >
            <img
              src={PrimarySchoolIcon3}
              alt="Birere Primary School Icon"
              style={{ width: 40, height: 40, marginBottom: "16px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "24px",
                textAlign: "center",
              }}
            >
              Birere Primary School
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Geist",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
                mt: 1,
              }}
            >
              Nairobi, Kenya
            </Typography>
          </Box>
        </Box>

        {/* See All Our Partners Button (Reusing the Partner With Us button style from Background Image section) */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px 30px",
            borderRadius: "30px",
            backgroundColor: "#800080",
            color: "white",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Geist', sans-serif",
            marginTop: "40px",
          }}
        >
          <span>See All Our Partners</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
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
          </div>
        </button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FCEAFB", // Light pink background
          padding: { xs: "40px 20px", md: "60px 40px" },
          position: "relative",
          overflow: "hidden",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "16px", // Rounded corners as shown in the example
        }}
      >
        {/* Background decorative element (LogoMark1) - positioned as faded shape in the background */}
        <Box
          component="img"
          src={LogoMark1}
          alt="Background Element"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "90%", // Reduced height so it doesn't touch bottom
            zIndex: 1,
            opacity: 0.3,
            marginBottom: "10%", // Add space at the bottom
          }}
        />

        {/* Logo Mark 2 at bottom left - larger size, starting from bottom */}
        <Box
          component="img"
          src={LogoMark2}
          alt="Logo Mark 2"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "250px", // Increased size from 120px to 150px
            height: "auto",
            zIndex: 2,
            maxHeight: "50%", // Increased from 40% to 50% to allow it to be bigger
          }}
        />

        {/* Content container - everything centered */}
        <Box
          sx={{
            zIndex: 2,
            position: "relative",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Bricolage Grotesque, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "28px", md: "32px" },
              color: "#000000",
              mb: 3,
            }}
          >
            Join our Mission
          </Typography>

          {/* Body Text - no border, just centered text */}
          <Typography
            sx={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              color: "#333",
              mb: 4,
              maxWidth: "90%",
              margin: "0 auto 32px",
            }}
          >
            Empower students with access to essential hygiene products and
            improve school attendance by partnering with us. Bring the E-Hygiene
            Shop to your institution or join our network of trusted hygiene
            product suppliers to make a lasting impact.
          </Typography>

          {/* Buttons - horizontally aligned */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center", // Center the buttons
            }}
          >
            {/* Button: Become a Supplier */}
            <Button
              sx={{
                backgroundColor: "white",
                color: "#000000",
                borderRadius: "40px",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Become a Supplier
            </Button>

            {/* Button: Partner with Us */}
            <Button
              sx={{
                backgroundColor: "#9C27B0", // Purple background
                color: "white",
                borderRadius: "40px",
                padding: "8px 20px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
                "&:hover": {
                  backgroundColor: "#7B1FA2", // Darker purple on hover
                },
              }}
            >
              Partner with Us
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EHygiene;

import React from "react";
import Navbar from "./components/NavBar";
import { Button, Typography } from "@mui/material"; // Import MUI components
import Information from "./components/Information"; // Import the Information component
import KetiStats from "./components/KetiStats"; // Importing the KetiStats component
import RecentAwards from "./components/RecentAwards";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import ketiaiBackground from "./assets/images/KETIAIBACKGROUND.jpg"; // Import the background image

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-section relative"
        style={{
          backgroundImage: `url(${ketiaiBackground})`, // Updated path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "460px", // Increased height
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "purple", // Default text color (can be overridden for specific elements)
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "60px", // Extra space below
        }}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Purple Text */}
          <div
            className="text-2xl md:text-3xl font-semibold drop-shadow-lg"
            style={{ color: "white" }}
          ></div>

          {/* MUI Button */}
          <Button
            variant="contained" // Use "contained" for a solid button
            sx={{
              marginTop: "16px",
              borderRadius: "24px",
              padding: "10px 20px",
              backgroundColor: "purple", // Purple button
              color: "white", // White text
              "&:hover": {
                backgroundColor: "#6a1b9a", // Darker purple on hover
              },
            }}
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            Visit KETI AI
          </Button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Information Section */}
      <div style={{ width: "100%", padding: 0 }}>
        <Information />
      </div>

      {/* Centered Paragraphs and Button */}
      <div className="flex flex-col items-center mt-8 px-4">
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{
            maxWidth: "600px",
            marginBottom: "20px",
            paddingLeft: "300px", // Add padding to left and right for better centering
            paddingRight: "300px",
          }}
        >
          Welcome to KETI AI, your one-stop solution for telemedicine services.
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{
            maxWidth: "600px",
            marginBottom: "20px",
            paddingLeft: "300px", // Add padding to left and right for better centering
            paddingRight: "300px",
          }}
        >
          Telemedicine is revolutionizing the way we access healthcare.
        </Typography>
        {/* MUI Button below the paragraphs */}
        <div
          className="w-full mt-4"
          style={{ paddingLeft: "500px", paddingRight: "455px" }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "24px",
              padding: "12px 25px",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "20px", // Add margin top for spacing
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* KetiStats, FindUs, and RecentAwards Sections */}
      <div style={{ marginBottom: "40px" }}>
        {" "}
        {/* Add margin to KetiStats */}
        <KetiStats />
      </div>
      <FindUs />
      <RecentAwards />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

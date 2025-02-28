import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import AssetFinanceLoans from "./components/AssetFinanceLoans"; // Import the new component
import { Button, Typography } from "@mui/material";
import Information from "./components/Information";
import KetiStats from "./components/KetiStats";
import RecentAwards from "./components/RecentAwards";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import ketiaiBackground from "./assets/images/KETIAIBACKGROUND.jpg";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <div
                  className="bg-section relative"
                  style={{
                    backgroundImage: `url(${ketiaiBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "460px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    color: "purple",
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingBottom: "60px",
                  }}
                >
                  <div className="flex flex-col items-center gap-6">
                    <div
                      className="text-2xl md:text-3xl font-semibold drop-shadow-lg"
                      style={{ color: "white" }}
                    ></div>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "16px",
                        borderRadius: "24px",
                        padding: "10px 20px",
                        backgroundColor: "purple",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#6a1b9a",
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
                      paddingLeft: "300px",
                      paddingRight: "300px",
                    }}
                  >
                    Welcome to KETI AI, your one-stop solution for telemedicine
                    services.
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    align="center"
                    sx={{
                      maxWidth: "600px",
                      marginBottom: "20px",
                      paddingLeft: "300px",
                      paddingRight: "300px",
                    }}
                  >
                    Telemedicine is revolutionizing the way we access
                    healthcare.
                  </Typography>
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
                        marginTop: "20px",
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* KetiStats, FindUs, and RecentAwards Sections */}
                <div style={{ marginBottom: "40px" }}>
                  <KetiStats />
                </div>
                <FindUs />
                <RecentAwards />
              </>
            }
          />
          <Route path="/asset-finance-loans" element={<AssetFinanceLoans />} />
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

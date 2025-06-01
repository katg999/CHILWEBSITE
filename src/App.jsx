import "./App.css";
import "./assets/css/styles.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import BenefitsSection from "./components/BenefitsSection";
import KetiStats from "./components/KetiStats";
import KetiServices from "./components/KetiServices";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import ActNow from "./components/ActNow";
import OurWorksSection from "./components/OurWorksSection";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FinanceLoans from "./components/FinanceLoans";
import WhatWeTreat from "./components/WhatWeTreat";
import Disaster from "./components/Disaster";
import PrivacyPolicy from "./components/PrivacyPolicy";
import EHygiene from "./components/EHygiene";
import MaternalHealth from "./components/MaternalHealth";
import Careers from "./components/Careers";
import ScrollToTop from "./components/ScrollToTop";

// Material-UI Components
import { Container, Box } from "@mui/material";

const App = () => {
  useEffect(() => {
    async function fixHorizontalOverflow() {
      const body = document.body;
      const individualsMenu = document.getElementById("individuals-menu");
      const organisationsMenu = document.getElementById("organisations-menu");
      const textarea = document.querySelector("textarea");

      // Check if elements exist before modifying them
      if (body) {
        body.style.width = "100vw";
        body.style.boxSizing = "border-box";
      }

      if (individualsMenu) {
        individualsMenu.style.maxWidth = "100%";
        individualsMenu.style.position = "absolute";
      }

      if (organisationsMenu) {
        organisationsMenu.style.maxWidth = "100%";
        organisationsMenu.style.position = "absolute";
      }

      if (textarea) {
        textarea.style.right = "0";
        textarea.style.width = "auto";
        textarea.style.maxWidth = "100%";
        textarea.style.left = "auto";
      }
    }

    fixHorizontalOverflow();
  }, []); // Runs once after the initial render

  return (
    <Router>
      <ScrollToTop />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Container maxWidth="xl">
            <Routes>
              {/* Home Route */}
              <Route
                path="/"
                element={
                  <>
                    <Display />
                    <BenefitsSection />
                    <KetiStats />
                    <OurWorksSection />
                    <KetiServices />
                    <Testimonials />
                    <News />
                    <ActNow />
                  </>
                }
              />

              {/* Other Routes */}
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/asset-finance-loans" element={<FinanceLoans />} />
              <Route path="/what-we-treat" element={<WhatWeTreat />} />
              <Route path="/disaster" element={<Disaster />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/ehygiene" element={<EHygiene />} />
              <Route path="/maternal-health" element={<MaternalHealth />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
};

export default App;

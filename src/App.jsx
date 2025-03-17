import "./App.css";
import "./assets/css/styles.css";
import React from "react";
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
import ContactUs from "./components/ContactUs"; // Import the ContactUs component
import FinanceLoans from "./components/FinanceLoans";
import WhatWeTreat from "./components/WhatWeTreat";
import Disaster from "./components/Disaster";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
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

          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/asset-finance-loans" element={<FinanceLoans />} />
          <Route path="/what-we-treat" element={<WhatWeTreat />} />
          <Route path="/disaster" element={<Disaster />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

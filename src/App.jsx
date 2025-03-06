import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import ImageDisplay from "./components/ImageDisplay";
import BenefitsSection from "./components/BenefitsSection";
import KetiStats from "./components/KetiStats";
import KetiServices from "./components/KetiServices";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import ActNow from "./components/ActNow";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Display Component */}
        <Display />

        {/* Image Display Component */}

        <BenefitsSection />
        <KetiStats />
        <KetiServices />
        <Testimonials />
        <News />
        <ActNow />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

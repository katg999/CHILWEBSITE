import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import ImageDisplay from "./components/ImageDisplay";
import BenefitsSection from "./components/BenefitsSection";
import KetiStats from "./components/KetiStats";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Display Component */}
        <Display />

        {/* Image Display Component */}
        <ImageDisplay />
        <BenefitsSection />
        <KetiStats />
      </div>
    </Router>
  );
};

export default App;

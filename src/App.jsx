import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import ImageDisplay from "./components/ImageDisplay"; // Import the new component

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
      </div>
    </Router>
  );
};

export default App;

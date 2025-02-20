import React from "react";
import ketiaiLogo from "../assets/images/KETIAI.jpeg"; // Adjust the path based on your folder structure

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Navigation Links */}
      <ul className="nav-links left-nav">
        <li>
          <a href="/">Individuals</a>
        </li>
        <li>
          <a href="/about">Organisations</a>
        </li>
      </ul>

      {/* Center: Logo */}
      <div className="logo-container">
        <img src={ketiaiLogo} alt="Ketiai Logo" className="logo" />
      </div>

      {/* Right: Register Now Button */}
      <div className="right-nav">
        <a href="/register" className="register-btn">
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

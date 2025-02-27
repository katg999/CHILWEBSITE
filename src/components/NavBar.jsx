import React, { useState } from "react";
import ketiaiLogo from "../assets/images/KETIAI.jpeg"; // Adjust the path based on your folder structure
import { Button, Menu, MenuItem, Typography } from "@mui/material";

const Navbar = () => {
  const [registerAnchorEl, setRegisterAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleRegisterClick = (event) => {
    setRegisterAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setRegisterAnchorEl(null);
    setServicesAnchorEl(null);
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "purple", padding: "10px 20px" }}
    >
      {/* Left: Navigation Links */}
      <ul
        className="nav-links left-nav"
        style={{ listStyle: "none", display: "flex", gap: "20px" }}
      >
        <li>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <Button
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleServicesClick}
            style={{ color: "white", textTransform: "none" }}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            keepMounted
            open={Boolean(servicesAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Maternal Child Health</MenuItem>
            <MenuItem onClick={handleClose}>Disaster Medicine</MenuItem>
            <MenuItem onClick={handleClose}>Other Services</MenuItem>
          </Menu>
        </li>
        <li>
          <Button
            aria-controls="register-menu"
            aria-haspopup="true"
            onClick={handleRegisterClick}
            style={{ color: "white", textTransform: "none" }}
          >
            Register
          </Button>
          <Menu
            id="register-menu"
            anchorEl={registerAnchorEl}
            keepMounted
            open={Boolean(registerAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Register as a Doctor</MenuItem>
            <MenuItem onClick={handleClose}>
              Register as a Health Facility
            </MenuItem>
            <MenuItem onClick={handleClose}>Register as a Pharmacy</MenuItem>
            <MenuItem onClick={handleClose}>Register as a Laboratory</MenuItem>
          </Menu>
        </li>
      </ul>

      {/* Center: Logo */}
      <div className="logo-container">
        <img
          src={ketiaiLogo}
          alt="Ketiai Logo"
          className="logo"
          style={{ height: "50px" }}
        />
      </div>

      {/* Right: Navigation Links */}
      <ul
        className="nav-links right-nav"
        style={{ listStyle: "none", display: "flex", gap: "20px" }}
      >
        <li>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            AssetFinance Loans
          </a>
        </li>
        <li>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

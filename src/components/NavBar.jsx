import React, { useState } from "react";
import ketiaiLogo from "../assets/images/emojiwhite.png"; // Adjust the path based on your folder structure
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown anchor

  // Handle dropdown open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle dropdown close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Common style for all buttons
  const buttonStyle = {
    color: "white",
    textTransform: "none",
    width: "120px",
    height: "40px",
  };

  // Special style for the longer AssetFinance Loans button
  const assetFinanceButtonStyle = {
    ...buttonStyle,
    width: "200px", // Wider to accommodate the longer text
    whiteSpace: "nowrap", // Prevents text wrapping
    overflow: "visible", // Allows text to extend beyond the button if needed
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "purple",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left: Navigation Links */}
      <ul
        className="nav-links left-nav"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Button
            aria-controls="individuals-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={buttonStyle}
          >
            Individuals
          </Button>
          {/* Vertical Dropdown Menu */}
          <Menu
            id="individuals-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: "purple", // Match navbar background
                boxShadow: "none", // Remove default shadow
              },
            }}
          >
            <MenuItem onClick={handleClose} style={{ color: "white" }}>
              Register as a Doctor
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ color: "white" }}>
              Register as a Patient
            </MenuItem>
          </Menu>
        </li>
        <li>
          <Button component={Link} to="/organisations" style={buttonStyle}>
            Organisations
          </Button>
        </li>
      </ul>

      {/* Center: Logo */}
      <div className="logo-container">
        <Link to="/">
          {" "}
          {/* Wrap the logo with Link */}
          <img
            src={ketiaiLogo}
            alt="Ketiai Logo"
            className="logo"
            style={{ height: "50px", cursor: "pointer" }} // Add cursor pointer for better UX
          />
        </Link>
      </div>
      {/* Right: Navigation Links */}
      <ul
        className="nav-links right-nav"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          alignItems: "center", // Align items vertically in the center
        }}
      >
        <li>
          <Button
            component={Link}
            to="/asset-finance-loans"
            style={assetFinanceButtonStyle}
          >
            AssetFinance Loans
          </Button>
        </li>
        <li>
          <Button component={Link} to="/contact-us" style={buttonStyle}>
            Contact Us
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

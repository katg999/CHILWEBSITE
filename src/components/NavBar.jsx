import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ketiaiLogo from "../assets/images/emojiwhite.png"; // Adjust path

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile drawer

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is small

  // Toggle drawer for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle dropdown open/close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Common style for nav links
  const navLinkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "10px 15px",
    cursor: "pointer",
  };

  // Navigation Links
  const navLinks = (
    <>
      <span
        onClick={handleClick}
        style={{ ...navLinkStyle, cursor: "pointer" }}
      >
        Individuals
      </span>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Register as a Doctor</MenuItem>
        <MenuItem onClick={handleClose}>Register as a Patient</MenuItem>
      </Menu>

      <Link to="/organisations" style={navLinkStyle}>
        Organisations
      </Link>
      <Link to="/asset-finance-loans" style={navLinkStyle}>
        AssetFinance Loans
      </Link>
      <Link to="/contact-us" style={navLinkStyle}>
        Contact Us
      </Link>
    </>
  );

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={ketiaiLogo}
            alt="Ketiai Logo"
            style={{ height: "50px", cursor: "pointer" }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              marginLeft: "5px",
            }}
          >
            Keti.AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div style={{ display: "flex", gap: "30px" }}>{navLinks}</div>
        ) : (
          // Mobile Menu Icon
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
        )}

        {/* Right: Chat Button */}
        {!isMobile && (
          <Link
            to="/chat-with-keti"
            style={{
              backgroundColor: "purple",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "25px",
              padding: "10px 20px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Chat With Keti
          </Link>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List style={{ width: 250 }}>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Individuals" onClick={handleClick} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/organisations"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Organisations" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/asset-finance-loans"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="AssetFinance Loans" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact-us"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/chat-with-keti"
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary="Chat With Keti"
              style={{ color: "purple", fontWeight: "bold" }}
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

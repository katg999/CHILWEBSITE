import React, { useState } from "react";
import ketiaiLogo from "../assets/images/emoji-logo-black.svg"; // Adjust the path based on your folder structure
import {
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Import the hamburger menu icon

// WhatsApp Icon Component (unchanged)
const WhatsappIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="purple"
    stroke="white"
    strokeWidth="1.5"
    {...props}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
      strokeLinejoin="round"
    />
    <path
      d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [individualsAnchorEl, setIndividualsAnchorEl] = useState(null); // State for Individuals dropdown
  const [organisationsAnchorEl, setOrganisationsAnchorEl] = useState(null); // State for Organisations dropdown
  const [drawerOpen, setDrawerOpen] = useState(false); // State for mobile drawer

  // Add state for active dropdown menus
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is mobile size

  // Handle Individuals dropdown open
  const handleIndividualsClick = (event) => {
    setIndividualsAnchorEl(event.currentTarget);
    setActiveMenu("individuals");
  };

  // Handle Organisations dropdown open
  const handleOrganisationsClick = (event) => {
    setOrganisationsAnchorEl(event.currentTarget);
    setActiveMenu("organisations");
  };

  // Handle dropdown close
  const handleClose = () => {
    setIndividualsAnchorEl(null);
    setOrganisationsAnchorEl(null);
  };

  // Handle mobile drawer open
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // Handle mobile drawer close
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Function to open the Dialogflow chat bot using direct DOM manipulation
  const openChatBot = (userType) => {
    // Close the dropdown menu
    handleClose();

    // Set active submenu when clicked
    setActiveSubMenu(userType);

    if (drawerOpen) {
      handleDrawerClose();
    }

    try {
      // Find the chat icon button in the shadow DOM
      const dfMessenger = document.querySelector("df-messenger");
      if (!dfMessenger) return;

      // Try multiple approaches to open the chat

      // Approach 1: Try clicking the chat button directly
      const chatButton = dfMessenger.shadowRoot
        ?.querySelector("df-messenger-chat-bubble")
        ?.shadowRoot?.querySelector("button");
      if (chatButton) {
        chatButton.click();
        console.log("Clicked chat button using approach 1");
      } else {
        // Approach 2: Try using the component's API
        if (typeof dfMessenger.setAttribute === "function") {
          dfMessenger.setAttribute("expand", "true");
          console.log("Expanded chat using approach 2");
        }

        // Approach 3: Set a property directly if previous approaches failed
        if (typeof dfMessenger.expand === "boolean") {
          dfMessenger.expand = true;
          console.log("Expanded chat using approach 3");
        }

        // Approach 4: Use the showChat property if it exists
        if (dfMessenger.showChat !== undefined) {
          dfMessenger.showChat = true;
          console.log("Opened chat using approach 4");
        }
      }

      // Set a data attribute to pass context
      dfMessenger.setAttribute("data-user-type", userType);

      // Optional: Store user type in localStorage for persistence
      localStorage.setItem("ketiUserType", userType);

      // Create and dispatch a custom event to potentially trigger custom handlers
      const event = new CustomEvent("ketiChatOpened", {
        detail: { userType },
      });
      document.dispatchEvent(event);
    } catch (error) {
      console.error("Error opening chat:", error);
    }
  };

  // Common style for nav links
  const navLinkStyle = {
    color: "black",
    textDecoration: "none",
    fontFamily: "Geist, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
    padding: "10px 15px",
    cursor: "pointer",
    "&:hover": {
      color: "#666",
    },
  };

  // Custom menu styles to force vertical layout
  const menuStyles = {
    paper: {
      backgroundColor: "white",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
    },
  };

  // Custom menu item styles
  const menuItemStyles = {
    display: "block",
    width: "100%",
    color: "black",
    padding: "10px 15px",
  };

  // Function to determine if a dropdown menu is active
  const isMenuActive = (menuName) => activeMenu === menuName;

  // Function to determine if a submenu item is active
  const isSubMenuActive = (submenuName) => activeSubMenu === submenuName;

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left: Logo */}
      <div
        className="logo-container"
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
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
            className="logo"
            style={{ height: "50px", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* Center: Navigation Links (Hidden on Small Mobile Devices) */}
      {!isMobile && (
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul
            className="nav-links center-nav"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "30px",
              margin: 0,
              padding: 0,
            }}
          >
            {/* Individuals Dropdown */}
            <li>
              <span
                onClick={handleIndividualsClick}
                style={{
                  ...navLinkStyle,
                  cursor: "pointer",
                  color: isMenuActive("individuals") ? "purple" : "black",
                }}
              >
                Individuals
              </span>
              <Menu
                id="individuals-menu"
                anchorEl={individualsAnchorEl}
                keepMounted
                open={Boolean(individualsAnchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": menuStyles.paper,
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                MenuListProps={{
                  style: { padding: 0 },
                }}
              >
                <MenuItem
                  onClick={() => openChatBot("doctor")}
                  sx={{
                    ...menuItemStyles,
                    color: isSubMenuActive("doctor") ? "purple" : "black",
                  }}
                >
                  Register as a Doctor
                </MenuItem>
                <MenuItem
                  onClick={() => openChatBot("patient")}
                  sx={{
                    ...menuItemStyles,
                    color: isSubMenuActive("patient") ? "purple" : "black",
                  }}
                >
                  Register as a Patient
                </MenuItem>
              </Menu>
            </li>

            {/* Organisations Dropdown */}
            <li>
              <span
                onClick={handleOrganisationsClick}
                style={{
                  ...navLinkStyle,
                  cursor: "pointer",
                  color: isMenuActive("organisations") ? "purple" : "black",
                }}
              >
                Organisations
              </span>
              <Menu
                id="organisations-menu"
                anchorEl={organisationsAnchorEl}
                keepMounted
                open={Boolean(organisationsAnchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": menuStyles.paper,
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                MenuListProps={{
                  style: { padding: 0 },
                }}
              >
                <MenuItem
                  onClick={() => openChatBot("school")}
                  sx={{
                    ...menuItemStyles,
                    color: isSubMenuActive("school") ? "purple" : "black",
                  }}
                >
                  Register as a School
                </MenuItem>
                <MenuItem
                  onClick={() => openChatBot("pharmacy")}
                  sx={{
                    ...menuItemStyles,
                    color: isSubMenuActive("pharmacy") ? "purple" : "black",
                  }}
                >
                  Register as a Pharmacy
                </MenuItem>
                <MenuItem
                  onClick={() => openChatBot("laboratory")}
                  sx={{
                    ...menuItemStyles,
                    color: isSubMenuActive("laboratory") ? "purple" : "black",
                  }}
                >
                  Register as a Laboratory
                </MenuItem>
              </Menu>
            </li>

            {/* Other Links */}
            <li>
              <NavLink
                to="/asset-finance-loans"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  textDecoration: "none",
                  color: isActive ? "purple" : "black",
                })}
              >
                Finance Loans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  textDecoration: "none",
                  color: isActive ? "purple" : "black",
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* Right: Chat With Keti Button (Hidden on Small Mobile Devices) */}
      {!isMobile && (
        <div
          onClick={() => openChatBot("general")}
          style={{
            backgroundColor: "purple",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "25px",
            padding: "10px 20px",
            whiteSpace: "nowrap",
            width: "auto",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "16px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          <WhatsappIcon style={{ color: "white", fill: "purple" }} /> Chat With
          Keti
        </div>
      )}

      {/* Mobile Hamburger Menu (Visible on Small Mobile Devices) */}
      {isMobile && (
        <IconButton onClick={handleDrawerOpen} sx={{ color: "black" }}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          },
        }}
      >
        <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Individuals Dropdown in Drawer */}
          <ListItem>
            <span
              onClick={handleIndividualsClick}
              style={{
                ...navLinkStyle,
                cursor: "pointer",
                color: isMenuActive("individuals") ? "purple" : "black",
              }}
            >
              Individuals
            </span>
            <Menu
              id="mobile-individuals-menu"
              anchorEl={individualsAnchorEl}
              keepMounted
              open={Boolean(individualsAnchorEl)}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": menuStyles.paper,
                "& .MuiList-root": {
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              MenuListProps={{
                style: { padding: 0 },
              }}
            >
              <MenuItem
                onClick={() => openChatBot("doctor")}
                sx={{
                  ...menuItemStyles,
                  color: isSubMenuActive("doctor") ? "purple" : "black",
                }}
              >
                Register as a Doctor
              </MenuItem>
              <MenuItem
                onClick={() => openChatBot("patient")}
                sx={{
                  ...menuItemStyles,
                  color: isSubMenuActive("patient") ? "purple" : "black",
                }}
              >
                Register as a Patient
              </MenuItem>
            </Menu>
          </ListItem>

          {/* Organisations Dropdown in Drawer */}
          <ListItem>
            <span
              onClick={handleOrganisationsClick}
              style={{
                ...navLinkStyle,
                cursor: "pointer",
                color: isMenuActive("organisations") ? "purple" : "black",
              }}
            >
              Organisations
            </span>
            <Menu
              id="mobile-organisations-menu"
              anchorEl={organisationsAnchorEl}
              keepMounted
              open={Boolean(organisationsAnchorEl)}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": menuStyles.paper,
                "& .MuiList-root": {
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              MenuListProps={{
                style: { padding: 0 },
              }}
            >
              <MenuItem
                onClick={() => openChatBot("school")}
                sx={{
                  ...menuItemStyles,
                  color: isSubMenuActive("school") ? "purple" : "black",
                }}
              >
                Register as a School
              </MenuItem>
              <MenuItem
                onClick={() => openChatBot("pharmacy")}
                sx={{
                  ...menuItemStyles,
                  color: isSubMenuActive("pharmacy") ? "purple" : "black",
                }}
              >
                Register as a Pharmacy
              </MenuItem>
              <MenuItem
                onClick={() => openChatBot("laboratory")}
                sx={{
                  ...menuItemStyles,
                  color: isSubMenuActive("laboratory") ? "purple" : "black",
                }}
              >
                Register as a Laboratory
              </MenuItem>
            </Menu>
          </ListItem>

          {/* Other Links in Drawer */}
          <ListItem>
            <NavLink
              to="/asset-finance-loans"
              style={({ isActive }) => ({
                ...navLinkStyle,
                textDecoration: "none",
                color: isActive ? "purple" : "black",
              })}
            >
              Finance Loans
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => ({
                ...navLinkStyle,
                textDecoration: "none",
                color: isActive ? "purple" : "black",
              })}
            >
              Contact Us
            </NavLink>
          </ListItem>

          {/* Mobile Chat Button */}
          <ListItem sx={{ justifyContent: "center", marginTop: "20px" }}>
            <div
              onClick={() => openChatBot("general")}
              style={{
                backgroundColor: "purple",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "25px",
                padding: "10px 20px",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              <WhatsappIcon style={{ color: "white", fill: "purple" }} /> Chat
              With Keti
            </div>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;

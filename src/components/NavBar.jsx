import React, { useState, useEffect } from "react";
import ketiaiLogo from "../assets/images/emoji-logo-black.svg";
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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [individualsAnchorEl, setIndividualsAnchorEl] = useState(null);
  const [organisationsAnchorEl, setOrganisationsAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleItemClick = (item) => {
    setActiveItem(item);
    handleClose();
    setDrawerOpen(false);
  };

  // Function to open the chatbot
  const openChatbot = () => {
    const dfMessenger = document.querySelector("df-messenger");
    if (dfMessenger) {
      // Try to find the chat button in the shadow DOM
      const chatButton = dfMessenger.shadowRoot.querySelector(
        "df-messenger-button button.df-messenger-button"
      );

      if (chatButton) {
        chatButton.click();
        return true;
      }
    }
    return false;
  };

  // Function to send a message to the chatbot
  const sendMessageToChatbot = (message) => {
    const dfMessenger = document.querySelector("df-messenger");
    if (!dfMessenger) return false;

    const chatElement =
      dfMessenger.shadowRoot.querySelector("df-messenger-chat");
    if (!chatElement) return false;

    const inputElement = chatElement.shadowRoot.querySelector(
      "input.df-messenger-input"
    );

    if (!inputElement) return false;

    // Set input value and trigger input event
    inputElement.value = message;
    inputElement.dispatchEvent(new Event("input", { bubbles: true }));

    // Find and click the send button
    const sendButton = chatElement.shadowRoot.querySelector(
      "button.df-messenger-send-icon"
    );

    if (sendButton) {
      sendButton.click();
      return true;
    }

    return false;
  };

  // Improved function to handle registration clicks
  const handleRegistrationClick = (type) => {
    // Close any open menus
    handleClose();
    setDrawerOpen(false);

    // Store the registration type in localStorage (more persistent than sessionStorage)
    localStorage.setItem("registrationType", type);

    // Try to open the chatbot
    const isOpened = openChatbot();

    if (isOpened) {
      // If chatbot opened successfully, give it time to initialize
      setTimeout(() => {
        const message = `I want to register as a ${type}`;
        const messageSent = sendMessageToChatbot(message);

        // If sending fails, retry after a longer delay
        if (!messageSent) {
          setTimeout(() => {
            sendMessageToChatbot(message);
          }, 2000);
        }
      }, 1000);
    } else {
      // If chatbot didn't open, try again after a delay
      setTimeout(() => {
        openChatbot();

        // Try to send the message after another delay
        setTimeout(() => {
          sendMessageToChatbot(`I want to register as a ${type}`);
        }, 1000);
      }, 1000);
    }
  };

  // Listen for Dialogflow Messenger loading
  useEffect(() => {
    const handleMessengerLoaded = () => {
      const registrationType = localStorage.getItem("registrationType");
      if (registrationType) {
        // Don't clear the type immediately to allow for retries

        // First, try to open the chatbot
        const isOpened = openChatbot();

        if (isOpened) {
          // Wait for the chatbot to fully open
          setTimeout(() => {
            const messageSent = sendMessageToChatbot(
              `I want to register as a ${registrationType}`
            );

            // Only clear the registration type if we successfully sent the message
            if (messageSent) {
              localStorage.removeItem("registrationType");
            } else {
              // Try again one more time
              setTimeout(() => {
                if (
                  sendMessageToChatbot(
                    `I want to register as a ${registrationType}`
                  )
                ) {
                  localStorage.removeItem("registrationType");
                }
              }, 2000);
            }
          }, 1500);
        } else {
          // If opening failed, try again after a longer delay
          setTimeout(() => {
            openChatbot();

            setTimeout(() => {
              if (
                sendMessageToChatbot(
                  `I want to register as a ${registrationType}`
                )
              ) {
                localStorage.removeItem("registrationType");
              }
            }, 1500);
          }, 2000);
        }
      }
    };

    // Setup event listeners for when Dialogflow is ready
    document.addEventListener("df-messenger-loaded", handleMessengerLoaded);

    // Also listen for when the chat becomes visible
    document.addEventListener("df-messenger-chat-open", () => {
      const registrationType = localStorage.getItem("registrationType");
      if (registrationType) {
        setTimeout(() => {
          if (
            sendMessageToChatbot(`I want to register as a ${registrationType}`)
          ) {
            localStorage.removeItem("registrationType");
          }
        }, 1000);
      }
    });

    return () => {
      document.removeEventListener(
        "df-messenger-loaded",
        handleMessengerLoaded
      );
      document.removeEventListener(
        "df-messenger-chat-open",
        handleMessengerLoaded
      );
    };
  }, []);

  const handleIndividualsClick = (event) => {
    setIndividualsAnchorEl(event.currentTarget);
    setActiveItem("Individuals"); // Set activeItem to "Individuals"
  };

  const handleOrganisationsClick = (event) => {
    setOrganisationsAnchorEl(event.currentTarget);
    setActiveItem("Organisations"); // Set activeItem to "Organisations"
  };

  const handleClose = () => {
    setIndividualsAnchorEl(null);
    setOrganisationsAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Common style for nav links
  const navLinkStyle = (item) => ({
    color: activeItem === item ? "purple" : "black",
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
  });

  // Custom menu styles
  const menuStyles = {
    paper: {
      backgroundColor: "white",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
    },
  };

  // Custom menu item styles
  const menuItemStyles = (item) => ({
    display: "block",
    width: "100%",
    color: activeItem === item ? "purple" : "black",
    padding: "10px 15px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  });

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
                  ...navLinkStyle("Individuals"),
                  cursor: "pointer",
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
                  onClick={() => {
                    handleRegistrationClick("Doctor");
                    handleItemClick("Doctor");

                    // Open Voiceflow bot
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                      console.log("Voiceflow chat opened");
                    } else {
                      console.error("Voiceflow chat not available");
                      // Fallback - if the chat isn't loaded yet, try again in a moment
                      setTimeout(() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                          window.voiceflow.chat.open();
                          console.log("Voiceflow chat opened on retry");
                        } else {
                          console.error(
                            "Voiceflow chat still not available after retry"
                          );
                        }
                      }, 1000);
                    }
                  }}
                  sx={menuItemStyles("Doctor")}
                >
                  Register as a Doctor
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleRegistrationClick("Patient");
                    handleItemClick("Patient");

                    // Open Voiceflow bot
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                      console.log("Voiceflow chat opened");
                    } else {
                      console.error("Voiceflow chat not available");
                      // Fallback - if the chat isn't loaded yet, try again in a moment
                      setTimeout(() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                          window.voiceflow.chat.open();
                          console.log("Voiceflow chat opened on retry");
                        } else {
                          console.error(
                            "Voiceflow chat still not available after retry"
                          );
                        }
                      }, 1000);
                    }
                  }}
                  sx={menuItemStyles("Patient")}
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
                  ...navLinkStyle("Organisations"),
                  cursor: "pointer",
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
                  onClick={() => {
                    handleRegistrationClick("School");
                    handleItemClick("School");

                    // Open Voiceflow bot
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                      console.log("Voiceflow chat opened");
                    } else {
                      console.error("Voiceflow chat not available");
                      // Fallback - if the chat isn't loaded yet, try again in a moment
                      setTimeout(() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                          window.voiceflow.chat.open();
                          console.log("Voiceflow chat opened on retry");
                        } else {
                          console.error(
                            "Voiceflow chat still not available after retry"
                          );
                        }
                      }, 1000);
                    }
                  }}
                  sx={menuItemStyles("School")}
                >
                  Register as a School
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleRegistrationClick("Pharmacy");
                    handleItemClick("Pharmacy");

                    // Open Voiceflow bot
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                      console.log("Voiceflow chat opened");
                    } else {
                      console.error("Voiceflow chat not available");
                      // Fallback - if the chat isn't loaded yet, try again in a moment
                      setTimeout(() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                          window.voiceflow.chat.open();
                          console.log("Voiceflow chat opened on retry");
                        } else {
                          console.error(
                            "Voiceflow chat still not available after retry"
                          );
                        }
                      }, 1000);
                    }
                  }}
                  sx={menuItemStyles("Pharmacy")}
                >
                  Register as a Pharmacy
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleRegistrationClick("Laboratory");
                    handleItemClick("Laboratory");

                    // Open Voiceflow bot
                    if (window.voiceflow && window.voiceflow.chat) {
                      window.voiceflow.chat.open();
                      console.log("Voiceflow chat opened");
                    } else {
                      console.error("Voiceflow chat not available");
                      // Fallback - if the chat isn't loaded yet, try again in a moment
                      setTimeout(() => {
                        if (window.voiceflow && window.voiceflow.chat) {
                          window.voiceflow.chat.open();
                          console.log("Voiceflow chat opened on retry");
                        } else {
                          console.error(
                            "Voiceflow chat still not available after retry"
                          );
                        }
                      }, 1000);
                    }
                  }}
                  sx={menuItemStyles("Laboratory")}
                >
                  Register as a Laboratory
                </MenuItem>
              </Menu>
            </li>

            {/* Other Links */}
            <li>
              <Link
                to="/asset-finance-loans"
                style={{
                  ...navLinkStyle("Finance Loans"),
                  textDecoration: "none",
                }}
                onClick={() => handleItemClick("Finance Loans")}
              >
                Finance Loans
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={{
                  ...navLinkStyle("Contact Us"),
                  textDecoration: "none",
                }}
                onClick={() => handleItemClick("Contact Us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Right: Chat With Keti Button (Hidden on Small Mobile Devices) */}
      {!isMobile && (
        <div
          onClick={() => {
            // Function to open Voiceflow chat
            const openVoiceflowChat = () => {
              try {
                // Check if Voiceflow is loaded
                if (window.voiceflow) {
                  // Try to open the chat widget using available methods
                  if (window.voiceflow.chat && window.voiceflow.chat.open) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened via open()");
                  } else if (
                    window.voiceflow.chat &&
                    window.voiceflow.chat.show
                  ) {
                    window.voiceflow.chat.show();
                    console.log("Voiceflow chat opened via show()");
                  } else if (window.voiceflow.show) {
                    window.voiceflow.show();
                    console.log("Voiceflow opened via show()");
                  } else {
                    // Fallback: Try to find and click the chat widget button
                    const chatButton = document.querySelector(
                      ".vfrc-launcher-button"
                    );
                    if (chatButton) {
                      chatButton.click();
                      console.log("Clicked Voiceflow launcher button");
                    } else {
                      console.error(
                        "No Voiceflow chat methods or button found"
                      );
                    }
                  }
                } else {
                  console.error("Voiceflow not loaded");
                }
              } catch (err) {
                console.error("Error opening Voiceflow chat:", err);
              }
            };

            // Try to open immediately
            openVoiceflowChat();

            // Retry after a delay in case Voiceflow isn't fully loaded yet
            setTimeout(openVoiceflowChat, 500);
            setTimeout(openVoiceflowChat, 1500);
          }}
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
              style={{ ...navLinkStyle("Individuals"), cursor: "pointer" }}
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
                onClick={() => {
                  handleRegistrationClick("Doctor");
                  handleItemClick("Doctor");

                  // Open Voiceflow bot
                  if (window.voiceflow && window.voiceflow.chat) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened");
                  } else {
                    console.error("Voiceflow chat not available");
                    // Fallback - if the chat isn't loaded yet, try again in a moment
                    setTimeout(() => {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened on retry");
                      } else {
                        console.error(
                          "Voiceflow chat still not available after retry"
                        );
                      }
                    }, 1000);
                  }
                }}
                sx={menuItemStyles("Doctor")}
              >
                Register as a Doctor
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegistrationClick("Patient");
                  handleItemClick("Patient");

                  // Open Voiceflow bot
                  if (window.voiceflow && window.voiceflow.chat) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened");
                  } else {
                    console.error("Voiceflow chat not available");
                    // Fallback - if the chat isn't loaded yet, try again in a moment
                    setTimeout(() => {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened on retry");
                      } else {
                        console.error(
                          "Voiceflow chat still not available after retry"
                        );
                      }
                    }, 1000);
                  }
                }}
                sx={menuItemStyles("Patient")}
              >
                Register as a Patient
              </MenuItem>
            </Menu>
          </ListItem>

          {/* Organisations Dropdown in Drawer */}
          <ListItem>
            <span
              onClick={handleOrganisationsClick}
              style={{ ...navLinkStyle("Organisations"), cursor: "pointer" }}
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
                onClick={() => {
                  handleRegistrationClick("School");
                  handleItemClick("School");

                  // Open Voiceflow bot
                  if (window.voiceflow && window.voiceflow.chat) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened");
                  } else {
                    console.error("Voiceflow chat not available");
                    // Fallback - if the chat isn't loaded yet, try again in a moment
                    setTimeout(() => {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened on retry");
                      } else {
                        console.error(
                          "Voiceflow chat still not available after retry"
                        );
                      }
                    }, 1000);
                  }
                }}
                sx={menuItemStyles("School")}
              >
                Register as a School
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegistrationClick("Pharmacy");
                  handleItemClick("Pharmacy");

                  // Open Voiceflow bot
                  if (window.voiceflow && window.voiceflow.chat) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened");
                  } else {
                    console.error("Voiceflow chat not available");
                    // Fallback - if the chat isn't loaded yet, try again in a moment
                    setTimeout(() => {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened on retry");
                      } else {
                        console.error(
                          "Voiceflow chat still not available after retry"
                        );
                      }
                    }, 1000);
                  }
                }}
                sx={menuItemStyles("Pharmacy")}
              >
                Register as a Pharmacy
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleRegistrationClick("Laboratory");
                  handleItemClick("Laboratory");

                  // Open Voiceflow bot
                  if (window.voiceflow && window.voiceflow.chat) {
                    window.voiceflow.chat.open();
                    console.log("Voiceflow chat opened");
                  } else {
                    console.error("Voiceflow chat not available");
                    // Fallback - if the chat isn't loaded yet, try again in a moment
                    setTimeout(() => {
                      if (window.voiceflow && window.voiceflow.chat) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened on retry");
                      } else {
                        console.error(
                          "Voiceflow chat still not available after retry"
                        );
                      }
                    }, 1000);
                  }
                }}
                sx={menuItemStyles("Laboratory")}
              >
                Register as a Laboratory
              </MenuItem>
            </Menu>
          </ListItem>
          {/* Other Links in Drawer */}
          <ListItem>
            <Link
              to="/asset-finance-loans"
              style={{
                ...navLinkStyle("Finance Loans"),
                textDecoration: "none",
              }}
              onClick={() => handleItemClick("Finance Loans")}
            >
              Finance Loans
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/contact-us"
              style={{ ...navLinkStyle("Contact Us"), textDecoration: "none" }}
              onClick={() => handleItemClick("Contact Us")}
            >
              Contact Us
            </Link>
          </ListItem>

          {/* Chat With Keti in mobile menu */}
          <ListItem sx={{ marginTop: "20px" }}>
            <div
              onClick={() => {
                handleDrawerClose();

                // Function to open Voiceflow chat
                const openVoiceflowChat = () => {
                  try {
                    // Check if Voiceflow is loaded
                    if (window.voiceflow) {
                      // Try to open the chat widget using available methods
                      if (window.voiceflow.chat && window.voiceflow.chat.open) {
                        window.voiceflow.chat.open();
                        console.log("Voiceflow chat opened via open()");
                      } else if (
                        window.voiceflow.chat &&
                        window.voiceflow.chat.show
                      ) {
                        window.voiceflow.chat.show();
                        console.log("Voiceflow chat opened via show()");
                      } else if (window.voiceflow.show) {
                        window.voiceflow.show();
                        console.log("Voiceflow opened via show()");
                      } else {
                        // Fallback: Try to find and click the chat widget button
                        const chatButton = document.querySelector(
                          ".vfrc-launcher-button"
                        );
                        if (chatButton) {
                          chatButton.click();
                          console.log("Clicked Voiceflow launcher button");
                        } else {
                          console.error(
                            "No Voiceflow chat methods or button found"
                          );
                        }
                      }
                    } else {
                      console.error("Voiceflow not loaded");
                    }
                  } catch (err) {
                    console.error("Error opening Voiceflow chat:", err);
                  }
                };

                // Try to open immediately
                openVoiceflowChat();

                // Retry after a delay in case Voiceflow isn't fully loaded yet
                setTimeout(openVoiceflowChat, 500);
                setTimeout(openVoiceflowChat, 1500);
              }}
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

import React from "react";

const Statistics = () => {
  return (
    <div
      style={{
        width: "100%", // Span the entire screen width
        backgroundColor: "white", // Background color for the statistics section
        padding: "40px 20px", // Add padding for spacing
        boxSizing: "border-box", // Ensure padding is included in the width
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
          justifyContent: "space-around", // Distribute items evenly
          alignItems: "center",
          maxWidth: "1200px", // Optional: Limit the max width for better readability
          margin: "0 auto", // Center the container horizontally
          gap: { xs: "40px", sm: "20px" }, // Add gap between items
        }}
      >
        {/* Laboratories */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.54)", // Text color with 54% opacity
            }}
          >
            Laboratories
          </div>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "54px" }, // Responsive font size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black", // Number color
              marginTop: "8px", // Add spacing between text and number
            }}
          >
            211
          </div>
        </div>

        {/* Pharmacies */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.54)", // Text color with 54% opacity
            }}
          >
            Pharmacies
          </div>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "54px" }, // Responsive font size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black", // Number color
              marginTop: "8px", // Add spacing between text and number
            }}
          >
            96
          </div>
        </div>

        {/* Consultations */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.54)", // Text color with 54% opacity
            }}
          >
            Consultations
          </div>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "54px" }, // Responsive font size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black", // Number color
              marginTop: "8px", // Add spacing between text and number
            }}
          >
            4M<span style={{ color: "#7D0C75" }}>+</span>
          </div>
        </div>

        {/* Facilities */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.54)", // Text color with 54% opacity
            }}
          >
            Facilities
          </div>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "54px" }, // Responsive font size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black", // Number color
              marginTop: "8px", // Add spacing between text and number
            }}
          >
            1030
          </div>
        </div>

        {/* Doctors */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Geist",
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "rgba(0, 0, 0, 0.54)", // Text color with 54% opacity
            }}
          >
            Doctors
          </div>
          <div
            style={{
              fontFamily: "Bricolage Grotesque",
              fontWeight: 800,
              fontSize: { xs: "36px", sm: "54px" }, // Responsive font size
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "black", // Number color
              marginTop: "8px", // Add spacing between text and number
            }}
          >
            209
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

import React from "react";
import KetiImage from "../assets/images/ImageKTI.png";
import Statistics from "./Statistics";

const Display = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${KetiImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Changed from height to minHeight
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          marginTop: 0,
          paddingTop: 0,
          position: "relative",
          padding: "20px", // Added padding for small screens
        }}
      >
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%", // Ensure it takes full width
            maxWidth: "1200px", // Maximum content width
            padding: "0 20px", // Side padding for small screens
          }}
        >
          {/* Button with Stethoscope Icon */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "25px",
              border: "2px solid #800080",
              backgroundColor: "white",
              color: "#800080",
              fontSize: "clamp(14px, 3vw, 16px)", // Responsive font size
              cursor: "pointer",
              marginTop: "clamp(50px, 10vh, 100px)", // Responsive margin
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={12}
              height={12}
              color={"#800080"}
              fill={"none"}
            >
              <path
                d="M6.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V8C3.5 11.0376 5.96243 13.5 9 13.5C12.0376 13.5 14.5 11.0376 14.5 8V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 15.5V16.75C18.5 19.3734 16.3734 21.5 13.75 21.5C11.1266 21.5 9 19.3734 9 16.75V13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 2.5V4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 2.5V4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 13.5C20.5 14.6046 19.6046 15.5 18.5 15.5C17.3954 15.5 16.5 14.6046 16.5 13.5C16.5 12.3954 17.3954 11.5 18.5 11.5C19.6046 11.5 20.5 12.3954 20.5 13.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>Your AI Health Platform</span>
          </button>

          {/* Main Heading */}
          <h1
            style={{
              color: "white",
              fontSize: "clamp(32px, 6vw, 48px)", // Responsive font size
              margin: "0",
              lineHeight: "1.2",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              padding: "0 10px", // Added padding for small screens
            }}
          >
            Patients Deserve
            <br />
            Better Care Now
          </h1>

          {/* Sub Heading */}
          <p
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "10px auto",
              fontSize: "clamp(16px, 3vw, 18px)", // Responsive font size
              fontFamily: "'Geist', sans-serif",
              padding: "0 15px", // Added padding for small screens
            }}
          >
            Join a network that brings expert doctors, labs, and pharmacies to
            your facility—affordably and instantly.
          </p>

          {/* Access Expert Care Button */}
          <button
            onClick={() => {
              if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.open();
                console.log("Voiceflow chat opened");
              } else {
                console.error("Voiceflow chat not available");
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
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "clamp(12px, 3vw, 15px) clamp(20px, 4vw, 30px)", // Responsive padding
              borderRadius: "30px",
              backgroundColor: "#800080",
              color: "white",
              fontSize: "clamp(16px, 3vw, 18px)", // Responsive font size
              border: "none",
              cursor: "pointer",
              fontFamily: "'Geist', sans-serif",
              marginBottom: "20px", // Added bottom margin
            }}
          >
            <span>Access Expert Care Now</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "clamp(25px, 5vw, 30px)", // Responsive size
                height: "clamp(25px, 5vw, 30px)", // Responsive size
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                color={"#800080"}
                fill={"none"}
              >
                <path
                  d="M14 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Statistics />
      </div>
    </div>
  );
};

export default Display;

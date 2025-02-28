import React from "react";
import KETIAI1 from "../assets/images/KETIAI1.jpg"; // Adjust the path based on your file structure
import EQUIPMENT from "../assets/images/EQUIPMENT.jpg"; // Import the EQUIPMENT image
import KETIAI2 from "../assets/images/KETIAI2.jpg"; // Import the KETIAI2 image

const AssetFinanceLoans = () => {
  return (
    <div>
      {/* First div with background image */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${KETIAI1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#FFF",
          minHeight: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-100px", // Remove default margin to touch the top edge
          paddingTop: "40px", // Add padding to ensure content is not too close to the top
        }}
      >
        <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Asset Finance Loans
        </h1>
        <p style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Welcome to the Asset Finance Loans page. Here you can explore our loan
          options tailored for the healthcare industry.
        </p>
      </div>

      {/* Rest of the content */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div>
          <h2>
            Chil Femtech Center: Pioneering Financing Solutions For Africa's
            Healthcare Industry
          </h2>
          <p>
            Chil Femtech Center is a leading provider of financing solutions to
            the healthcare industry in Africa. With more than 5 years of
            experience, we help customers improve their clinical, operational,
            and financial outcomes by providing flexible offerings to meet their
            cash and technology needs.
          </p>
        </div>

        {/* Telemedicine Asset Finance Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#800080", // Purple background
            color: "#FFF", // White text
            padding: "20px",
            borderRadius: "10px",
            margin: "20px 0",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2>Telemedicine Asset Finance</h2>
            <p>
              Our partner health facilities can apply for loans of up to $15,000
              worth of telemedicine devices. We have partnerships with more than
              15 telemedicine device makers, and all these devices are
              compatible with our telemedicine AI chatbot, KETI.
            </p>
            <h3>Available Devices:</h3>
            <ul
              style={{
                listStyle: "disc", // Add bullets (disc style)
                padding: "0 0 0 20px", // Add left padding for the bullets
                textAlign: "left", // Align text to the left
                display: "block", // Ensure block display
              }}
            >
              <li>EKG monitors</li>
              <li>Digital thermometers</li>
              <li>Pulse oximeters</li>
              <li>Blood pressure monitors</li>
              <li>Spirometers</li>
              <li>Electrocardiogram (ECG) Monitors</li>
            </ul>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={EQUIPMENT}
              alt="Telemedicine Equipment"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Apply for a Telemedicine Asset Loan Section */}
        <div>
          <button
            style={{
              backgroundColor: "#800080", // Purple background
              color: "#FFF", // White text
              padding: "10px 20px",
              fontSize: "1.5rem", // Similar to h2 size
              fontWeight: "bold", // Make it bold like a heading
              border: "none",
              borderRadius: "25px", // More rounded corners
              margin: "20px 0",
              cursor: "pointer", // Add pointer cursor on hover
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow
            }}
            onClick={() => {
              // Scroll to the form when the button is clicked
              document
                .querySelector("form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Apply for a Telemedicine Asset Loan
          </button>
        </div>

        {/* Form Section with Purple Background and Image */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#800080", // Purple background
            color: "#FFF", // White text
            padding: "20px",
            borderRadius: "10px",
            margin: "20px 0",
          }}
        >
          {/* Form */}
          <div style={{ flex: 1, padding: "20px" }}>
            <h2>Apply for a Telemedicine Asset Loan</h2>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="tel"
                placeholder="Phone"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="text"
                placeholder="Facility Name"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="file"
                placeholder="Financial Report"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="file"
                placeholder="License"
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <textarea
                placeholder="Write Your Message Here..."
                style={{
                  margin: "10px",
                  padding: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  height: "100px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                type="submit"
                style={{
                  margin: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#A020F0",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Image */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={KETIAI2}
              alt="Telemedicine AI"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Our Impact in 2023 Section */}
      </div>
    </div>
  );
};

export default AssetFinanceLoans;

import React from "react";
import KETIIMAGE1 from "../assets/images/KETIIMAGE1.jpg";
import KETIIMAGE2 from "../assets/images/KETIMAGE2.jpg";
import KETIIMAGE3 from "../assets/images/KETIMAGE3.jpg";

const ImageWithButton = ({ title, paragraph, buttonText, imageUrl, link }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`, // Set image as background
        backgroundSize: "cover", // Cover the div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // No repeating
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        textAlign: "center",
        width: "300px",
        height: "350px", // Increased height for better coverage
        position: "relative",
        color: "white", // Make text readable
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // Spreads title, paragraph, and button evenly
        backdropFilter: "blur(5px)", // Optional blur for better readability
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Better visibility
        }}
      >
        {title}
      </h2>

      {/* Paragraph */}
      <p
        style={{
          fontSize: "14px",
          fontWeight: "500",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Improves readability
        }}
      >
        {paragraph}
      </p>

      {/* Button as Clickable Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          color: "#fff",
          fontWeight: "bold",
          background: "rgba(0, 0, 0, 0.6)", // Semi-transparent button
          padding: "8px 12px",
          borderRadius: "5px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "24px", height: "24px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        {buttonText}
      </a>
    </div>
  );
};

const App = () => {
  const sections = [
    {
      title: "INDIVIDUALS",
      paragraph: "We offer personalized care to every individual",
      buttonText: "Get Care Now",
      imageUrl: KETIIMAGE1,
      link: "#", // Add the actual URL
    },
    {
      title: "ORGANIZATIONS",
      paragraph: "Anywhere you are, We Find You",
      buttonText: "Ways We Help",
      imageUrl: KETIIMAGE2,
      link: "#",
    },
    {
      title: "CLINICIANS",
      paragraph: "Quality Care starts here",
      buttonText: "Join the Team",
      imageUrl: KETIIMAGE3,
      link: "#",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        flexWrap: "wrap",
      }}
    >
      {sections.map((section, index) => (
        <ImageWithButton
          key={index}
          title={section.title}
          paragraph={section.paragraph}
          buttonText={section.buttonText}
          imageUrl={section.imageUrl}
          link={section.link}
        />
      ))}
    </div>
  );
};

export default App;

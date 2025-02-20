import React from "react";
import Navbar from "./components/NavBar";
import OvalButton from "./components/OvalButton";
import Information from "./components/Information"; // Import the Information component

const App = () => {
  return (
    <div className="min-h-screen">
      <div
        className="bg-section relative"
        style={{
          backgroundImage: `url(/src/assets/images/AITELE.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "460px", // Increased height
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "60px", // Extra space below
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl md:text-3xl font-semibold drop-shadow-lg">
            Pushing The Boundaries of Telemedicine
          </div>
          <OvalButton
            variant="outline"
            className="mt-4"
            onClick={() => {
              console.log("Button clicked");
              // window.location.href = "https://keti-ai.com";
            }}
          >
            Visit KETI AI
          </OvalButton>
        </div>
      </div>
      <Navbar />
      {/* Add the Information component here */}
      <div className="container mx-auto p-4">
        <Information />
      </div>
    </div>
  );
};

export default App;

// Create a VoiceflowWidget.jsx component
import { useEffect } from "react";

function VoiceflowWidget() {
  useEffect(() => {
    // Only add the script if it doesn't exist
    if (!document.getElementById("voiceflow-script")) {
      const script = document.createElement("script");
      script.id = "voiceflow-script";
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: "67d2dac11171f4701370999b" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        });
      };

      document.body.appendChild(script);
    }

    // Cleanup function to prevent multiple instances
    return () => {
      // Only for development - in production you might want to keep it around
      const existingScript = document.getElementById("voiceflow-script");
      if (existingScript) {
        // Instead of removing, just ensure we don't reinitialize
        // existingScript.remove();
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return null; // This component doesn't render anything visible
}

export default VoiceflowWidget;

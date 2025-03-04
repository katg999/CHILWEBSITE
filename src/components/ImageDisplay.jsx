import React from "react";
import { Box, CardMedia } from "@mui/material";
import frameImage from "../assets/images/Frame.png"; // Import the image

const ImageDisplay = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4} width="100%">
      <CardMedia
        component="img"
        image={frameImage}
        alt="Frame"
        sx={{
          width: { xs: "100%", sm: "90%", md: "85%", lg: "80%" }, // Larger content
          maxWidth: 1200, // Increased max width for bigger screens
          height: "auto", // Maintain aspect ratio
        }}
      />
    </Box>
  );
};

export default ImageDisplay;

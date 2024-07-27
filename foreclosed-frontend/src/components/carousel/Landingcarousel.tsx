import React, { useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg"; // Add more images as needed
import { Box, Card, IconButton } from "@mui/joy";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  { src: slide1, alt: "Slide 1" },
  { src: slide2, alt: "Slide 2" },
  // Add more slides here
];

export default function Landingcarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "47.5vw" },
        height: "400px",
        mt: { xs: 4, md: 0 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            sx={{
              width: "100%",
              maxHeight: "100%",
              objectFit: "contain", // Adjust to 'cover' if you want to cover the entire space
            }}
          />
        </Box>
        <IconButton
          sx={{
            position: "absolute",
            left: 16,
            zIndex: 1,
            bottom: 152,
            color: "white",
          }}
          onClick={handlePrevious}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            right: 16,
            zIndex: 1,
            bottom: 152,
            color: "white",
          }}
          onClick={handleNext}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}

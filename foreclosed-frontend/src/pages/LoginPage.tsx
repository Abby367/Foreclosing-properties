import React, { useState } from "react";
import { Box } from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";
import Loginbox from "../components/Box/Loginbox";
import Signupbox from "../components/Box/Signupbox"; // Import the Signupbox component

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

  return (
    <Box
      sx={{
        backgroundColor: "#F5F6F8",
        overflowY: "scroll !important",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar-thumb": {
          display: "none",
        },
        overflow: "hidden",
        height: {
          xs: "100vh",
          md: "100%",
          lg: "98.2vh",
        },
        width: { xs: "100%", md: "100%", lg: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CircleIcon
          sx={{
            fontSize: "600px",
            color: "#E3EFFB",
            position: "fixed",
            top: "-212px",
            right: "-50px",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CircleIcon
          sx={{
            fontSize: "600px",
            color: "#E3EFFB",
            position: "fixed",
            bottom: "-212px",
            left: "-200px",
          }}
        />
      </Box>
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSignUp ? (
          <Signupbox setIsSignUp={setIsSignUp} /> // Show Signupbox if isSignUp is true
        ) : (
          <Loginbox setIsSignUp={setIsSignUp} /> // Show Loginbox if isSignUp is false
        )}
      </Box>
    </Box>
  );
};

export default LoginPage;

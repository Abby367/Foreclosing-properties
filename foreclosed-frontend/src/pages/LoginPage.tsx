import React from "react";
import { Box } from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";
import Loginbox from "../components/Box/Loginbox";

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative", // Adjusted position to relative
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
          zIndex: 1, // Ensure Loginbox is above the icons
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loginbox />
      </Box>
    </Box>
  );
};

export default LoginPage;

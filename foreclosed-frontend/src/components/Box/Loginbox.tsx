import React from "react";
import Landingcarousel from "../carousel/Landingcarousel";
import { Box, Input, Button, Typography } from "@mui/joy";
import Logo from "../../assets/Logo.png";
export default function Loginbox() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        border: "1px solid red",
        width: 350,
        height: 400,
        p: 4,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid blue",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 300,
          height: 300,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>
          {" "}
          <img width={250} src={Logo} alt="Logo" />
        </Box>
        <Box>
          <Input
            placeholder="Username"
            sx={{
              width: "100%",
              maxWidth: "350px",
              textAlign: "center",
              height: "45px",
              borderRadius: "5px",
              borderColor: "#0B6BCB",
              backgroundColor: "#E3EFFB",
              color: "#0B6BCB",
              fontWeight: "bold",
            }}
          />
        </Box>
        <Box>
          <Input
            placeholder="Password"
            sx={{
              width: "100%",
              maxWidth: "350px",
              height: "45px",
              borderRadius: "5px",
              borderColor: "#0B6BCB",
              backgroundColor: "#E3EFFB",
              color: "#0B6BCB",
              fontWeight: "bold",
            }}
          />
        </Box>
        <Box>
          <Button color="primary" fullWidth sx={{ mt: 2, bgcolor: "#007FFF" }}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

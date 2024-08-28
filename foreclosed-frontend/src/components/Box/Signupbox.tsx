import React, { useState, Dispatch, SetStateAction } from "react";
import { Box, Input, Button, Typography, Link } from "@mui/joy";
interface AuthBoxProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}
export default function Signupbox({ setIsSignUp }: AuthBoxProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        width: 1500,
        height: 450,
        p: 4,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 300,
          height: 350,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{ fontSize: "18px", color: "#007FFF", fontWeight: "700" }}
          >
            Create your account
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "75%",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: username ? "10px" : "0%",
              zIndex: 1000,
              left: "12px",
              color: username ? "#0B6BCB" : "#aaa",
              fontSize: username ? "11px" : "11px",
              transition: "all 0.2s ease-out",
              transform: username ? "translateY(-50%)" : "translateY(50%)",
            }}
          >
            Username
          </Typography>
          <Input
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              width: "100%",
              height: "25px",
              borderRadius: "5px",
              borderColor: "#0B6BCB",
              backgroundColor: "#E3EFFB",
              paddingTop: "10px",
              fontSize: "11px",

              "&::placeholder": {
                color: "transparent",
              },
              "&:focus + .MuiTypography-root": {
                color: "#0B6BCB",
                fontSize: "11px",
                top: "-10px",
                transform: "translateY(0)",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "75%",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: email ? "10px" : "0%",
              zIndex: 1000,
              left: "12px",
              color: email ? "#0B6BCB" : "#aaa",
              fontSize: email ? "11px" : "11px",
              transition: "all 0.2s ease-out",
              transform: email ? "translateY(-50%)" : "translateY(50%)",
            }}
          >
            Email
          </Typography>
          <Input
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "100%",
              height: "25px",
              borderRadius: "5px",
              borderColor: "#0B6BCB",
              backgroundColor: "#E3EFFB",
              paddingTop: "10px",
              fontSize: "11px",

              "&::placeholder": {
                color: "transparent",
              },
              "&:focus + .MuiTypography-root": {
                color: "#0B6BCB",
                fontSize: "11px",
                top: "-10px",
                transform: "translateY(0)",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "75%",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: password ? "10px" : "0%",
              zIndex: 1000,
              left: "12px",
              color: password ? "#0B6BCB" : "#aaa",
              fontSize: password ? "11px" : "11px",
              transition: "all 0.2s ease-out",
              transform: password ? "translateY(-50%)" : "translateY(50%)",
            }}
          >
            Password
          </Typography>
          <Input
            placeholder=" "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "100%",
              height: "25px",
              borderRadius: "5px",
              borderColor: "#0B6BCB",
              backgroundColor: "#E3EFFB",
              fontSize: "11px",
              paddingTop: "10px",

              "&::placeholder": {
                color: "transparent",
              },
              "&:focus + .MuiTypography-root": {
                color: "#0B6BCB",
                fontSize: "11px",
                top: "-10px",
                transform: "translateY(0)",
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", width: "75%" }}>
          <Button color="primary" fullWidth sx={{ bgcolor: "#007FFF" }}>
            Sign Up
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ fontSize: "12px", color: "gray", fontWeight: "700" }}
          >
            Already have an account? &nbsp;
          </Typography>
          <Link
            sx={{ fontSize: "12px", color: "black", fontWeight: "700" }}
            onClick={() => setIsSignUp(false)} // Toggle back to login when clicked
          >
            {" "}
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

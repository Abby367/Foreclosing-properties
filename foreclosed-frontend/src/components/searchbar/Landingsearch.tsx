import React from "react";
import Landingcarousel from "../carousel/Landingcarousel";
import { Box, Typography, Input, Stack } from "@mui/joy";
import { Search } from "@mui/icons-material";
import { display } from "@mui/system";

export default function Landingsearch() {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <Box
        sx={{
          mt: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "610px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "380px", lg: "535px" },
          }}
        >
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontWeight: "bold",
              fontSize: { xs: "32px", md: "32px", lg: "64px" },
            }}
          >
            The better way to buy{" "}
            <Typography component="span" sx={{ color: "#007FFF" }}>
              real estate
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            textAlign: "center",
            width: { sx: "100%", md: "380px" },
          }}
        >
          <Typography level="body-sm" fontWeight="500" component="p">
            Smart Investing Starts with Pag-IBIG: Your Path to Affordable
            Homeownership
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sx: "100%", md: "380px" },
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search"
            startDecorator={<Search sx={{ color: "#0B6BCB" }} />}
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
      </Box>
      <Box
        sx={{
          width: "650px",
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Landingcarousel />
      </Box>
    </Stack>
  );
}

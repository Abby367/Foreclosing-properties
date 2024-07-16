import React from "react";
import slide1 from "../../assets/slide1.png";
import { Box, Typography, Button, Input, Stack } from '@mui/joy';


export default function Landingcarousel() {
    return (
        <Box sx={{   width: { xs: '100%', md: '47.5vw'},height:{xs:'100%', md:'30vh'}, mt: { xs: 4, md: 0 } }}>
        <img width={'80%'} height={"300px"} src={slide1} alt="Logo"/> 
        </Box>

    );
}

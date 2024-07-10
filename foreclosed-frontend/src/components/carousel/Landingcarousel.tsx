import React from "react";
import Logo from "../../assets/Logo.png";
import { Box, Typography, Button, Input, Stack } from '@mui/joy';


export default function Landingcarousel() {
    return (
        <Box sx={{  backgroundColor:'blue',  width: { xs: '100%', md: '47.5vw'},height:{xs:'100%', md:'33vh'}, mt: { xs: 4, md: 0 } }}>
        <img width={'100%'} src={Logo} alt="Logo"/> 
        </Box>

    );
}

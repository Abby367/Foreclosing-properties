import React from "react";
import Landingcarousel from "../carousel/Landingcarousel";
import { Box, Typography, Input } from '@mui/joy';
import { Search } from "@mui/icons-material";

export default function Landingsearch() {
  return (
    <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'row', gap:'130px',flexWrap: 'wrap' ,width:{xs:'100vw', md:'100vw', justifyContent:'center'}}}>
      <Box 
        sx={{ 
          width: { xs: '100vw', md: '40vw' }, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' }, // Align center on small screens
          textAlign: {  xs: 'center', md: 'left' } // Center text on small screens
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '80%' } }}>
          <Typography
            fontWeight="bold"
            component="h1"
            sx={{
              width: { xs: '90%' }, 
              fontSize: { xs: '32px', md: '48px' }
            }}
          >
            The better way to buy <Typography component="span" sx={{ color: '#007FFF' }}>real estate</Typography>
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '80%' } }}>
          <Typography level="body-sm" fontWeight="500" component="p" sx={{ mt: 2, width: { md: '380px' } }}>
            Smart Investing Starts with Pag-IBIG: Your Path to Affordable Homeownership
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 4, width: { xs: '100%', md: '80%' }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Input
            placeholder="Search"
            startDecorator={<Search sx={{ color: '#0B6BCB' }} />}
            sx={{
              width: '100%',
              maxWidth: '300px',
              height: '45px',
              borderRadius: '5px',
              borderColor: '#0B6BCB',
              backgroundColor: '#E3EFFB',
              color: '#0B6BCB',
              fontWeight: 'bold'
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '45%',
          display: { xs: 'none', md: 'flex' }, 
        }}
      >
        <Landingcarousel />
      </Box>
    </Box>
  );
}

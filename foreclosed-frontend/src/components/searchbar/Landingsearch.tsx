import React from "react";
import Landingcarousel from "../carousel/Landingcarousel";
import { Box, Typography, Button, Input } from '@mui/joy';

export default function Landingsearch() {
  return (
    <Box sx={{ marginTop: 4, width: '95vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap:'20px' }}>
      <Box sx={{ width: { xs: '100%', md: '40vw'}}}>
        <Box sx={{width: { xs: '100%', md: '50%'}}}>
        <Typography
            level="h1"
            fontWeight="bold"
            component="h1"
            sx={{
                width: { xs: '100%', md: '293px'}
             
            }}
          >
            The better way to buy <Typography component="span" sx={{ color: '#007FFF' }}>real estate</Typography>
          </Typography>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Typography level="body-sm" fontWeight="500" component="p" sx={{ mt: 2 ,width: { xs: '100%', md: '293px'}}}>
            Smart Investing Starts with Pag-IBIG: Your Path to Affordable Homeownership
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
          <Input placeholder="Search" sx={{ width: '300px', mr: 2 }} />
          <Button variant="solid">Search</Button>
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '47.40vw'},height:{xs:'100%', md:'50vh'}, mt: { xs: 4, md: 0 } }}>
        <Landingcarousel />
      </Box>
    </Box>
  );
}

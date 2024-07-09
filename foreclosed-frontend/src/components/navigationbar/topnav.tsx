import React from "react";
import Logo from "../../assets/Logo.png";
import { Box, Typography, Button, Link, Stack } from '@mui/joy';

export default function TopNav() {
  return (

    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, bgcolor: 'background.level1' }}>
      <img width={150} src={Logo} alt="Logo"/> 
    
    <Stack direction="row" spacing={2}>
      <Link href="#" fontWeight={"bold"} color="neutral" underline="none">Home</Link>
      <Link href="#" fontWeight={"bold"} color="neutral" underline="none">Properties for sale</Link>
      <Link href="#" fontWeight={"bold"} color="neutral" underline="none">About Us</Link>
      <Link href="#" fontWeight={"bold"} color="neutral" underline="none">FAQs</Link>
      <Button variant="solid">Login</Button>
    </Stack>
  </Box>
  );
}

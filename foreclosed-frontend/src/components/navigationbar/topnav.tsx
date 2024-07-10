import React from "react";
import Logo from "../../assets/Logo.png";
import { Box, Button, Link, Stack } from '@mui/joy';

export default function TopNav() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, bgcolor: 'white',  width:'100vw'}}>
      <img width={150} src={Logo} alt="Logo"/> 
    
      <Stack direction="row" spacing={4} marginRight={"20px"}>
        <Link 
          href="#" 
          fontWeight="bold" 
          color="neutral" 
          underline="none"
          sx={{ 
            '&:hover': { 
              color: '#007FFF' 
            }
          }}
        >
          Home
        </Link>
        <Link 
          href="#" 
          fontWeight="bold" 
          color="neutral" 
          underline="none"
          sx={{ 
            '&:hover': { 
              color: '#007FFF' 
            }
          }}
        >
          Properties for sale
        </Link>
        <Link 
          href="#" 
          fontWeight="bold" 
          color="neutral" 
          underline="none"
          sx={{ 
            '&:hover': { 
              color: '#007FFF' 
            }
          }}
        >
          About Us
        </Link>
        <Link 
          href="#" 
          fontWeight="bold" 
          color="neutral" 
          underline="none"
          sx={{ 
            bgcolor: 'white', 
            borderRadius: 1, 
            p: 1,
            '&:hover': { 
              color: '#007FFF', 
            }
          }}
        >
          FAQs
        </Link>
        <Button 
          variant="solid"
          sx={{ 
            bgcolor:'#007FFF',
            width:'120px',
            '&:hover': { 
              bgcolor: 'primary.dark' 
            } 
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}

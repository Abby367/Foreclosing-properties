import React from "react";
import { Box, Typography, Input, Stack, MenuButton,IconButton,Dropdown } from "@mui/joy";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { display } from "@mui/system";

export default function Findbox() {
  return (
    <Stack direction={"column"} justifyContent={"center"} height={450} >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column",}}
      >
        <Typography fontSize={40}>Find Your Dream Property</Typography>
        <Typography fontSize={20}>
          We offer modern properties with the best quality that meet all your
          needs.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" , justifyContent:"space-around", marginTop:"100px"}}>
        <Box sx={{ flexDirection: "column", alignItems: "center",display: "flex", }}>
          <Typography fontSize={20} sx={{color:"#8C8C8C"}}>Looking For</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Dropdown >
          <Typography fontSize={20} >Buy</Typography>
          <MenuButton
        slots={{ root: IconButton }}
        
      >
        <KeyboardArrowDownIcon sx={{color:"#007FFF"}} />
      </MenuButton>
          
          </Dropdown>
          </Box>
        </Box>
        <Box sx={{ flexDirection: "column", alignItems: "center",display: "flex", }}>
          <Typography fontSize={20} sx={{color:"#8C8C8C"}}>Location</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Dropdown >
          <Typography fontSize={20} >Buy</Typography>
          <MenuButton
        slots={{ root: IconButton }}
        
      >
        <KeyboardArrowDownIcon sx={{color:"#007FFF"}} />
      </MenuButton>
          
          </Dropdown>
          </Box>
        </Box>
        <Box sx={{ flexDirection: "column", alignItems: "center",display: "flex", }}>
          <Typography fontSize={20} sx={{color:"#8C8C8C"}}>Property Type</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Dropdown >
          <Typography fontSize={20} >Buy</Typography>
          <MenuButton
        slots={{ root: IconButton }}
        
      >
        <KeyboardArrowDownIcon sx={{color:"#007FFF"}} />
      </MenuButton>
          
          </Dropdown>
          </Box>
        </Box>
        <Box sx={{ flexDirection: "column", alignItems: "center",display: "flex", }}>
          <Typography fontSize={20} sx={{color:"#8C8C8C"}}>Bedrooms</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Dropdown >
          <Typography fontSize={20} >Buy</Typography>
          <MenuButton
        slots={{ root: IconButton }}
        
      >
        <KeyboardArrowDownIcon sx={{color:"#007FFF"}} />
      </MenuButton>
          
          </Dropdown>
          </Box>
        </Box>
        <Box sx={{ flexDirection: "column", alignItems: "center",display: "flex", }}>
          <Typography fontSize={20} sx={{color:"#8C8C8C"}}>Budget</Typography>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <Dropdown >
          <Typography fontSize={20} >Buy</Typography>
          <MenuButton
        slots={{ root: IconButton }}
        
      >
        <KeyboardArrowDownIcon sx={{color:"#007FFF"}} />
      </MenuButton>
          
          </Dropdown>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

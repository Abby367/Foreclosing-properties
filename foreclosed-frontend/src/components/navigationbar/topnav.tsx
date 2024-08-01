import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {
  Box,
  Button,
  Link,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Link
        href="#"
        fontWeight="bold"
        color="neutral"
        underline="none"
        sx={{
          "&:hover": {
            color: "#007FFF",
          },
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
          "&:hover": {
            color: "#007FFF",
          },
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
          "&:hover": {
            color: "#007FFF",
          },
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
          bgcolor: "white",
          borderRadius: 1,
          p: 1,
          "&:hover": {
            color: "#007FFF",
          },
        }}
      >
        FAQs
      </Link>
      <Button
        variant="solid"
        component={RouterLink}
        to="/login"
        sx={{
          bgcolor: "#007FFF",
          width: "120px",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Login
      </Button>
    </>
  );

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          width: "95%",
        }}
      >
        <img width={120} src={Logo} alt="Logo" />

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={4}>
            {menuItems}
          </Stack>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#007FFF" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <List>
            <ListItem>
              <Link
                href="#"
                fontWeight="bold"
                color="neutral"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#007FFF",
                  },
                }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                fontWeight="bold"
                color="neutral"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#007FFF",
                  },
                }}
              >
                Properties for sale
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                fontWeight="bold"
                color="neutral"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#007FFF",
                  },
                }}
              >
                About Us
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                fontWeight="bold"
                color="neutral"
                underline="none"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  p: 1,
                  "&:hover": {
                    color: "#007FFF",
                  },
                }}
              >
                FAQs
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="solid"
                component={RouterLink}
                to="/login"
                sx={{
                  bgcolor: "#007FFF",
                  width: "100%",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                Login
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

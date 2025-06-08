import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorMode } from "../context/ThemeContext";
import ThemeToggleTwoIcons from "../context/ThemeSwitch";

const navItems = ["Home", "About", "Services", "Contact"];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("");
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      <AppBar
        position="fixed"
        sx={(theme) => ({
          color: mode === "dark" ? "#fff" : "#000",
          background:
            mode === "dark"
              ? theme.palette.background.paper // black by default in dark mode
              : `linear-gradient(to bottom,
          #87ceeb 0%, 
          #dbefff 5%, 
          #ffffff 0%, 
          #dbefff 25%, 
          #87ceeb 75%)`,
          transition: "background 0.3s ease",
        })}
        elevation={0}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 56, sm: 64 },
          }}
        >
          <Typography variant="h4" component="div" fontWeight="bold" noWrap>
            Weather
          </Typography>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => setActive(item)}
                color="inherit"
                disableRipple
                sx={{
                  borderBottom: active === item ? "2px solid white" : "none",
                  borderRadius: 0,
                  paddingBottom: "4px",
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                  },
                }}
              >
                {item}
              </Button>
            ))}
            {/* <Button variant="contained" color="primary" disableElevation>
              Sign Up
            </Button> */}
          </Box>
          <ThemeToggleTwoIcons />
          {/* <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton> */}
          {/* Mobile Nav Toggle */}
          <IconButton
            aria-label="open navigation menu"
            edge="end"
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 240, mt: 2 }}>
          <List>
            {navItems.map((text) => (
              <ListItemButton key={text} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
            <ListItemButton onClick={() => setDrawerOpen(false)} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
              >
                Sign Up
              </Button>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Extra space below AppBar */}
      <Toolbar />
    </>
  );
}
export default Navbar;

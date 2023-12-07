import React from "react";

import { useLocation } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import { useTheme } from '../components/context/ThemeContext';

import MuiSwitch from '../components/buttons/muiswitch';

const drawerWidth = 240;

const Header = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const path = location.pathname;

  const { darkTheme, toggleTheme } = useTheme();

  const getTitleFromPath = (path) => {
    const parts = path.split("/");
    const rawTitle = parts[parts.length - 1];
    return rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
  };

  const title = getTitleFromPath(path);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <MuiSwitch sx={{ mr: 2 }} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Material UI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

  const nav = useNavigate();

  function handleClick() {
    nav('/login');
  }
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    nav('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a className="Logo" href="/">Birac Jan Care</a>
          </Typography>
          {!localStorage.getItem('authToken') ? (
            <Button onClick={handleClick} color="inherit">Login</Button>
            ) : (
            <Button onClick={handleLogout} color="inherit">Logout</Button>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

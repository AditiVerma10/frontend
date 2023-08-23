import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { blueGrey} from '@mui/material/colors';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#455a64'}}>
        <Toolbar>
        <NavLink to='/'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon sx={{color:'#cfd8dc'}}/>
          </IconButton>
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"#cfd8dc" }}>
            QUIZ APP
          </Typography>
          <NavLink to='/login'><Button sx={{color:'#cfd8dc',variant:"outlined"}}>LOGIN</Button></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
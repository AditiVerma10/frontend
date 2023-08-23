import React from 'react'
import { Header } from '../../shared/component/Header'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ansoperation } from '../../shared/services/ansOperation';
export const Home = () => {
  ansoperation.initialize()
    return(
  <div>
    <Header />
    <Box align="center">
      <h1 style={{color:"#37474f"}}>Welcome Quizzers</h1>
      <NavLink to='/genere'><Button variant="contained" sx={{backgroundColor:'#78909c'}} size='large'>Get Started <PlayArrowIcon /></Button></NavLink>
    </Box>
  </div>
)
}


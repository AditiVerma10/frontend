import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Header } from '../../shared/component/Header'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';

export const Diffficulty = () => {
    const param=useParams()
    const path=`/quiz/${param.genere.toLowerCase()}`
  return (
    <div>
        <Stack spacing={{ sm:5}} direction="column" useFlexGap flexWrap="wrap">
        <Header/>
        <h1>{param.genere.toUpperCase()}</h1>
        <Grid container spacing={1} direction="column"justifyContent="center"alignItems="center" gap={2} >
  <Grid>
    <NavLink to={path+'/easy'}><Button sx={{width:500,height:60,backgroundColor:'#1b5e20'}} size="large" variant="contained">Easy</Button></NavLink>
  </Grid>
  <Grid>
    <NavLink to={path+'/medium'}><Button sx={{width:500,height:60,backgroundColor:'#1a237e'}} size="large" variant="contained">Medium</Button></NavLink>
  </Grid>
  <Grid>
    <NavLink to={path+'/hard'}><Button sx={{width:500,height:60,backgroundColor:'#bf360c'}} size="large" variant="contained">Hard</Button></NavLink>
  </Grid>
</Grid>
        </Stack>
    </div>
  )
}

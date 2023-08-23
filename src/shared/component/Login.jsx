import React, { useRef } from 'react'

import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { apiClient } from '../../module/services/apicall';


export const Login = () => {
     const userNameRef=useRef()
     const passwordRef=useRef()
    const path=`/home/${userNameRef}`


    // const doLogin=async ()=> {
    //   const userInfo={
    //     'username':userNameRef.current.value,
    //     'password':passwordRef.current.value

    //   }
    //   try{
    //     const response= await apiClient.post('localhost:1234/login',userInfo);
    //     console.log('response is',response)
    //     console.log('userInfo',userInfo)
    //   }
    //   catch(err){
    //     throw err
    
      
    //   }
      
   
  
    
    // }
  
  return (
    <div>
        <Header/>
        
          
        
        <Box align='center' sx={{mt:5}}>
        <Stack
      component="form"
      sx={{
        width: '25ch',
        
      }}
      spacing={1}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        inputRef={userNameRef}
        defaultValue="Username"
        variant="filled"
        size="small"
        sx={{backgroundColor:'#cfd8dc'}}
        
      
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        inputRef={passwordRef}
        type='password'
        defaultValue="Password"
        variant="filled"
        sx={{backgroundColor:'#cfd8dc'}}
        
        />
       </Stack>
       </Box>
        <Box align='center'>
        <Button  variant="contained" sx={{color:'#1a237e', mt:2}}>login</Button>
        </Box>
      
        
      
        
    </div>
  )
    }

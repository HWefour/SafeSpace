import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../components/Navbar.css'
import BasicModal from './BasicModal';
import {useState } from "react";

export default function ButtonAppBar() {

  const [displayModal , setDisplayModal]= useState(false)

  const handleClickModal = ()=> {
    setDisplayModal(!displayModal)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
          
          <img src='src/assets/logo.png' className='image_wrapper'/>
          <Button color="inherit" onClick={handleClickModal}>Login</Button>
        </Toolbar>
      </AppBar>
      {displayModal && (
        <BasicModal/>
      )}
    </Box>
  );
}

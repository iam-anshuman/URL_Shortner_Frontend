import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Send } from '@mui/icons-material';

function HeroItem() {
  return (
    <>
      <Box sx={{mt:12,mx:10,px:5,textAlign:'center'}}>
        <Typography variant='h4' color="#9EC8B9">
             MINI-URL : The WebApp for shorting long URLs. 
        </Typography>
        <Typography color='#9EC8B9' variant='body1'>The world's best URL Shortner service for you brand, analyze and short url</Typography>
        <Button sx={{mt:5,mx:1}} variant="contained">
            Sign Up
        </Button>
        <Button sx={{mt:5,mx:1}} variant="outlined">
            Login 
        </Button>
        </Box>
    </>
  )
}

export default HeroItem;
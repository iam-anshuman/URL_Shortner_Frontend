import React from 'react';
import { Typography,  Box, createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

const RobotoFont = createTheme({
  typography:[
    'Roboto','sans-serif' 
  ].join(","),
});

function HeroItem() {
  return (
    <>
    <ThemeProvider theme={RobotoFont}>
      <Box sx={{mt:20,mx:{sm:10,xs:0},px:5,textAlign:'center'}} >
        <Typography variant='h4' fontSize={"60px"} color="#9EC8B9" fontWeight={800} lineHeight={"90.015px" } sx={{background:"linear-gradient(90deg, #144EE3 -0.02%, #EB568E 18.86%, #A353AA 64.49%, #144EE3 100.67%)",backgroundClip:"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}>
             Shorten Your Loooooong Links :) 
        </Typography>
        <Typography sx={{color: "#C9CED6",
              textAlign: "center",
              fontFamily: "roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "23.5px"
            }} variant='subtitle1'>Mini-URL is an efficient and easy-to-use URL shortening service that streamlines your online experience.</Typography>
       </Box>
       </ThemeProvider>
    </>
  )
}

export default HeroItem;
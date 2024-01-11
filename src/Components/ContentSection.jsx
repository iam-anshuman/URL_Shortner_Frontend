import React from 'react';
import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import {Link} from "@mui/icons-material";


function ContentSection() {
  return (
    <Container>
    <Box sx={{mt:5,fontFamily:"ubuntu, sans-serif"}}>
        <Grid spacing={2} justifyContent={"space-evenly"} container>
            <Grid  lg={12} item>
                <Typography variant='h3' fontWeight={"bold"} textAlign={"center"}>What is <Box sx={{color:"#3AD670",display:"inline",fontStyle:"italic"}}>Mini-URL?</Box></Typography>
                <Typography sx={{my:3}} variant='body1' textAlign={"center"}>Mini-URL is an all-in-one Link Management Platform for all your links and needs. It is an advanced URL Shortener with extensive Link Analytics. Mini-URL offers solutions that will allow you to manage your links, thanks to which you can develop your business while having your links under control. Mini-URL is also a platform for creating your own Link in bio microsites and generating QR Codes, so you can combine offline and online solutions.</Typography>    
            </Grid>

            <Grid lg={6} sx={{backgroundColor:"white", color:"black", borderRadius:"15px"}} item>
                <Typography variant='h3' textAlign='center'><Link sx={{fontSize:"3rem", transform:"rotate(130deg)"}}/>URL Shortner</Typography>
                <Typography sx={{my:3,px:2}} variant='body1' textAlign={"center"}>Mini-URL is a URL Shortener and Link Management Platform. It offers a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links.</Typography>
                <Box component={"img"} sx={{
                    height: 500,
                    width: 300,
                    maxHeight: { xs: 400, md: "400px" },
                    maxWidth: { xs: 350, md: "350px" },
                    borderRadius:"12px",
                    mx:15,mt:5,
                }} alt='Phone image' src='../src/Assets/Mobile_Phone.jpg'/>
            </Grid>
            
            <Grid lg={6} sx={{backgroundColor:"blue"}} container>
                <Grid sx={{backgroundColor:"beige"}} xs={12}>2.1</Grid>
                <Grid sx={{backgroundColor:"beige"}} xs={12}>2.2</Grid>
            </Grid>

        </Grid>
    </Box>
    </Container>
  )
}

export default ContentSection
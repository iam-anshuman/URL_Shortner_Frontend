import React from 'react';
import { Box,Grid, Typography,Stack, Paper } from '@mui/material';
import {Link as LinkIcon ,Assessment,Person2Outlined,QrCode} from "@mui/icons-material";

function ContentSection() {
  return (<>
    <Stack>
        <Box sx={{fontFamily:"Roboto, sans-serif"}}>
            <Typography variant='h3' textAlign={"center"} sx={{mt:10,fontWeight:"bold"}}>What is <Box sx={{fontStyle:"italic",display:"inline",color:"#3bd671"}}>Mini-URL?</Box></Typography>
            <Typography variant='body1' textAlign={"center"} sx={{my:4}}>Mini-URL is an all-in-one Link Management Platform for all your links and needs. It is an advanced URL Shortener with extensive Link Analytics. Mini-URL offers solutions that will allow you to manage your links, thanks to which you can develop your business while having your links under control. Mini-URL is also a platform for creating your own Link in bio microsites and generating QR Codes, so you can combine offline and online solutions.</Typography>
        </Box>
    </Stack>
    <Grid spacing={2} container>

        <Grid item  xs={12} sm={12} md={6} >
            <Box sx={{border:"2px solid white",borderRadius:"14px"}}>
                <Typography variant='h3' marginTop={1}><LinkIcon  fontSize='40px' sx={{color:'#3bd671',marginLeft:"10px",transform:"rotate(125deg)",position:"relative",top:"5px"}}/>URL Shortener</Typography>
                <Typography variant="body1" sx={{m:4}}>Mini-URL is a URL Shortener and Link Management Platform. It offers a lot of features that will help you handle all your links in an intuitive way and reveal the potential of your links.</Typography>
                <Box 
                component={"img"} 
                src='../src/Assets/Mobile_Phone.jpg' 
                sx={{
                    width:"250px",
                    height:"250px",
                    maxWidth:"400px",
                    maxHeight:"400px",
                    borderRadius:"15px",
                    mx:4,
                    mt:4
                }}
                />
            </Box>
        </Grid>
        <Grid marginLeft={2} xs={12} sm={12} md={5}>

            <Grid item>
                <Box sx={{border:"2px solid white", borderRadius:"12px"}} my={2}>
                  <Typography variant='h3' margin={2}><Assessment fontSize='40px' sx={{color:"#3bd671",position:"relative",top:"5px"}}/>Link analytics</Typography>
                  <Typography variant="body1" sx={{m:4}}>Mini-URL is an advanced Link Analytics platform that tracks clicks on short links and provides extensive statistics to help you measure the effectiveness of your short links.</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{border:"2px solid white", borderRadius:"12px"}}>
                <Typography variant='h3' margin={2}><Person2Outlined fontSize='40px' sx={{color:"#3bd671",position:"relative",top:"5px"}}/>Link in bio</Typography>
                <Typography variant="body1" sx={{m:4}}>Mini-URL lets you create your own link-in-bio microsites so you can better reach your audience, measure click-through rates, and grow your audience with customizable link-in-bios.</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid item  textAlign={"start"} xs={12} sm={12} md={11.2}>
            <Box sx={{border:"2px solid white" , borderRadius:"12px"}}>
            <Typography variant='h3' margin={2}><QrCode  fontSize='40px' sx={{color:"#3bd671",position:"relative",top:"5px",marginX:"8px"}}/>QR Codes</Typography>
            <Typography variant="body1" sx={{m:4}}>With Mini-URL, you can easily generate and customize QR codes to match your brand and track their performance. Use QR codes to grow your business and measure their impact on your marketing efforts.</Typography>
            </Box>
        </Grid>
    </Grid>

  </>
  )
}

export default ContentSection;
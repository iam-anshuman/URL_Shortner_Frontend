import React, { useState } from 'react';
import {Box, Button, FormControl, IconButton, TextField, Tooltip,Input} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

function Form() {

  const [url,setUrl] = useState("");
  const [shortID,setShortID] = useState("");
  const [isError,setIsError] = useState("");
  const [buttonValue,setButtonValue] = useState("Copy");

async function handleSubmit(event){

      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const urlData = data.get("shortUrl");
      const userToken = JSON.parse(localStorage.getItem("user"));
      const response = await fetch("http://localhost:3000/url/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${userToken.data.token}`,
        },
        body:JSON.stringify({url:urlData}),
      });
      const json = await response.json();
      if(response.ok){
        setShortID(json.id);
      }
      if(!response.ok){
        setIsError(json.error);
      }
      setUrl("");
  }

  return (
<>
        <Box component="form" method={"POST"} action={"http://localhost:3000/url/"} onSubmit={handleSubmit} noValidate sx={{ my: 6 ,
        display: "flex",
        width: "90vw",
        height: "76px",
        padding: "21px 25.188px 21px 25px",
        alignItems: "center",
        justifyContent:"center",
        }}>
            <TextField
              variant='standard'
              required
              id="shortUrl"
              placeholder='Enter the Link Here'
              name="shortUrl"
              InputProps={{ disableUnderline: true }}
              onChange={(event) => {setUrl(event.target.value)}}
              value={url}
              autoFocus
              sx={{border:"5px solid grey",borderRadius:"30px",p:1.5,width:"659px"}}
            >

            </TextField>
                <Button type='submit' sx={{
                  width: "178px",
                  borderRadius: "48px",
                  border: "1px solid #144EE3",
                  background: "#144EE3",
                  boxShadow: "10px 9px 22px 0px rgba(20, 78, 227, 0.38)",
                  padding:1.5,
                  position:"relative",
                  left:"-14%",
                  "&:hover":{
                    backgroundColor:"#426DDD",
                    color:"secondary"
                  }
                }} >
                  Shorten Now
                </Button>
            
                </Box>
            {
            shortID &&
            <Box component={"div"} sx={{display:"flex",justifyContent:"center"}}>
              {
               buttonValue ==="Copied"
               ?
                <Button variant='contained' color='primary' disabled>
                 Url Copied
                </Button>
               :
              <Button 
                variant='contained'
                color="primary"
                onClick={()=>{
                navigator.clipboard.writeText(`http://localhost:3000/${shortID}`);
                setButtonValue("Copied");

                }}>Copy Mini-URL</Button>

                
              }
              <Tooltip title={"Open link"}>
              <IconButton sx={{mx:1}}>
                <LaunchIcon color='light' onClick={()=>{window.open(`http://localhost:3000/${shortID}`,"_blank")}}/>
              </IconButton>
              </Tooltip>
            </Box>
          
          }
  </>
  )
}

export default Form;
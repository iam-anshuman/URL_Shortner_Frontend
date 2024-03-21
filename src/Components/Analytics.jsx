import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import {ThemeProvider,createTheme,Box,Typography, Tooltip, Button, Snackbar, CssBaseline} from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Row from './Row';
import { BeatLoader } from 'react-spinners';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/900.css';


const RobotoFont = createTheme({
    palette:{
        mode:"dark"
    },
    typography:[
      'Roboto','sans-serif' 
    ].join(","),
  });

// Customizing data
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    


function Analytics() {

    const [urls,setUrls] = useState([]);
    const [copy, setCopy] = useState(false);
    const [loading,setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
    async function getAnalytics(){

        const userToken = JSON.parse(localStorage.getItem("user"));

        if(!userToken){
          setLoading(false);
          return
        }
        try {
            const response = await fetch("https://abc-ccy5.onrender.com/url/analytics",{
                mode: 'no-cors',
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${userToken.data.token}`
                }
            });
            const jsonData = await response.json();
            if(response.ok){
              setLoading(false)
                setUrls(jsonData);
            }
            else{
              setLoading(false)
                alert(jsonData);
            }

        } catch (error) {
            console.log(error);
        }

    }
    getAnalytics()
},[]);

const handleCopy = (shortID) => {
    setCopy(true);
    navigator.clipboard.writeText(`https://abc-ccy5.onrender.com/${shortID}`);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCopy(false);
  };

const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
);


    return (
    <>
    <Navbar/>
    <ThemeProvider theme={RobotoFont}>
        <CssBaseline/>
    <Box component={"main"} height={"100%"} width={"100%"}>
      <Box sx={{mt:20,mx:{sm:10,xs:0},px:5,textAlign:'center'}} >
        <Typography variant='h4' fontSize={"60px"} color="#9EC8B9" fontWeight={800} lineHeight={"90.015px" } sx={{background:"linear-gradient(90deg, #144EE3 -0.02%, #EB568E 18.86%, #A353AA 64.49%, #144EE3 100.67%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
             Your Shorten Link History ! 
        </Typography>
        <Typography sx={{
              textAlign: "center",
              fontFamily: "roboto",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "23.5px"
            }} variant='subtitle1'>These all are the Links you have created.</Typography>
       </Box>
       
{urls.length != 0 ?
       <TableContainer component={Paper} sx={{display:{xs:"none",sm:"block"},mt:2}}>
      <Table width={"100%"}aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Short ID</StyledTableCell>
            <StyledTableCell align="right">Short Url</StyledTableCell>
            <StyledTableCell align="right">Original Url</StyledTableCell>
            <StyledTableCell align="right">Clicks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {urls.map((url) => (
            <StyledTableRow key={url._id}>
              <StyledTableCell component="th" scope="row">
                {url.shortID}
              </StyledTableCell>
                <StyledTableCell align="right">{`https://abc-ccy5.onrender.com/${url.shortID}`}
                <IconButton onClick={()=>{handleCopy(url.shortID)}}> <ContentCopyIcon/> </IconButton>
                <Snackbar
                  open={copy}
                  autoHideDuration={800}
                  onClose={handleClose}
                  message="Copied"
                  action={action}
                  
                />
                </StyledTableCell>
              <Tooltip title={url.redirectURL}>
                <StyledTableCell align="right">{url.redirectURL.slice(0,50)}...</StyledTableCell>
              </Tooltip>
              <StyledTableCell align="right">{url.visitedHistory.length}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    :
    <Box >
        <Typography variant='h5' sx={{textAlign:"center",mt:4}}> There is Nothing to show. You have not created a Mini link yet :,)</Typography>
        {
        loading&&
        <Box sx={{display:'flex',justifyContent:"center",mt:2}}>
          <BeatLoader color="grey" />
           Loading Analytics...
        </Box>
        }
    </Box>
    }
{
    urls &&
    <TableContainer component={Paper} sx={{display:{xs:"block",sm:"none"},mt:2}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Short ID </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <Row key={url._id} url={url} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}

    </Box>
    </ThemeProvider>
</>
  )
}

export default Analytics;
import { useState } from "react";
import {Button,IconButton, TableRow, TableCell,Collapse, Box, Table,TableHead,Snackbar,TableBody, Tooltip} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Row(props) {
    
    const [open, setOpen] = useState(false);
    const [copy, setCopy] = useState(false);
    const { url } = props;

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
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {url.shortID}
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Short Url

                      <IconButton onClick={()=>{handleCopy(url.shortID)}}> <ContentCopyIcon/> </IconButton>
                            <Snackbar
                              open={copy}
                              anchorOrigin={{vertical:"top",horizontal:"right"}}
                              autoHideDuration={600}
                              onClose={handleClose}
                              message="Copied"
                              action={action}

                            />

                      </TableCell>
                      <TableCell>Original Url</TableCell>
                      <TableCell align="right">Clicks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                      <TableRow >
                        <TableCell component="th" scope="row">
                          {`https://abc-ccy5.onrender.com/${url.shortID}`}
                        </TableCell>
                        <Tooltip title={url.redirectURL}>
                            <TableCell>{url.redirectURL.slice(0,20)}...</TableCell>
                        </Tooltip>
                        <TableCell align="right">{url.visitedHistory.length}</TableCell>
                      </TableRow>
                
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
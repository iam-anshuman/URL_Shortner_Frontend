import React from 'react';
import {Box, FormControl, InputLabel,FilledInput,InputAdornment,IconButton} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Form() {
  return (
    <Box sx={{mx:5,textAlign:"center"}}>
        <FormControl  sx={{ mt:5,mx:10 ,width:{sm:200,md:300,lg:700}}} variant="filled">
          <InputLabel color='primary' htmlFor="filled-adornment-url">Enter Url</InputLabel>
          <FilledInput
            id="filled-adornment-url"
            color='primary'
            endAdornment={<InputAdornment position="end"><IconButton><ArrowForwardIosIcon color='primary'/></IconButton></InputAdornment>}
          />
        </FormControl>
    </Box>
  )
}

export default Form;
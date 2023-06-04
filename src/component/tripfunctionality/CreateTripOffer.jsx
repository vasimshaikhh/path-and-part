import {  Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react'
import { useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers';

import img1 from '../../assets/img1.jpg'





const CreateTripOffer = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue) => {
      setValue(newValue);
    };
   
  return (
    <Box
    // sx={{
    //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
    // }}
>
    <Container maxWidth='sm' sx={{mt:'3rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
          <Grid container sx={{ mt:'3rem',width: '80%' }}>
              <Grid item xs={12}>
              <Typography variant='h5' sx={{color:'black'}}>            Create Trip Offer</Typography>
          </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={2}>
                      <TextField sx={{ backgroundColor: '#fff' }} id="outlined-basic" label="current Place" variant="outlined" />
                      <TextField sx={{ backgroundColor: '#fff' }} id="outlined-basic" label="Destination" variant="outlined" />
                      {/* <timepicker style={{ height:'4rem',backgroundColor:'black',color:'#fff'}} onchange={onchange} value={value} />  */}
                      <MobileDatePicker
            // label="Date"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            // renderInput={(params) => <TextField {...params} />}
          />
                          <TimePicker
                        // label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                          />
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Offer Trip</Button>
                      </Stack>
                      </LocalizationProvider>
              </Grid>
           </Grid>
    </Container>
    </Box>
        
      
      
  )
}

export default CreateTripOffer
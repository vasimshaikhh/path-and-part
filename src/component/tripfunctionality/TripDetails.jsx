import React from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import img1 from '../../assets/img1.jpg'
const TripDetails = () => {
  return (
    <Box
    // sx={{
    //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
    // }}
>    <Container maxWidth='sm' sx={{mt:'2rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
    <Grid container sx={{mt:'3rem',width:'80%'}} spacing={3}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Typography variant='h5'>
              <strong>
                Trip Details
                </strong>
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
                        {/* <Box component='img' src={img} sx={{ width: '100%', height: '10rem' }} /> */}
                        <Typography variant='body1'> <strong>ID</strong> : 2</Typography>
                        <Typography variant='body1'> <strong>Departure</strong> : Maninagar</Typography>
                        <Typography variant='body1'> <strong>Destination</strong> : Nikol</Typography>
                        <Typography variant='body1'> <strong>Date</strong> : 2020-06-04</Typography>
                        <Typography variant='body1'> <strong>Time</strong> : 8:15</Typography>
                        <Typography variant='body1'> <strong>Available Seats</strong> : 3</Typography>
                        <Typography variant='body1'> <strong>Remaining Seats</strong> : 3</Typography>
                        <Typography variant='body1'> <strong>Rider</strong> : Parth Sathia</Typography>
                        <Typography variant='body1'> <strong>Fellow(s):Meet Vardiwale</strong> </Typography>
                        <Button variant='contained' sx={{borderRadius:'2rem ',backgroundColor:'#152238'}}>Request to Join</Button>
                        <Button variant='contained' sx={{marginBottom:'3rem',borderRadius:'2rem',backgroundColor:'red'}}>Cancel Trip</Button>
                    </Stack>
                </Container>
            </Card>
        </Grid>
    </Grid>
      </Container>
      </Box>
  )
}

export default TripDetails
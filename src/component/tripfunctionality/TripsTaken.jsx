import React from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import img1 from '../../assets/img1.jpg'


const TripsTaken = () => {
    return (
        <Box
        // sx={{
        //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
        // }}
    >
    <Container maxWidth='lg' sx={{mt:'3rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
    <Grid container sx={{width:'80%',mt:'3rem'}}>
        <Grid item xs={12}>
            <Typography variant='h5'>
              Trips Taken
            </Typography>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
        <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
                        {/* <Box component='img' src={img} sx={{ width: '100%', height: '10rem' }} /> */}
                        <Typography variant='body1'> <strong>Departure</strong> : Maninagar</Typography>
                        <Typography variant='body1'> <strong>Destination</strong> : Nikol</Typography>
                        <Typography variant='body1'> <strong>Date</strong> : 2020-06-04</Typography>
                        <Typography variant='body1'> <strong>Time</strong> : 8:15</Typography>
                        <Typography variant='body1'> <strong>Rider</strong> : Parth Sathia</Typography>
                        <Typography variant='body1'> <strong>Fellow(s):Meet Vardiwale</strong> </Typography>
                        <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Request to Join</Button>
                    </Stack>
                </Container>
            </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
        <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
                        {/* <Box component='img' src={img} sx={{ width: '100%', height: '10rem' }} /> */}
                        <Typography variant='body1'> <strong>Departure</strong> : Maninagar</Typography>
                        <Typography variant='body1'> <strong>Destination</strong> : Nikol</Typography>
                        <Typography variant='body1'> <strong>Date</strong> : 2020-06-04</Typography>
                        <Typography variant='body1'> <strong>Time</strong> : 8:15</Typography>
                        <Typography variant='body1'> <strong>Rider</strong> : Parth Sathia</Typography>
                        <Typography variant='body1'> <strong>Fellow(s):Meet Vardiwale</strong> </Typography>
                        <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Request to Join</Button>
                    </Stack>
                </Container>
            </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
        <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
                        {/* <Box component='img' src={img} sx={{ width: '100%', height: '10rem' }} /> */}
                        <Typography variant='body1'> <strong>Departure</strong> : Maninagar</Typography>
                        <Typography variant='body1'> <strong>Destination</strong> : Nikol</Typography>
                        <Typography variant='body1'> <strong>Date</strong> : 2020-06-04</Typography>
                        <Typography variant='body1'> <strong>Time</strong> : 8:15</Typography>
                        <Typography variant='body1'> <strong>Rider</strong> : Parth Sathia</Typography>
                        <Typography variant='body1'> <strong>Fellow(s):Meet Vardiwale</strong> </Typography>
                        <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Request to Join</Button>
                    </Stack>
                </Container>
            </Card>
        </Grid>
    </Grid>
            </Container>
            </Box>
  )
}

export default TripsTaken
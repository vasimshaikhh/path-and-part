import React from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import img1 from '../../assets/img3.jpg'


const TripsGiven = () => {
    return (
        <Box
        // sx={{
        //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
        // }}
    >
    <Container maxWidth='md' sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
    <Grid container sx={{width:'80%',mt:'3rem'}} spacing={3}>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography variant='h5'>
                            <strong>
                                Trips Given
                                </strong>
            </Typography>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
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
        <Grid item xs={6}>
        <Card sx={{padding:'1rem'}}>
                <Container>
                    <Stack divider={<Divider/>} spacing={1}>
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

export default TripsGiven
import { Box, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import img from '../../../assets/path3.jpg'

const RiderProfile = () => {
  return (
      <>
 <Box
            // sx={{
            //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
            // }}
        >
    <Container maxWidth='sm' sx={{mt:'3rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
              <Grid container sx={{width:'80%',mt:'3rem'}}>
                  <Grid item xs={12}>
                      <Typography variant='h5'>
                          Rider Profile
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <Card sx={{padding:'1rem'}}>
                          <Container>
                              <Stack divider={<Divider/>} spacing={1}>
                                  <Box component='img' src={img} sx={{ width: '100%', height: '10rem' }} />
                                  <Typography variant='body1'> <strong>First Name</strong> : Parth</Typography>
                                  <Typography variant='body1'> <strong>Last Name</strong> : Satrhia</Typography>
                                  <Typography variant='body1'> <strong>Email Address</strong> : user6@test.com</Typography>
                                  <Typography variant='body1'> <strong>Trips given</strong> : 3</Typography>
                                  <Typography variant='body1'> <strong>Trips Taken</strong> : 3</Typography>
                              </Stack>
                          </Container>
                      </Card>
                  </Grid>
              </Grid>
              </Container>
              </Box>
      </>
  )
}

export default RiderProfile
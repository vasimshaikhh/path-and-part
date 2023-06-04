import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../assets/img2.jpg'

const TripRequest = () => {
  return (
    <Box
    // sx={{
    //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
    // }}
>
    <Container maxWidth='xs' sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Card sx={{padding:'1rem',width:'100%'}}>
        <Grid container>
              <Grid item xs={12}>
               <Stack divider={<Divider/>} spacing={1}>
                      <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                            <Box sx={{display:'flex',justifyContent:'start'}}>
                                    <Typography variant='h5' sx={{color:'red'}}>Dev Thakkar</Typography>
                                  </Box>
                          <Stack spacing={1} direction={'row'}>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Accept</Button>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Reject</Button>

                          </Stack>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                      <Box sx={{display:'flex',justifyContent:'start'}}>
                              <Typography variant='h5' sx={{color:'red'}}>Dev Thakkar</Typography>
                            </Box>
                          <Stack spacing={1} direction={'row'}>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Accept</Button>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Reject</Button>

                          </Stack>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                      <Box sx={{display:'flex',justifyContent:'start'}}>
                              <Typography variant='h5' sx={{color:'red'}}>Dev Thakkar</Typography>
                            </Box>
                          <Stack spacing={1} direction={'row'}>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Accept</Button>
                          <Button variant='contained' sx={{borderRadius:'2rem',backgroundColor:'#152238'}}>Reject</Button>

                          </Stack>
                      </Stack>
               </Stack>
            </Grid>
          </Grid>
          </Card>

      </Container>
      </Box>
  )
}

export default TripRequest
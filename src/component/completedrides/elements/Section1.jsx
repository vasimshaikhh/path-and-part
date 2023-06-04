import React from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
// import img1 from '../../assets/img1.jpg'
import MultipleStopIcon from '@mui/icons-material/MultipleStop';


const Section1 = () => {
    return (
        <Box
            // sx={{
            //     background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
            // }}
        >
            {/* background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */}


          <Container maxWidth='lg' sx={{mt:'5rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={12}>
                        <Card sx={{'&:hover':{background:'linear-gradient(to right, #e2e2e2, #c9d6ff)'},background:'linear-gradient(to right, #c9d6ff, #e2e2e2)',height:'14.9rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
                            <Container >
                                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                    <Typography variant='body1'>Departure</Typography>
                                    <MultipleStopIcon/>
                                    <Typography variant='body1'  >Destination</Typography>

                                </Stack>
                                <Divider/>
                                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                    <Typography variant='body1'>Ride Started</Typography>
                                    <Typography variant='body1'  >Time</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                    <Typography variant='body1'>10 april</Typography>
                                    <Typography variant='body1'  >10 bje</Typography>
                                </Stack>
                                <Divider/>

                                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                    <Typography variant='body1'>Ride Completed</Typography>
                                    <Typography variant='body1'  >Time</Typography>
                                </Stack>
                                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                    <Typography variant='body1'>10 april</Typography>
                                    <Typography variant='body1'  >10 bje</Typography>
                                </Stack>
                                <Divider/>
                                <Stack direction='row' justifyContent={'space-between'} sx={{mt:'0.5rem'}}>
                                    <Typography variant='body1'>Rider's Name : </Typography>
                                    <Typography variant='body1'><strong>lokesh</strong> </Typography>
                                </Stack>
                                <Divider/>
                                <Stack direction='row' justifyContent={'space-between'} sx={{mt:'0.5rem'}}>
                                    <Typography variant='body1'>Vehicle : </Typography>
                                    <Typography variant='body1'><strong>Supra 2 seater</strong> </Typography>
                                </Stack>
                                <Stack direction='row' justifyContent={'center'}>
                                    <Button  variant='outlined'>Book again</Button>
                                    </Stack>

                            </Container>
                        </Card>
                    </Grid>
            </Grid>
          </Container>
        </Box>
  )
}

export default Section1;
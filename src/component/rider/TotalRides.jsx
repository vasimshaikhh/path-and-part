import React from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
// import img1 from '../../assets/img1.jpg'
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import { Link } from 'react-router-dom';
import { useAllAvailableRidesQuery } from '../../services/api';


const TotalRides = () => {
    const { isSuccess, data, isError } = useAllAvailableRidesQuery()
    
    console.log(data,'datas')
    return (
        <Box>
          <Container maxWidth='lg' sx={{mt:'5rem',height:'100vh',display:'flex',justifyContent:'center',alignItems:'start'}}>
                <Grid container spacing={2}>
                    {isSuccess === true ? data.data?.map((el, i) => {
                        return (
                            <Grid item md={3} xs={12} key={i}>
                            <Card sx={{'&:hover':{background:'linear-gradient(to right, #e2e2e2, #c9d6ff)'},background:'linear-gradient(to right, #c9d6ff, #e2e2e2)',height:'11.7rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
                                <Container >
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                        <Typography variant='body1'>{el.departure}</Typography>
                                        <MultipleStopIcon/>
                                        <Typography variant='body1'  >{el.destination}</Typography>    
                                    </Stack>
                                        
                                    <Divider/>
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                        <Typography variant='body1'>Date</Typography>
                                        <Typography variant='body1'  >Time</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                        <Typography variant='body1'>{el.date}</Typography>
                                        <Typography variant='body1'  >{el.time}</Typography>
                                    </Stack>
                                    <Divider/>
                                    <Stack direction='row' justifyContent={'space-between'} sx={{mt:'0.5rem'}}>
                                        <Typography variant='body1'>Rider's Name : </Typography>
                                        <Typography variant='body1'><strong>{el.rider_name}</strong> </Typography>
                                    </Stack>
                                    <Divider/>
                                    <Stack direction='row' justifyContent={'space-between'} sx={{mt:'0.5rem'}}>
                                        <Typography variant='body1'>Vehicle : </Typography>
                                        <Typography variant='body1'><strong>{el.vehiclenameseat} seater</strong> </Typography>
                                    </Stack>
                                        <Stack direction='row' justifyContent={'center'}>
                                            <Link to='/carinfo'>
                                        <Button  variant='outlined'>Contact lokesh</Button>
                                        </Link>
                                        </Stack>
    
                                </Container>
                            </Card>
                        </Grid>
                        )
                    })
                        
                        : null}
                  
            </Grid>
          </Container>
        </Box>
  )
}

export default TotalRides
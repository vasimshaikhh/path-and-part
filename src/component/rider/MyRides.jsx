import React, { useEffect } from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
// import img1 from '../../assets/img1.jpg'
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MyRides = () => {
    // const { isSuccess, data, isError } = useAllAvailableRidesQuery()
    
    // console.log(data,'datas')
    const departure = localStorage.getItem('depar')
    const destination = localStorage.getItem('dest')      
    const date = localStorage.getItem('date')      
    const time = localStorage.getItem('time')
    const u_name = localStorage.getItem('userName')
    const [disp, setDisp] = useState(false)
    const navigate = useNavigate()
    const el = [{ "date": date, "time": time, "dep": departure, "dest": destination, "name": u_name }]
        // console.log(el,'elishere')

    useEffect(() => {
        (async() => {
            if (departure, destination, date, time, u_name !==undefined) {
                await respInfo(date, time, departure, destination,u_name);
            }
        })()
    }, [departure, destination, date, time, u_name])
    
    const clearDt = () => {
        localStorage.removeItem('depar')
        localStorage.removeItem('dest')
        localStorage.removeItem('date')
        localStorage.removeItem('time')
        navigate(0)
    }

    useEffect(() => {
        if (departure && destination && date && time && u_name) {
            setDisp(true)
        }
         
    },[])

    return (
        <Box sx={{height:'auto',mb:'1rem',display:'flex',justifyContent:'center'}}>
          <Container maxWidth='lg' sx={{mt:'5rem',display: disp ? 'flex' : 'none',justifyContent:'center',alignItems:'start'}}>
                <Grid container spacing={2}>
                            <Grid item md={3} xs={12}>
                            <Card sx={{'&:hover':{background:'linear-gradient(to right, #e2e2e2, #c9d6ff)'},background:'linear-gradient(to right, #c9d6ff, #e2e2e2)',height:'11.7rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
                                <Container >
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                                        <Typography variant='body1'>{el[0].dep}</Typography>
                                        <MultipleStopIcon/>
                                        <Typography variant='body1'  >{el[0].dest}</Typography>    
                                    </Stack>
                                        
                                    <Divider/>
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                        <Typography variant='body1'>Date</Typography>
                                        <Typography variant='body1'  >Time</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'} divider={<Divider/>}>
                                        <Typography variant='body1'>{el[0].date}</Typography>
                                        <Typography variant='body1'  >{el[0].time}</Typography>
                                    </Stack>
                                    <Divider/>
                                    <Stack direction='row' justifyContent={'space-between'} sx={{mt:'0.5rem'}}>
                                        <Typography variant='body1'>Co-Rider's Name : </Typography>
                                        <Typography variant='body1'><strong>{el[0].name}</strong> </Typography>
                                    </Stack>
                                    <Divider/>                                  
                                        <Stack direction='row' spacing={2} justifyContent={'center'}>
                                           
                                        {/* <Button startIcon={<DoneAllIcon sx={{ color: 'blue' }} />} variant='contained'>Accept</Button> */}
                                        <Button onClick={clearDt} startIcon={<CancelIcon sx={{ color: 'red' }} />} variant='contained'>cancel</Button>                                       
                                        </Stack>    
                                </Container>
                            </Card>
                        </Grid>
                        )                        
            </Grid>
            </Container>
            
            <Container maxWidth='lg' sx={{ mt: {md:'15rem',xs:'22rem'}, display: !disp ? 'flex' : 'none', justifyContent: 'center', alignItems: 'start' }}>
                <Card sx={{color:'#fff',height:'10rem',width:'100%',backgroundColor:'#28384A',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Stack spacing={2} justifyContent={'center'} alignItems='center' textAlign={'center'}>
                    <Typography variant='h4'>
                        Sorry No Available Rides 😞
                    </Typography>
                    <Typography variant='body'>
                        No Worry You Will get someone on Your way 😊
                    </Typography>
                    </Stack>
                  
                </Card>    
            </Container>
        </Box>
  )
}



export default MyRides



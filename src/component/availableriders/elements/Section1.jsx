import React from 'react'
import img2 from '../../../assets/img2.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useAvailableriderQuery } from '../../../services/api';
import { useTripAndRidersIdMutation } from '../../../services/api';
import { useEffect } from 'react';
import { useState } from 'react';




const Section1 = () => {
  const trip_id = localStorage.getItem('tripid')
  // console.log(trip_id, 'sdsdsd')

  const [tr_id,setTr_id] = useState()
  const [respinfo, response] = useTripAndRidersIdMutation()
  const { data, isSuccess, isError } = useAvailableriderQuery()
  const navigate = useNavigate()
  const [dataById, setDatabyId] = useState([]);

  var riderId = []


//   useEffect(() => {
//     if (trip_id !== null || undefined) {
//       respinfo(trip_id)
//     console.log(response,'Response')
//   }
// },[trip_id])


  useEffect(() => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({trip_id}),
      headers: { "Content-Type": "application/json" },      
    };
    if (trip_id !== undefined || null) {
      fetch('http://localhost:7000/tripsid_rider', requestOptions)
      .then((response) => response.json())
        .then((result) => setTr_id(result.data));
     
    }

  }, [])
  // console.log(tr_id, 'arr')

  
  useEffect(() => {
    // let isApiSubscribed = true;
    if (tr_id !== undefined || null ) {
      // console.log(tr_id.length,'length')
      for (var i = 0; i <= tr_id.length ; i++){
        riderId = tr_id.map((id) => {
          return id.rider_id
        })
      }
      // console.log(riderId,'riderID')
    }
  }, [tr_id])
  
  const byid = [];
  useEffect(() => {
    const requestOption = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    // const arr = [];
    // console.log(riderId[0],'ofZero')
   

    
    if (riderId !== undefined || null) {
      for (var b = 0; b <= riderId.length; b++){
        fetch(`http://localhost:7000/riderdata/${riderId[b]}`, requestOption)
          // .then((response) => response.json()).then((data) => byid.push(data))
          .then((response) => response.json())
          .then((data) => byid.push(data))
          // .then(byid.forEach((element) => {
          //   console.log(element,'hgghghg')
          // }
          // ))
        
        
        // if (byid.length > 0) {
          console.log(byid.length, 'length') 
          console.log(byid, 'byid') 
          // console.log('byif') 
          // }
          
      }
     
      // setDatabyId(byid)
   }
  }, [riderId])
  
  
const finalData = []

  // useEffect(() => {    

  //   const timer = setTimeout(() => {

  //     if (dataById.length > 1) {
  //       console.log(dataById, 'databy id ')  
  //       console.log('Hii there')
  //       console.log(dataById[0].data[0].name,'lolololo')
  //     }
  //   }, 100); 
    
  //   return () => clearTimeout(timer);
  // },[dataById])

  // useEffect(() => {
  //   console.log(finalData,'FinalData')

  // },[finalData])



  return (
      <Container maxWidth='lg' sx={{ mt: '5rem' }} >
          <Grid container spacing={2}>
             
         
          { isSuccess===true ?  data.data?.map((el, i) => {
              return (
                <Grid item xs={12} key={i}>
                <Stack spacing={3}>
                <Card>
          <Grid container spacing={3}>
              <Grid item md={4} xs={12} >
                  <Stack justifyContent={'center'} alignItems={'center'}>
                  <Box component={'img'} src={el.image} sx={{height:'13rem',width:'100%'}} />
                  <Typography variant='h6'> <strong>{el.name}</strong> </Typography>
                  </Stack>
              </Grid>
              <Grid item md={4} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                  <Stack spacing={5} justifyContent={'center'} alignItems={'start'}>
                      <Stack spacing={1}>
                      <Typography variant='h5'> <strong>Details About {el.name}</strong></Typography>
                      <Typography variant='body2'>By First Design in Healthty Beauty</Typography>
                      </Stack>
                      <Stack spacing={0.5} >
                         <Typography variant='body1'>{el.description}</Typography>                   
                    </Stack>
                     
                      </Stack>
                      
                  </Grid>
                  <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                      <Stack justifyContent={'center'} alignItems={'center'}spacing={1} >
                          <Typography variant='h6'><strong>Total Rides Performed ({el.r_perform})</strong></Typography>
                          <Typography variant='h6'><strong>Skills rating ({el.rate}/50)</strong></Typography>
                          <Typography variant='body2'>popularity {el.popularility}</Typography>
                          <Typography variant='body2'>last Updated. {el.l_update}</Typography>
                          <Typography variant='body2'>Vehicle Owned :  {el.vehiclename}</Typography>
                             <Button onClick={()=>navigate('/carinfo')} variant='outlined'>View Rider's Car</Button>
                              
                      </Stack>
              </Grid>
          </Grid>
              </Card>
          
                </Stack>
                </Grid>
              )
          }) : null        
        }


          {/* { isSuccess===true ?  data.data?.map((el, i) => {
              return (
                <Grid item xs={12} key={i}>
                <Stack spacing={3}>
                <Card>
          <Grid container spacing={3}>
              <Grid item md={4} xs={12} >
                  <Stack justifyContent={'center'} alignItems={'center'}>
                  <Box component={'img'} src={el.image} sx={{height:'13rem',width:'100%'}} />
                  <Typography variant='h6'> <strong>{el.name}</strong> </Typography>
                  </Stack>
              </Grid>
              <Grid item md={4} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                  <Stack spacing={5} justifyContent={'center'} alignItems={'start'}>
                      <Stack spacing={1}>
                      <Typography variant='h5'> <strong>Details About {el.name}</strong></Typography>
                      <Typography variant='body2'>By First Design in Healthty Beauty</Typography>
                      </Stack>
                      <Stack spacing={0.5} >
                         <Typography variant='body1'>{el.description}</Typography>                   
                    </Stack>
                     
                      </Stack>
                      
                  </Grid>
                  <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                      <Stack justifyContent={'center'} alignItems={'center'}spacing={1} >
                          <Typography variant='h6'><strong>Total Rides Performed ({el.r_perform})</strong></Typography>
                          <Typography variant='h6'><strong>Skills rating ({el.rate}/50)</strong></Typography>
                          <Typography variant='body2'>popularity {el.popularility}</Typography>
                          <Typography variant='body2'>last Updated. {el.l_update}</Typography>
                          <Typography variant='body2'>Vehicle Owned :  {el.vehiclename}</Typography>
                             <Button onClick={()=>navigate('/carinfo')} variant='outlined'>View Rider's Car</Button>
                              
                      </Stack>
              </Grid>
          </Grid>
              </Card>
          
                </Stack>
                </Grid>
              )
          }) : null        
        } */}

          </Grid>
   
  </Container>
  )
}

export default Section1
import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import img from '../../../assets/path4.png'

const Section1 = () => {
  return (
    <>
    <Container maxWidth={'md'} sx={{color:'black',mt:'5rem',mb:'5rem',height:"45vh", display: 'flex' , justifyContent:"center" , alignItems:"center"}}>
<Grid container spacing={5}>
  <Grid item xs={12} sx={{display:'flex' , justifyContent:'center'}}>
  <Typography sx={{typography:{lg:'h4', xs:'body2' ,sm:'h3'}}}>Why Rides ?</Typography>
  </Grid>

  <Grid item xs={12} sx={{display:'flex' , justifyContent:'center'}}>
  <Grid container spacing={{lg:20 , xs:5}}>
  <Grid item lg={6} xs={12} sx={{display:"flex" , justifyContent:{lg:"end", xs:"center"}}}>
  <Box component={'img'} src={img} sx={{height:{lg:'12rem',sm:'11rem' ,xs:'7rem'} , width:{lg:'12rem',sm:'11rem' ,xs:'7rem'} }}></Box>
  </Grid>

  <Grid item lg={6} xs={12}>
  <Stack justifyContent={'center'} textAlign={'start'}>
       <Typography sx={{typography:{lg:'h6',xs:'body2' , sm:'h5'}}} >Rider is carpooling that providing driver with the ability to
          create ride offers and pessanger to join availabel ride offers
        </Typography>
        <Typography  sx={{typography:{lg:'h6',xs:'body2' , sm:'h5'}}}>With Rider, you get to optimize the use of your ride,
        save fuel,money,time and most of all; you get to share!Signup now to see how 
        easy carpooling can be.
        </Typography>
        <Typography  sx={{typography:{lg:'h6',xs:'body2', sm:'h5'}}}>Seriously Sing Up now.</Typography>
       </Stack>
  </Grid>
  </Grid>
  </Grid>
</Grid>

   
   </Container>
    </>
  )
}

export default Section1
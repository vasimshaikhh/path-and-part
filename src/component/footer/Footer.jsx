import React from 'react'
import {Stack,Typography} from '@mui/material'
const Footer = () => {
  return (
   <>
        <Stack direction={{sm:'row',xs:'column'}} sx={{mb:0,backgroundColor:'grey',height:'6rem',width:'100%'}} spacing={3} justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h6'>@2019 Path and Part</Typography>
      <Typography variant='h6' >Made by NT</Typography>
        </Stack>
</>
  )
}

export default Footer
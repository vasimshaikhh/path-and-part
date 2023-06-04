import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'

const Section2Drawer = (props) => {

  const [openn, setOpenn] = useState()
  
  // console.log(props.click)
  return (
    <Dialog
    open={props.open}
    onClose={props.open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    // sx={{background:`url(${img1})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      {/* <DialogContentText id="alert-dialog-description"> */}
      <Typography variant='h6'>Mobile no1 : <strong> 9898989898</strong></Typography>
      <Typography variant='h6'>Mobile no2 : <strong> 9898989898</strong></Typography>
      <Typography variant='h6'>email      :      <strong> user6@test.com</strong></Typography>
      <Typography variant='h6'>Address : <strong> 109 street cambridge Hall 1008</strong></Typography>
      {/* </DialogContentText> */}
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>props.setOpen(false)}>done</Button>
      {/* <Button onClick={()=>props.setOpen(false)}>done</Button> */}
      {/* <Button onClick={handleClose} autoFocus>
        Agree
      </Button> */}
    </DialogActions>
  </Dialog>
  )
}

export default Section2Drawer
import React, { useState } from 'react'
import img2 from '../../../assets/img2.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, Card, Chip, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, Typography } from '@mui/material'
import Section2Drawer from './Section2Drawer';
import img1 from '../../../assets/img1.jpg'


const Section1 = () => {
    const [clicked, setClicked] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return (
      <Container maxWidth='xl' sx={{ mt: '5rem' }} >
          <Stack spacing={3}>
          <Card>
    <Grid container spacing={3}>
        <Grid item  xs={12} >
            <Stack justifyContent={'center'} alignItems={'center'}>
            <Box component={'img'} src={img2} sx={{height:{xs:'15rem',sm:'30rem'},width:'100%'}} />
            <Typography sx={{typography:{xs:'h6',sm:'h3'}}}> <strong>Riders Name</strong> </Typography>
            </Stack>
        </Grid>
        <Grid item  md={8} xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Container maxWidth='xl'>
            <Stack spacing={2} justifyContent={'center'} alignItems={'start'}>
                <Stack spacing={1}>
                <Chip sx={{height:'4rem',width:'110%',fontSize:'1.5rem'}} label='Full name '/>
                <Chip sx={{display:'flex',justifyContent:'start',fontSize:'1rem'}} label='By First Design in Healthty Beauty'/>
                {/* <Typography variant='body2'></Typography> */} {clicked === true ? <Section2Drawer click='true'/> : null}
                </Stack>
                <Stack spacing={0.5} sx={{backgroundColor:'#EBEBEB'}} >
                   <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem unde voluptatem eum laborum architecto. Deserunt laboriosam distinctio culpa omnis, ab saepe maxime repellat ullam eius reiciendis ad, sed veritatis quibusdam ea inventore, vel incidunt. Corrupti odit possimus pariatur est iste enim. Sed ea soluta harum itaque doloribus maxime sequi voluptate animi, cum, recusandae iure natus dolor in nihil alias consequatur quia porro inventore vero. Architecto ut culpa eos maxime recusandae ipsa voluptatum, autem quidem dolores necessitatibus repellendus esse laboriosam?</Typography>
              </Stack>
               
                </Stack>
                </Container>
                
            </Grid>
            <Grid item md={4}  xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                <Stack justifyContent={'center'} alignItems={'center'}spacing={2} >
                    <Typography variant='h6'><strong>Operation Performed (29)</strong></Typography>
                    <Typography variant='h6'><strong>Skills rating (29/50)</strong></Typography>
                    <Typography variant='body2'>popularity 1.6k</Typography>
                    <Typography variant='body2'>last Updated. 1h ago</Typography>
                    {/* <Stack direction={'row'} spacing={0.4} justifyContent={'center'}> */}
                        {/* <Button variant='outlined'>Detailed Information</Button> */}
                        
                    {/* </Stack> */}
                </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:'1.5rem'}}>                          
                          <Button variant='contained' onClick={handleClickOpen} size="large">Contact</Button>
                          <Section2Drawer open={open} setOpen={setOpen} />
                          {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <Typography variant='h6'>Mobile no1 : <strong> 9898989898</strong></Typography>
          <Typography variant='h6'>Mobile no2 : <strong> 9898989898</strong></Typography>
          <Typography variant='h6'>email      :      <strong> user6@test.com</strong></Typography>
          <Typography variant='h6'>Address : <strong> 109 street cambridge Hall 1008</strong></Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>done</Button>
          <Section2Drawer setopen={setOpen} open={open} />
     
        </DialogActions>
      </Dialog> */}
                         
            </Grid>
    </Grid>
        </Card>
    
          </Stack>
   
  </Container>
  )
}

export default Section1
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../../../../services/adminapi';
import { IconButton, InputAdornment } from '@mui/material';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function AdminSignUp() {
  const [f_name,setFname] = useState()
  const [l_name,setLname] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [c_password, setCpassword] = useState()
  const [iq, setIq] = useState(true)
  const [userid,setUserId] = useState()
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validRegexPassword = /(?=.*[A-Z])(?=.{7,40}$)/;
  var validRegexName = /(?=.*[a-z])(?=.{3,10}$)/;
  const [eye, setEye] = useState(false)
  const navigate = useNavigate()
  const dt = JSON.stringify({ f_name, l_name, email, password, c_password })
  // console.log(dt,'dt')

const [respInfo, response] = useSignupMutation()

  
  const onhadleSignup = (async (e) => {
    e.preventDefault()
    if (f_name, l_name, email, password, c_password !== undefined) {
      await respInfo(dt)
    }
  })

  useEffect(() => {
    if (response.isSuccess) {            
        if (response.data.success !== undefined ){
            setIq(response.data.success === 0);
            // console.log(response.data.success === 0, 'error')
          // console.log(response.data, 'respones')
          // setUserId((response.data.data))
        }
        // console.log(response.data, 'Reafsdfsd')
     
    } else {            
    }
}, [response.isSuccess,iq])
  
  
useEffect(() => {
  if (response.isSuccess) {
      if (response.data.success !== undefined ){
          setIq(response.data.success === 0);
          console.log(response.data.success === 0, 'error')
        console.log(response.data, 'respones')
        localStorage.setItem('userId',response.data.insertId)
      }
    console.log(response.data, 'Reafsdfsd')
    console.log(userid,'usersdsdsd')

    if (iq === false) {
      console.log(response.data.result, 'indertID')
      localStorage.setItem('userId',response)
      console.log(response.data,'usersdsdsd')
          navigate('/');
      } else {
      }
  } else {
  }
}, [response.isSuccess,iq])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  useEffect(() => {
    if (response.isSuccess === true) {
      console.log(response.data.result.insertId, 'data')
      localStorage.setItem('userId',response.data.result.insertId)
    }
  },[response.isSuccess])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{mb:'1rem'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={f_name || ''}
                  onChange={(e)=>{setFname(e.target.value)}}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              <Typography variant='body2'sx={{color:'red'}}>{!validRegexName.test(f_name) ? 'invalid Name' : null}</Typography>

              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  value={l_name|| ''}
                  onChange={(e)=>{setLname(e.target.value)}}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              <Typography variant='body2'sx={{color:'red'}}>{!validRegexName.test(l_name) ? 'invalid Last Name' : null}</Typography>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email || ''}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <Typography variant='body2'sx={{color:'red'}}>{!validRegex.test(email) ? 'invalid Email' : null}</Typography>
              
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password || ''}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={eye ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: <InputAdornment position='end'>
                      <IconButton onClick={() => setEye(!eye)}>
                        {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  }}
                />
                <Typography variant='body2'sx={{color:'red'}}>{!validRegexPassword.test(password) ? 'invalid Password' : null}</Typography>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={c_password || ''}
                  onChange={(e)=>{setCpassword(e.target.value)}}
                  required
                  fullWidth
                  name="Confrim_password"
                  label="Confrim_Password"
                  type={eye ? "text" : "password"}
                  id="cpassword"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: <InputAdornment position='end'>
                      <IconButton onClick={() => setEye(!eye)}>
                        {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    }}
                  />
              <Typography variant='body2'sx={{color:'red'}}>{!validRegexPassword.test(c_password) ? 'invalid Password' : null}</Typography>
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onhadleSignup}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/admin/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
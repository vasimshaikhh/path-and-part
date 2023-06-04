import { Box,Container,Dialog, DialogActions, Button, Slide, Card, Stack, Grid, Typography, MenuItem, Select, InputLabel, FormControl, TextField,} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
// import { city } from "./citynames";
import {city} from '../home/citynames' ;
import { useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import { useCreateRideMutation } from "../../services/riderapi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateRides = (props) => {
  const navigate = useNavigate();
  const [departure, setdeparture] = useState();
  const [destination, setdestination] = useState();
  const [dt, setDt] = useState();
  const [tim, setTim] = useState("10:00:00");
  const [respInfo, res] = useCreateRideMutation();
  const [detaResp, setResponse] = useState('nthng')
  const [rider_name, setRiderName] = useState()
  const [vehiclenameseat,setvehiclenameseat] = useState()
  const formattedDate = new Date(dt);
  
  const date = formattedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  var dateWithouthSecond = new Date(tim);
  const time = dateWithouthSecond.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  
  const args = JSON.stringify({ departure, destination,date, time,rider_name,vehiclenameseat });
  const onHandleCheck = async () => {
    if ((departure && vehiclenameseat && rider_name && destination && date && time !== undefined) || null) {
      await respInfo(args);
    }
  };

  useEffect(() => {
    if (res.isSuccess === true) {
      console.log(res)
    }
  },[res])

  return (
    <>

      <Container
        maxWidth="lg"
        sx={{
          mt: "12rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifycontent: "center",
            height: { md: "50vh" },
            width: { md: "60rem", xs: "100%" },justifyContent:'center'
          }}
        >
          <Container>
            <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    aligntems: "center",
                  }}
                >
                  <DatePicker sx={{width:'100%'}}
                    format="DD/MM/YYYY"
                    label="Basic date picker"
                    value={dt || ""}
                    onChange={(newValue) => setDt(newValue)}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    aligntems: "center",
                  }}
                >
                   <DemoContainer components={['TimePicker']} sx={{width:'100%'}}>
                    <TimePicker sx={{width:'100%'}}
                      // defaultValue={dayjs('2022-04-17T15:30')}
                      views={['hours', 'minutes', 'seconds']}
                    label='Pick Time'
                    onChange={(newValue) => {
                      setTim(newValue);
                    }}
                    // value={tim || ""}
                  />
      </DemoContainer>
                 
                </Grid>
              </LocalizationProvider>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligntems: "center",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select departureture
                  </InputLabel>
                  <Select
                    sx={{ backgroundColor: "#fff" }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={departure || ""}
                    label="--Blood Group--"
                    onChange={(e) => setdeparture(e.target.value)}
                  >
                    {city.map((el, i) => {
                      return (
                        <MenuItem key={i} value={el}>
                          {el}{" "}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligntems: "center",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select destinationination
                  </InputLabel>
                  <Select
                    sx={{ backgroundColor: "#fff" }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={destination || ""}
                    label="--Blood Group--"
                    onChange={(e) => setdestination(e.target.value)}
                  >
                    {city.map((el, i) => {
                      return (
                        <MenuItem key={i} value={el}>
                          {el}{" "}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}sm={6}sx={{display: "flex",justifyContent: "center",aligntems: "center",}}>
                <TextField sx={{width:'100%'}} id="outlined-basic" label="Rider name" value={rider_name||''} onChange={(e)=>setRiderName(e.target.value)} variant="outlined" />
              </Grid>
              <Grid item xs={12}sm={6}sx={{display: "flex",justifyContent: "center",aligntems: "center",}}>
                <TextField sx={{width:'100%'}} id="outlined-basic" label="Vehicle name" value={vehiclenameseat||''} onChange={(e)=>setvehiclenameseat(e.target.value)} variant="outlined" />
              </Grid>



              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligntems: "center",
                }}
              >
                <Stack spacing={1}>
                  {res.isSuccess === true ? 
                <Typography variant="body2" sx={{ color: "red"}} >
                    {/* {res.data.message} */} Ride added Successfully
                  </Typography>:null}
                  <Button variant="contained" disabled={res.isSuccess ? true : false} onClick={onHandleCheck}>
                    create
                  </Button>
                
               
                </Stack>
              </Grid>

              {/* <Stack
                direction={{ sm: "row", xs: "column" }}
                spacing={2}
                justifyContent={"center"}
                sx={{ mt: "1rem", mb: { xs: "2rem", md: 0 } }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/availablerides");
                  }}
                >
                  Available Rides
                </Button>
                <Button
                  onClick={() => navigate("/completedrides")}
                  variant="contained"
                >
                  Completed Rides{" "}
                </Button>
              </Stack> */}
            </Grid>
          </Container>
        </Card>

        {/* <DialogActions></DialogActions> */}
      </Container>
    {/* // </Dialog> */}
    </>
  );
};


export default CreateRides
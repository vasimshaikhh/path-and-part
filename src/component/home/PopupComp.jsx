// import { Box,Container,Dialog, DialogActions, Button, Slide, Card, Stack, Grid, Typography, MenuItem, Select, InputLabel, FormControl,} from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers";
// import { useDepToDesRidesMutation, useTripDetailsMutation } from "../../services/api";
// import { city } from "./citynames";
// import { useNavigate } from "react-router-dom";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import dayjs from "dayjs";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const PopupComp = (props) => {
//   const u_name = localStorage.getItem('userName')
//   const navigate = useNavigate();
//   const [departure, setdeparture] = useState();
//   const [destination, setdestination] = useState();
//   const [dt, setDt] = useState();
//   const [tim, setTim] = useState("10:00:00");
//   const [respInfo, res] = useTripDetailsMutation();
//   const [detaResp,setResponse] = useState()
//   const formattedDate = new Date(dt);
  
//   const date = formattedDate.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//   });

//   var dateWithouthSecond = new Date(tim);
//   const time = dateWithouthSecond.toLocaleTimeString("en-GB", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });


  
//   const args = JSON.stringify({ date, time, departure, destination,u_name });

//   const onHandleCheck = async () => {
//     if ((departure && destination && date && time && u_name !== undefined) || null) {
//       await respInfo(date, time, departure, destination,u_name);
//     }
//   };
//   console.log(res.data, 'data')


//   return (
//     <Dialog
//       open={props.open}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={props.setOpen}
//       aria-describedby="alert-dialog-slide-description"
//     >
//       <Box sx={{ display: "flex", justifyContent: "end", height: 0 }}>
//         <CloseIcon
//           sx={{ fontSize: "2rem", cursor: "pointer" }}
//           onClick={() => props.setOpen(false)}
//         />
//       </Box>

//       <Container
//         maxWidth="lg"
//         sx={{
//           mt: "3rem",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Card
//           sx={{
//             display: "flex",
//             justifycontent: "center",
//             height: { md: "55vh" },
//             width: { md: "60rem", xs: "100%" },
//           }}
//         >
//           <Container>
//             <Grid
//               container
//               spacing={2}
//               sx={{ justifyContent: "center", alignItems: "center" }}
//             >
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <Grid
//                   item
//                   xs={12}
//                   sm={6}
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     aligntems: "center",
//                   }}
//                 >
//                   <DatePicker
//                     format="DD/MM/YYYY"
//                     label="Basic date picker"
//                     value={dt || ""}
//                     onChange={(newValue) => setDt(newValue)}
//                   />
//                 </Grid>

//                 <Grid
//                   item
//                   xs={12}
//                   sm={6}
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     aligntems: "center",
//                   }}
//                 >
//                    <DemoContainer components={['TimePicker']}>
//                     <TimePicker
//                       views={['hours', 'minutes', 'seconds']}
//                     label='Pick Time'
//                     onChange={(newValue) => {
//                       setTim(newValue);
//                     }}
//                   />
//       </DemoContainer>
                 
//                 </Grid>
//               </LocalizationProvider>
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   aligntems: "center",
//                 }}
//               >
//                 <FormControl sx={{ width: "100%" }}>
//                   <InputLabel id="demo-simple-select-helper-label">
//                     Select departureture
//                   </InputLabel>
//                   <Select
//                     sx={{ backgroundColor: "#fff" }}
//                     labelId="demo-simple-select-helper-label"
//                     id="demo-simple-select-helper"
//                     value={departure || ""}
//                     label="--Blood Group--"
//                     onChange={(e) => setdeparture(e.target.value)}
//                   >
//                     {city.map((el, i) => {
//                       return (
//                         <MenuItem key={i} value={el}>
//                           {el}{" "}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   aligntems: "center",
//                 }}
//               >
//                 <FormControl sx={{ width: "100%" }}>
//                   <InputLabel id="demo-simple-select-helper-label">
//                     Select destinationination
//                   </InputLabel>
//                   <Select
//                     sx={{ backgroundColor: "#fff" }}
//                     labelId="demo-simple-select-helper-label"
//                     id="demo-simple-select-helper"
//                     value={destination || ""}
//                     label="--Blood Group--"
//                     onChange={(e) => setdestination(e.target.value)}
//                   >
//                     {city.map((el, i) => {
//                       return (
//                         <MenuItem key={i} value={el}>
//                           {el}{" "}
//                         </MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   aligntems: "center",
//                 }}
//               >
//                 <Stack spacing={1}>
//                   <Button variant="contained" onClick={onHandleCheck}>
//                     check
//                   </Button>
//                   <Button sx={{display: detaResp > 0 ?'flex':'none'}} onClick={() => {navigate("/availableriders");}}
//                     variant="contained"
//                   >
//                     View Available Riders
//                   </Button>
//                   <Typography variant="h6" sx={{ color: "red"  ,display: detaResp === 0 ?'flex':'none' }} >
//                     Sorry No Rides Available for the Given Date and time
//                   </Typography>
//                 </Stack>
//               </Grid>

//               <Stack
//                 direction={{ sm: "row", xs: "column" }}
//                 spacing={2}
//                 justifyContent={"center"}
//                 sx={{ mt: "1rem", mb: { xs: "2rem", md: 0 } }}
//               >
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     navigate("/availablerides");
//                   }}
//                 >
//                   Available Rides
//                 </Button>
//                 <Button
//                   onClick={() => navigate("/completedrides")}
//                   variant="contained"
//                 >
//                   Completed Rides{" "}
//                 </Button>
//               </Stack>
//             </Grid>
//           </Container>
//         </Card>

//         <DialogActions></DialogActions>
//       </Container>
//     </Dialog>
//   );
// };

// export default PopupComp;





















import { Box,Container,Dialog, DialogActions, Button, Slide, Card, Stack, Grid, Typography, MenuItem, Select, InputLabel, FormControl,} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { useDepToDesRidesMutation } from "../../services/api";
import { city } from "./citynames";
import { useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupComp = (props) => {
  const navigate = useNavigate();
  const [departure, setdeparture] = useState();
  const [destination, setdestination] = useState();
  const [dt, setDt] = useState();
  const [tim, setTim] = useState("10:00:00");
  const [respInfo, res] = useDepToDesRidesMutation();
  const [detaResp,setResponse] = useState()
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

  console.log(time, "time");

  console.log(res.data, 'data')
  
  const args = JSON.stringify({ date, time, departure, destination });
  const onHandleCheck = async () => {
    if ((departure && destination && date && time !== undefined) || null) {
      await respInfo(args);
      localStorage.setItem('depar',departure)
      localStorage.setItem('dest',destination)      
      localStorage.setItem('date',date)      
      localStorage.setItem('time',time)      
    }
  };

  useEffect(() => {

    console.log(res, "resonse");
    if (res.data) {
      navigate('/availableriders')
      console.log(res.data.success,'response.data')

      setResponse(res.data.success)
      if (res.data.success === 1) {
        localStorage.setItem('tripid',res.data.data[0].id)
      }
     
    }

  }, [res.data]);
console.log(detaResp,'sdsdskd')
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.setOpen}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={{ display: "flex", justifyContent: "end", height: 0 }}>
        <CloseIcon
          sx={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={() => props.setOpen(false)}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifycontent: "center",
            height: { md: "55vh" },
            width: { md: "60rem", xs: "100%" },
          }}
        >
          <Container>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
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
                  <DatePicker
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
                   <DemoContainer components={['TimePicker']}>
                    <TimePicker
                      views={['hours', 'minutes', 'seconds']}
                    label='Pick Time'
                    onChange={(newValue) => {
                      setTim(newValue);
                    }}
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
                  <Button variant="contained" onClick={onHandleCheck}>
                    check
                  </Button>
                  <Button sx={{display: detaResp > 0 ?'flex':'none'}} onClick={() => {navigate("/availableriders");}}
                    variant="contained"
                  >
                    View Available Riders
                  </Button>
                  <Typography variant="h6" sx={{ color: "red"  ,display: detaResp === 0 ?'flex':'none' }} >
                    Sorry No Rides Available for the Given Date and time
                  </Typography>
                </Stack>
              </Grid>

              <Stack
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
              </Stack>
            </Grid>
          </Container>
        </Card>

        <DialogActions></DialogActions>
      </Container>
    </Dialog>
  );
};

export default PopupComp;

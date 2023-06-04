import React from "react";
import img1 from "../../assets/path3.jpg";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import PopupComp from './PopupComp';
import PopupComp from "./PopupComp";

const Section1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* <Box component={'img'} src={img1} style={{height:'100vh' , width:'100%' }} sx={{}}></Box> */}
      <Box
        sx={{
          // backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Stack alignItems={"center"} justifyContent={"center"} spacing={2} >
            <Typography variant="h3" sx={{ color: "#000" }}>
              Path & part
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "black",textAlign: "center" }}
            >
              Carpooling shoudn't be that hard , right ?
            </Typography>

            <Button onClick={handleClickOpen} variant="contained">
              Ride now
            </Button>
            <PopupComp setOpen={setOpen} open={open} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Section1;

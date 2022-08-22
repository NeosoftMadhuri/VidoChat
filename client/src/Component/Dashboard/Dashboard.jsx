import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
// import { Container, Row, Col } from "react-bootstrap";
import { io } from "socket.io-client";
import axios from "axios";
import Videoplayer from "../VideoPlayer/Videoplayer";
import Options from "../Option/Option";
import Notification from "../Notification/Notification";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //
}));

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },
  logo: {
    width: "70px",
    height: "50px",
  },
  logoname: {
    fontFamily: "cursive",
  },
  boxConrainer: {
    backgroundColor: "light",
  },
  container: {
    backgroundColor: "red",
  },
  gif1: {
    width: "700px",
    height: "700px",
  },
  btn: {
    backgroundColor: "#4681f4",
    borderRadius: "10px",
    padding: "10px",
    fontWeight: "bold",
    position: "absulate",
    top: "40%",
    left: "20%",
    fontFamily: "cursive",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <img src="/Images/logo.jpg" alt="logo" className={classes.logo} />
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              className={classes.logoname}
            >
              VidoChat
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className={classes.boxConrainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Videoplayer />
          </Grid>
          <Grid item xs={12}>
            <Options>
              <Notification />
            </Options>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { SocketContext } from "../SocketContext";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "1px solid gray",
    margin: "10px",
  },
  gif2:{
    width:"500px",
    height:"290px"
  },
  nameStyale:{
    textAlign:"center",
    marginLeft:"10px",
    
  }
}));

export default function Videoplayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  // const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        {!stream && <img src="/Images/gif2.gif" alt="gif1" className={classes.gif2} />}
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={12} style={{backgroundColor:"darkgray"}}>
             
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className={classes.video}
              />
               <Typography variant="h6" gutterBottom className={classes.nameStyale}>
                {name || "Name"}
              </Typography>
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6} style={{backgroundColor:"darkgray"}} >
             
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className={classes.video}
              />
               <Typography variant="h6" gutterBottom className={classes.nameStyale}>
                {call.name || "Name"}
              </Typography>
            </Grid>
          </Paper>
        )}
      </Grid>
    </>
  );
}

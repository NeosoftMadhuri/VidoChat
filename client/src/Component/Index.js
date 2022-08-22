import React from "react";
import {Box,AppBar,Toolbar,Typography,makeStyles,Container,Grid,Button} from "@material-ui/core";
import {useNavigate} from 'react-router-dom'
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
  container: {

   
  },
  gif1:{
    width:"700px",
    height:"500px"
  },
  btn:{
    backgroundColor:"#4681f4",
    borderRadius:"10px",
    padding:"10px",
    fontWeight:"bold",
    position:"absulate",
    top:"40%",
    left:"20%",
    fontFamily:"cursive"
    
  }
}));

export default function Index() {
  const classes = useStyles();
  const navigate=useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <img src="/Images/logo.jpg" alt="logo" className={classes.logo} />
            <Typography
              variant="h6"
             
              sx={{ flexGrow: 1 }}
              className={classes.logoname}
            >
              Vido
            </Typography>
          </Toolbar>
        </AppBar>

        <Container fluid className={classes.container}>
          <Grid container>
            <Grid item xs={6} md={8}>
              <img src="/Images/gif1.gif" alt="gif1" className={classes.gif1} />
            </Grid>
            <Grid item xs={6} md={4}>
             <Button variant="outlined" className={classes.btn} onClick={()=>{navigate('/dashboard')}}>Lets get Started</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

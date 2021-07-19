import React from "react";
import "./App.css";

import Header from "./components/header/headerComponent";
import Footer from "./components/footer/footerComponent";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import BackgroundImage from "./images/background.jpg";

const useStyles = () => ({
  mainContainer: {
    height: "100%",
    overflow: "auto",
  },
  homepageContainer: {
    flexDirection: "column",
    height: "90%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "150px 0",
    "& h6": {
      maxWidth: "50%",
    },
  },
  trialContainer: {
    flexDirection: "column",
    height: "1000px",
    backgroundColor: "red",
  },
});

const App = ({ classes }) => {
  return (
    <Grid container className={classes.mainContainer}>
      <Header />
      <Grid container className={classes.homepageContainer} id="homepage">
        <Typography color="error" variant="h6">
          Hello I'm <strong style={{ color: "#4BFFA5" }}>erolyagizaydin</strong>
          , UX/UI Designer and Front-End Developer Based in Turkey.
        </Typography>
      </Grid>
      <Grid container className={classes.trialContainer}></Grid>
      <Footer />
    </Grid>
  );
};

export default withStyles(useStyles)(App);

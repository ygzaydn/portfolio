import React from "react";
import "./App.css";

import Header from "./components/header/headerComponent";
import Footer from "./components/footer/footerComponent";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import BackgroundImage from "./images/background.jpg";
import { compose } from "recompose";
import { withWindowProvider } from "./contexts/window/provider";
import { withWindowConsumer } from "./contexts/window/consumer";
import ServiceCard from "./components/serviceCard/serviceCard";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CodeIcon from "@material-ui/icons/Code";
import ColorizeIcon from "@material-ui/icons/Colorize";

const useStyles = () => ({
  mainContainer: {
    height: "100%",
    overflow: "auto",
  },
  homepageContainer: {
    flexDirection: "column",
    height: "80%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: (props) =>
      props.width < props.limit ? "cover" : "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "min(10%,150px) 0",
    "& h6": {
      maxWidth: (props) => (props.width < props.limit ? "80%" : "50%"),
    },
  },
  trialContainer: {
    flexDirection: "column",
    height: "1000px",
    backgroundColor: "red",
  },
  fillerContainer: {
    height: "10%",
  },
  serviceContainer: {
    padding: " 10%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const App = ({ classes, width, height }) => {
  return (
    <Grid container className={classes.mainContainer}>
      <Header />
      <Grid container className={classes.homepageContainer} id="home">
        <Typography color="error" variant="h6">
          Hello I'm <strong style={{ color: "#4BFFA5" }}>erolyagizaydin</strong>
          , UX/UI Designer and Front-End Developer Based in Turkey.
        </Typography>
      </Grid>
      <Grid container className={classes.fillerContainer} />
      <Grid container className={classes.serviceContainer} id="services">
        <Grid item xs={12} style={{ marginBottom: "5%" }}>
          <Typography color="primary" variant="h2">
            Services
          </Typography>
        </Grid>
        <ServiceCard
          logo=<CodeIcon />
          title={"Web Development"}
          description={"Web Development Description Section"}
        />
        <ServiceCard
          logo=<DeveloperModeIcon />
          title={"Responsive Design"}
          description={"Responsive Design Description Section"}
        />
        <ServiceCard
          logo=<ColorizeIcon />
          title={"UI/UX Development"}
          description={"UI/UX Development Description Section"}
        />
      </Grid>
      <Grid container className={classes.trialContainer}></Grid>
      <Footer />
    </Grid>
  );
};

export default compose(
  withWindowProvider,
  withWindowConsumer,
  withStyles(useStyles)
)(App);

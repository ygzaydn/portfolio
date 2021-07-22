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
import TechStack from "./components/techstack/techStack";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CodeIcon from "@material-ui/icons/Code";
import ColorizeIcon from "@material-ui/icons/Colorize";

const useStyles = () => ({
  homepageContainer: {
    flexDirection: "column",
    height: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "min(35%,150px) 0",
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
    <Grid container>
      <Grid container style={{ overflowY: "auto", height: "100vh" }}>
        <Header />
        <Grid container className={classes.homepageContainer} id="home">
          <Typography color="error" variant="h6">
            Hello I'm{" "}
            <strong style={{ color: "#4BFFA5" }}>erolyagizaydin</strong>, UX/UI
            Designer and Front-End Developer Based in Turkey.
          </Typography>
        </Grid>

        <Grid
          container
          className={classes.serviceContainer}
          id="services-desktop"
        >
          <Grid
            item
            xs={12}
            style={{ marginBottom: "5%" }}
            id="services-mobile"
          >
            <Typography color="primary" variant="h2">
              Services
            </Typography>
          </Grid>
          <ServiceCard
            logo={<CodeIcon />}
            title={"Web Apps"}
            description={
              "I develop dedicated software and applications with an efficient and functional front-end library - React."
            }
          />
          <ServiceCard
            logo={<DeveloperModeIcon />}
            title={"Responsive Design"}
            description={
              "I develop web-apps in responsive manner. Productions that I've created are responsive for different devices."
            }
          />
          <ServiceCard
            logo={<ColorizeIcon />}
            title={"UI/UX Development"}
            description={
              "Success of the digital product is a combination of user satisfaction and the achievement of business goals. The visual layer of software is crucial for this."
            }
          />
        </Grid>
        <Grid container className={classes.skillsContainer} id="stack-desktop">
          <Grid item xs={12} style={{ marginBottom: "5%" }} id="stack-mobile">
            <Typography color="primary" variant="h2">
              Tech Stack
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TechStack />
          </Grid>
        </Grid>

        <Grid container className={classes.trialContainer}></Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default compose(
  withWindowProvider,
  withWindowConsumer,
  withStyles(useStyles)
)(App);

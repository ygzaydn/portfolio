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
import ProjectCard from "./components/projectCard/projectCard";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CodeIcon from "@material-ui/icons/Code";
import ColorizeIcon from "@material-ui/icons/Colorize";

import ICCImage from "./images/icc.jpg";
import RidenrateImage from "./images/ridenrate.jpg";
import MellImage from "./images/mell.jpg";
import LibrejournalImage from "./images/librejournal.jpg";

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
  projectsGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem 0",
  },
  projectsContainer: {
    margin: "5rem 0",
  },
});

const App = ({ classes, width, height }) => {
  return (
    <Grid container>
      <Header />
      <Grid container style={{ height: "100vh" }}>
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
        <Grid
          container
          className={classes.projectsContainer}
          id="project-desktop"
        >
          <Grid item xs={12} style={{ marginBottom: "5%" }} id="project-mobile">
            <Typography color="primary" variant="h2">
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.projectsGrid}>
            <ProjectCard
              title="Icecrown Boost Community"
              description="ICC Boost Community"
              image={ICCImage}
              tech="Javascript - React - Redux - Firebase - Material UI - Node.js"
              link="https://shop-dot-pro-boost-test-env.ey.r.appspot.com/"
            />
          </Grid>
          <Grid item xs={12} className={classes.projectsGrid}>
            <ProjectCard
              title="Librejournal"
              description="Librejournal"
              image={LibrejournalImage}
              tech="Javascript - React - Redux - MongoDB - Material UI - Node.js"
              link="http://librejournal-fe.herokuapp.com/"
            />
          </Grid>
          <Grid item xs={12} className={classes.projectsGrid}>
            <ProjectCard
              title="Mell Beautiy Center"
              description="Mell Beautiy Center"
              image={MellImage}
              tech="Javascript - React - Firebase - Material UI"
              link="http://mellguzellikmerkezi.com/"
            />
          </Grid>
          <Grid item xs={12} className={classes.projectsGrid}>
            <ProjectCard
              title="Ride'n'Rate"
              description="Ride'n'Rate"
              image={RidenrateImage}
              tech="Javascript - HTML - CSS"
              link="http://ridenrate.herokuapp.com/"
            />
          </Grid>
        </Grid>
        <Grid container className={classes.trialContainer}></Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default compose(
  withWindowProvider,
  withWindowConsumer,
  withStyles(useStyles)
)(App);

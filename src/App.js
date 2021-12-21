import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/header/headerComponent";
import Footer from "./components/footer/footerComponent";
import ContactForm from "./components/contactForm/contactForm";

import { Grid, Typography, Grow } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import BackgroundImage from "./images/background3.jpg";
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
import CrownImage from "./images/CrownImage.png";
import GoldenLotusImage from "./images/goldenlotus.png";
import TodoImage from "./images/todo.png";

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
    padding: "10% 0 ",
    justifyContent: "space-around",
    alignItems: "center",
  },
  techContainer: {
    padding: "10% 0 ",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#4B6587",
    clipPath: "polygon(0 15%,100% 0, 100% 85%, 0 100%)",
  },
  serviceContainerMaxWidthGrid: {
    margin: "auto",
    maxWidth: (props) => props.maxWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  projectsGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "0.2rem 0",
  },
  projectsContainer: {
    padding: "10% 2rem",
  },
});

const App = ({ classes, width, height, firebase }) => {
  const [services, setServices] = useState(false);
  const [stack, setStack] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  const animation = (id) => {
    const element = document.getElementById(`${id}-desktop`);

    const elementDimension = element.getBoundingClientRect();
    let y = window.pageYOffset;

    let nec = y - elementDimension.y + 500;

    if (nec > 0) {
      switch (id) {
        case "services":
          setServices(true);
          break;
        case "stack":
          setStack(true);
          break;
        case "project":
          setProject(true);
          break;
        case "contact":
          setContact(true);
          break;
        default:
          break;
      }
    }

    window.addEventListener("scroll", () => {
      const element = document.getElementById(`${id}-desktop`);

      const elementDimension = element.getBoundingClientRect();
      let y = window.pageYOffset;

      let nec = y - elementDimension.y + 250;
      if (nec > 0)
        switch (id) {
          case "services":
            setServices(true);
            break;
          case "stack":
            setStack(true);
            break;
          case "project":
            setProject(true);
            break;
          case "contact":
            setContact(true);
            break;
          default:
            break;
        }
    });
  };

  useEffect(() => {
    animation("services");
    animation("stack");
    animation("project");
    animation("contact");

    const servicesPos = document.getElementById("services-desktop").offsetTop;
    const stackPos = document.getElementById("stack-desktop").offsetTop;
    const projectPos = document.getElementById("project-desktop").offsetTop;
    const contactPos = document.getElementById("contact-desktop").offsetTop;
    const height = window.innerHeight / 10;

    const headerElements = {
      home: document.getElementById("header-home"),
      services: document.getElementById("header-services"),
      stack: document.getElementById("header-stack"),
      projects: document.getElementById("header-projects"),
      contact: document.getElementById("header-contacts"),
    };

    const changeColorOfHeaderElement = (element) => {
      Object.keys(headerElements).forEach((el) => {
        headerElements[el].style.color = "#A4A4A4";
      });
      headerElements[element].style.color = "white";
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY < servicesPos - height) {
        changeColorOfHeaderElement("home");
      } else if (
        servicesPos - height < window.scrollY &&
        window.scrollY < stackPos - height
      ) {
        changeColorOfHeaderElement("services");
      } else if (
        stackPos - height < window.scrollY &&
        window.scrollY < projectPos - height
      ) {
        changeColorOfHeaderElement("stack");
      } else if (
        projectPos - height < window.scrollY &&
        window.scrollY < contactPos - height * 3
      ) {
        changeColorOfHeaderElement("projects");
      } else if (contactPos - height < window.scrollY) {
        changeColorOfHeaderElement("contact");
      }
    });
  }, []);

  return (
    <Grid container>
      <Header />
      <Grid container style={{ height: "100vh" }}>
        <Grid container className={classes.homepageContainer} id="home">
          <Typography color="error" variant="h6">
            Hello I'm{" "}
            <strong style={{ color: "#4BFFA5" }}>erolyagizaydin</strong>, React
            Developer Based in Turkey.
          </Typography>
        </Grid>
        <Grow in={services} disableStrictModeCompat>
          <Grid
            container
            className={classes.serviceContainer}
            id="services-desktop"
          >
            <Grid container className={classes.serviceContainerMaxWidthGrid}>
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
                  "I develop cutting-edge wireframes for your needs. "
                }
              />
            </Grid>
          </Grid>
        </Grow>
        <Grow in={stack} disableStrictModeCompat>
          <Grid container className={classes.techContainer} id="stack-desktop">
            <Grid container className={classes.serviceContainerMaxWidthGrid}>
              <Grid
                item
                xs={12}
                style={{ marginBottom: "5%" }}
                id="stack-mobile"
              >
                <Typography color="primary" variant="h2">
                  Tech Stack
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TechStack />
              </Grid>
            </Grid>
          </Grid>
        </Grow>
        <Grow in={project} disableStrictModeCompat>
          <Grid
            container
            className={classes.projectsContainer}
            id="project-desktop"
          >
            <Grid
              item
              xs={12}
              style={{ marginBottom: "5%" }}
              id="project-mobile"
            >
              <Typography color="primary" variant="h2">
                Projects
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Golden Lotus Boost Community"
                description="Golden Lotus boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                image={GoldenLotusImage}
                tech="Javascript - React - Firebase - Material UI"
                link="https://goldenlotus-website.web.app/"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Icecrown Boost Community"
                description="Icecrown boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                image={ICCImage}
                tech="Javascript - React - Firebase - Material UI - Node.js"
                link="https://icc-website-dc881.web.app"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Librejournal"
                description="Librejournal is a social media platform for local journalists. You can easily share stories about the events around you to react people. "
                image={LibrejournalImage}
                tech="Javascript - React - Redux - MongoDB - Material UI - Node.js"
                note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                link="http://librejournal-fe.herokuapp.com/"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Crown Clothing"
                description="Crown Clothing is a mimic of e-commerce website that is completely build on React."
                image={CrownImage}
                tech="Javascript - React - Firebase - Redux - Sass"
                note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                link="https://crown-clothing-fe.herokuapp.com/"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Mell Beautiy Center"
                description="Mell Beautiy Center is a beautiy center that located at İzmir / Turkey. This is the official website for the business."
                image={MellImage}
                tech="Javascript - React - Firebase - Material UI"
                link="https://mellguzellikmerkezi.com/"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Ride'n'Rate"
                description="Ride'n'Rate is a platform for users to evaluate their trips. Users can check those evaluations & ratings for future trips to have a better time on travel."
                image={RidenrateImage}
                tech="Javascript - HTML - CSS"
                note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                link="http://ridenrate.herokuapp.com/"
              />
            </Grid>
            <Grid item xs={12} className={classes.projectsGrid}>
              <ProjectCard
                title="Todo app"
                description="Simple todo app that build with the help of typescript, redux and saas."
                image={TodoImage}
                tech="Redux - Typescript - Sass"
                link="https://ygzaydn.github.io/todo"
              />
            </Grid>
          </Grid>
        </Grow>
        <Grow in={contact} disableStrictModeCompat>
          <ContactForm />
        </Grow>
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

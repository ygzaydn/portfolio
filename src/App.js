import React, { useEffect, useRef } from "react";
import "./App.css";
import Typed from "typed.js";

import Header from "./components/header/headerComponent";
import ContactForm from "./components/contactForm/contactForm";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import BackgroundImage from "./images/background6.jpg";
import BackgroundImageTech from "./images/background2.jpg";
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
import SongRecommenderImage from "./images/song-recommender.png";

const useStyles = () => ({
    homepageContainer: {
        flexDirection: "row",
        height: "60%",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "min(35%,150px) 0",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%)",
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
        padding: "5% 0 ",
        justifyContent: "space-around",
        alignItems: "center",
    },
    techContainer: {
        padding: (props) => (props.width < props.limit ? "20% 0" : "10% 0 "),
        justifyContent: "space-around",
        alignItems: "center",
        background: ` linear-gradient(#000000D1,#000000D1),url(${BackgroundImageTech})`,
        clipPath: "polygon(0 10%,100% 0, 100% 90%, 0 100%)",
        backgroundSize: "cover",
    },
    serviceContainerMaxWidthGrid: {
        margin: "auto",
        maxWidth: (props) => props.maxWidth,
        justifyContent: "center",
        alignItems: "center",
    },

    contactContainer: {
        margin: "auto",
        justifyContent: "center",
        padding: "0 10%",
        alignItems: "center",
        maxWidth: "100%",
        background: "#4B6587",
        clipPath: "polygon(0% 7.5%, 100% 0%, 100% 100%, 0% 100%)",
    },
    projectsGrid: {
        justifyContent: "center",
        padding: "0.5rem",
    },
    projectsContainer: {
        padding: "5% 2rem",
    },
    projectGrid: {
        display: "grid",
        "grid-template-columns": (props) =>
            props.width < props.limit ? "2fr 2fr" : "2fr 2fr 2fr",
        "grid-template-rows": (props) =>
            props.width < props.limit ? "2fr 2fr" : "2fr 2fr 2fr",
    },
});

const App = ({ classes, width, height, firebase, limit }) => {
    const el = useRef("");

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["erolyagizaydin"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: false,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Grid container>
            <Header />
            <Grid container style={{ height: "100vh" }}>
                <Grid container className={classes.homepageContainer} id="home">
                    <Grid
                        item
                        xs={6}
                        style={{
                            height: "100%",
                            paddingLeft: "20%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            variant="h4"
                            style={{ color: "white", textAlign: "start" }}
                        >
                            Hello I'm
                        </Typography>
                        <Typography
                            variant="h4"
                            style={{
                                textAlign: "start",
                                color: "rgb(75, 202, 135)",
                                fontWeight: "600",
                                fontSize: limit > width ? "1.5rem" : "4.5rem",
                                height: limit > width ? "1.75rem" : "5rem",
                            }}
                            ref={el}
                        />
                        <Typography
                            variant="h4"
                            style={{ color: "white", textAlign: "start" }}
                        >
                            a web developer
                        </Typography>
                    </Grid>
                    <Grid item xs={6} />
                </Grid>
                <Grid
                    container
                    className={classes.serviceContainer}
                    id="services-desktop"
                >
                    <Grid
                        container
                        className={classes.serviceContainerMaxWidthGrid}
                    >
                        <Grid
                            item
                            xs={12}
                            style={{ marginBottom: "5%" }}
                            id="services-mobile"
                        >
                            <Typography
                                color="primary"
                                variant={limit > width ? "h4" : "h2"}
                            >
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

                <Grid
                    container
                    className={classes.techContainer}
                    id="stack-desktop"
                >
                    <Grid
                        container
                        className={classes.serviceContainerMaxWidthGrid}
                    >
                        <Grid
                            item
                            xs={12}
                            style={{ marginBottom: "5%" }}
                            id="stack-mobile"
                        >
                            <Typography
                                color="secondary"
                                variant={limit > width ? "h4" : "h2"}
                            >
                                Tech Stack
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TechStack />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    className={`${classes.projectsContainer} ${classes.serviceContainerMaxWidthGrid}`}
                    id="project-desktop"
                >
                    <Grid
                        item
                        xs={12}
                        style={{ marginBottom: "5%" }}
                        id="project-mobile"
                    >
                        <Typography
                            color="primary"
                            variant={limit > width ? "h4" : "h2"}
                        >
                            Projects
                        </Typography>
                    </Grid>
                    <Grid container className={classes.projectGrid}>
                        <Grid className={classes.projectsGrid}>
                            <ProjectCard
                                title="Song Recommender"
                                description="Song recommender is a website to help you find similar songs based on your search. This project is powered by Last.fm API."
                                image={SongRecommenderImage}
                                tech="Javascript - Redux - React - SCSS- Firebase - Material UI"
                                link="https://song-recommender-001.web.app/"
                            />
                        </Grid>
                        <Grid className={classes.projectsGrid}>
                            <ProjectCard
                                title="Golden Lotus Boost Community"
                                description="Golden Lotus boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                                image={GoldenLotusImage}
                                tech="Javascript - React - Firebase - Material UI"
                                link="https://goldenlotus-website.web.app/"
                            />
                        </Grid>
                        <Grid className={classes.projectsGrid}>
                            <ProjectCard
                                title="Icecrown Boost Community"
                                description="Icecrown boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                                image={ICCImage}
                                tech="Javascript - React - Firebase - Material UI - Node.js"
                                link="https://icc-website-dc881.web.app"
                            />
                        </Grid>
                        <Grid className={classes.projectsGrid}>
                            <ProjectCard
                                title="Librejournal"
                                description="Librejournal is a social media platform for local journalists. You can easily share stories about the events around you to react people. "
                                image={LibrejournalImage}
                                tech="Javascript - React - Redux - MongoDB - Material UI - Node.js"
                                note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                                link="http://librejournal-fe.herokuapp.com/"
                            />
                        </Grid>
                        <Grid className={classes.projectsGrid}>
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
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{ marginBottom: "5%", paddingTop: "5%" }}
                    id="contact-mobile"
                    className={classes.contactContainer}
                >
                    <Typography
                        variant={limit > width ? "h4" : "h2"}
                        style={{ margin: "6rem 0 0 0" }}
                        color="secondary"
                    >
                        Contact
                    </Typography>
                    <ContactForm />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default compose(
    withWindowProvider,
    withWindowConsumer,
    withStyles(useStyles)
)(App);

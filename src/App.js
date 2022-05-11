import React, { useEffect, useRef } from "react";
import "./App.css";
import Typed from "typed.js";

import ContactForm from "./components/contactForm/contactForm";

import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import BackgroundImage from "./images/background6.jpg";
import BackgroundImageTech from "./images/background2.jpg";
import { useNavigate } from "react-router";
import { compose } from "recompose";

import { withWindowProvider } from "./contexts/window/provider";
import { withWindowConsumer } from "./contexts/window/consumer";

import ServiceCard from "./components/serviceCard/serviceCard";
import TechStack from "./components/techstack/techStack";
import ProjectCard from "./components/projectCard/projectCard";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CodeIcon from "@material-ui/icons/Code";
import ColorizeIcon from "@material-ui/icons/Colorize";
import ApiIcon from "@mui/icons-material/Api";

import KeyboardArrowUp from "./components/keyboardArrowUp/keyboardArrowUp";

import ICCImage from "./images/icc.jpg";
import RidenrateImage from "./images/ridenrate.jpg";
import MellImage from "./images/mell.jpg";
import LibrejournalImage from "./images/librejournal.jpg";
import CrownImage from "./images/CrownImage.jpg";
import GoldenLotusImage from "./images/goldenlotus.jpg";
import TodoImage from "./images/todo.jpg";
import SongRecommenderImage from "./images/song-recommender.jpg";
import ArgbotImage from "./images/argbot.jpg";
import IkinciElImage from "./images/ikincielproject.png";

const useStyles = () => ({
    homepageContainer: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "min(35%,150px) 0",
        minHeight: (props) => (props.limit < props.width ? "750px" : null),

        clipPath: (props) =>
            props.width > props.limit
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%)"
                : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%)",
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
        padding: "2rem 0 8rem 0 ",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: (props) => (props.width < props.limit ? "null" : "15vh"),
    },
    techContainer: {
        padding: (props) =>
            props.width < props.limit ? "15% 0" : "15vh 0 10% 0 ",
        justifyContent: "space-around",
        alignItems: "center",
        background: ` linear-gradient(#000000D1,#000000D1),url(${BackgroundImageTech})`,
        clipPath: (props) =>
            props.width > props.limit
                ? "polygon(0% 0%, 100% 0%, 100% 90%, 60% 90%, 50% 100%, 40% 90%, 0% 90%)"
                : "polygon(0% 0%, 100% 0%, 100% 95%, 60% 95%, 50% 100%, 40% 95%, 0% 95%)",
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
        paddingTop: "15vh",
        justifyContent: "center",
        padding: "0 10%",
        alignItems: "center",
        maxWidth: "100%",
        background: "#4B6587",
        clipPath: (props) =>
            props.width < props.limit
                ? "polygon(0% 3.5%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(0% 7.5%, 100% 0%, 100% 100%, 0% 100%)",
    },
    projectsGrid: {
        justifyContent: "center",
        padding: "0.5rem",
    },
    projectsContainer: {
        padding: (props) => (props.width < props.limit ? "5% 0" : "15vh 2rem"),
    },
    projectGrid: {
        display: "grid",
        "grid-template-columns": (props) =>
            props.width < props.limit ? "2fr 2fr" : "2fr 2fr 2fr",
        "grid-template-rows": (props) =>
            props.width < props.limit ? "2fr 2fr" : "2fr 2fr 2fr",
        gridRowGap: "2rem",
        gridColumnGap: "2rem",
        gridAutoFlow: "row dense",
        minWidth: "300px",
        maxWidth: (props) => (props.width < props.limit ? "80%" : null),
        margin: "0 auto",
    },
    servicesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        justifyItems: "center",
    },
    button: {
        marginTop: "2rem",
        border: "none",
        outline: "none",
        backgroundColor: "rgb(75, 202, 135)",
        padding: "1rem 2rem",
        borderRadius: 5,
        cursor: "pointer",
        color: "black",
        fontSize: "1.5rem",
        fontFamily: "Oxygen",
        "@media only screen and (max-width:900px)": {
            fontSize: "0.75rem",
        },
        transition: "all .4s",
        "&:hover": {
            backgroundColor: "#C8C6C6",
            color: "##4B6587",
        },
    },
});

const App = ({ classes, width, limit }) => {
    const el = useRef("");
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        const typed = new Typed(el.current, {
            strings: ["erolyagizaydin"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            showCursor: false,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Grid container>
            <KeyboardArrowUp />
            <Grid container style={{ height: "100vh" }}>
                <Grid container className={classes.homepageContainer} id="home">
                    <Grid
                        item
                        xs={12}
                        style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginTop: limit > width ? "0" : "5rem",
                            paddingLeft: "10%",
                            maxWidth: "1920px",
                            marginRight: "auto",
                            marginLeft: "auto",
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
                                textAlign: "end",
                                color: "rgb(75, 202, 135)",
                                fontWeight: "600",
                                fontSize: limit > width ? "1.5rem" : "4.5rem",
                                height: limit > width ? "1.75rem" : "",
                            }}
                            ref={el}
                        />
                        <Typography
                            variant="h4"
                            style={{ color: "white", textAlign: "end" }}
                        >
                            a web developer
                        </Typography>
                        <button
                            onClick={() => navigate("/blog")}
                            className={classes.button}
                        >
                            Check out my blog!
                        </button>
                    </Grid>
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
                                style={{
                                    textAlign: "start",
                                    paddingLeft: "2rem",
                                }}
                            >
                                Services
                            </Typography>
                        </Grid>
                        <Grid container className={classes.servicesGrid}>
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
                                    "I develop cutting-edge wireframes for your needs."
                                }
                            />
                            <ServiceCard
                                logo={<ApiIcon />}
                                title={"API Integration"}
                                description={
                                    "I integrate APIs for your applicaton."
                                }
                            />
                        </Grid>
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
                                style={{
                                    textAlign: "start",
                                    paddingLeft: "2rem",
                                }}
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
                            style={{ textAlign: "start", paddingLeft: "2rem" }}
                        >
                            Projects
                        </Typography>
                    </Grid>
                    <Grid container className={classes.projectGrid}>
                        <ProjectCard
                            title="Argbot"
                            description="Argbot is a clone of a crypto bot website. The website is not connected with any backend service, purpose is to show example cases."
                            image={ArgbotImage}
                            tech="Javascript - Redux - React - SCSS- Firebase - Material UI"
                            note="You can login with any id/password combination to check overall system."
                            link="https://argbotxyz.web.app"
                            size="huge"
                        />
                        <ProjectCard
                            title="Ikinci El Project"
                            description="İkinci el project is a platform to buy and sell products that've been used before."
                            image={IkinciElImage}
                            tech="Javascript - Redux - React - SCSS"
                            note="Please create an accout for yourself to surf around the platform - it's free to register!"
                            link="https://ikincielproject.web.app"
                            size="big"
                        />
                        <ProjectCard
                            title="Song Recommender"
                            description="Song recommender is a website to help you find similar songs based on your search. This project is powered by Last.fm API."
                            image={SongRecommenderImage}
                            tech="Javascript - Redux - React - SCSS- Firebase - Material UI"
                            link="https://song-recommender-001.web.app/"
                            size="big"
                        />
                        <Grid className={classes.projectsGrid}>
                            <ProjectCard
                                title="Golden Lotus Boost Community"
                                description="Golden Lotus boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                                image={GoldenLotusImage}
                                tech="Javascript - React - Firebase - Material UI"
                                link="https://goldenlotus-website.web.app/"
                            />
                        </Grid>
                        <ProjectCard
                            title="Icecrown Boost Community"
                            description="Icecrown boost community is one of the largest EU gold boost communities in video game World of Warcraft (WoW), housing some of the best players & guilds in the world "
                            image={ICCImage}
                            tech="Javascript - React - Firebase - Material UI - Node.js"
                            link="https://icc-website-dc881.web.app"
                        />
                        <ProjectCard
                            title="Librejournal"
                            description="Librejournal is a social media platform for local journalists. You can easily share stories about the events around you to react people. "
                            image={LibrejournalImage}
                            tech="Javascript - React - Redux - MongoDB - Material UI - Node.js"
                            note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                            link="http://librejournal-fe.herokuapp.com/"
                        />

                        <ProjectCard
                            title="Crown Clothing"
                            description="Crown Clothing is a mimic of e-commerce website that is completely build on React."
                            image={CrownImage}
                            tech="Javascript - React - Firebase - Redux - Sass"
                            note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                            link="https://crown-clothing-fe.herokuapp.com/"
                        />
                        <ProjectCard
                            title="Mell Beauty Center"
                            description="Mell Beauty Center is a beauty center that located at İzmir / Turkey. This is the official website for the business."
                            image={MellImage}
                            tech="Javascript - React - Firebase - Material UI"
                            link="https://mellguzellikmerkezi.com/"
                            size="big-end"
                        />
                        <ProjectCard
                            title="Ride'n'Rate"
                            description="Ride'n'Rate is a platform for users to evaluate their trips. Users can check those evaluations & ratings for future trips to have a better time on travel."
                            image={RidenrateImage}
                            tech="Javascript - HTML - CSS"
                            note=" Project is run on heroku, so it may not be loaded at first try, if this happens, please try to refresh page."
                            link="http://ridenrate.herokuapp.com/"
                        />

                        <ProjectCard
                            title="Todo app"
                            description="Simple todo app that build with the help of typescript, redux and saas."
                            image={TodoImage}
                            tech="Redux - Typescript - Sass"
                            link="https://ygzaydn.github.io/todo"
                        />
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
                        style={{ margin: "4rem 0 2rem 0" }}
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

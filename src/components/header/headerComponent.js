import React, { useEffect, useState } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { useNavigate, useLocation } from "react-router";

const useStyles = () => ({
    headerContainer: {
        justifyContent: "space-between",
        position: "fixed",
        alignItems: "center",
        top: 0,
        transition: "all 0.5s ease-out",
        height: "10%",
        minHeight: "80px",
    },
    headerMaxWidthGrid: {
        margin: "auto",
        maxWidth: "1440px",
        justifyContent: "center",
        alignItems: "center",
    },
    nameGrid: {
        display: "flex",
        justifyContent: "center",
        "& p": {
            fontSize: "2rem",
        },
        cursor: "pointer",
        "&:hover #name": {
            color: "#4BFFA5 !important",
        },
    },
    menuGrid: {
        display: "flex",
        justifyContent: "space-around",
        "& svg": {
            cursor: "pointer",
            fill: "#A4A4A4",
            "&:hover": {
                fill: "#4BFFA5",
            },
        },
        "& p": {
            fontSize: "1.2rem",
            cursor: "pointer",
            "&:hover": {
                color: "white",
            },
            transition: "all 0.25s ease-out",
        },
    },
});

const Header = ({ classes }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const limit = 900;

    const scrollTo = (element) => {
        console.log("asd");
        document.getElementById(`${element}`).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        let y = window.pageYOffset;
        let header = document.getElementById("header");
        if (header) {
            if (y) {
                header.style.backgroundColor = "black";
                header.style.borderBottom = "0.2px solid lightgray";
                header.style.zIndex = "500";
                header.style.padding = "0";
            } else {
                header.style.backgroundColor = "inherit";
                header.style.borderBottom = "none";
                header.style.padding = "2%";
            }
        }

        window.addEventListener("scroll", () => {
            let y = window.pageYOffset;
            let header = document.getElementById("header");
            if (header) {
                if (y) {
                    header.style.backgroundColor = "black";
                    header.style.borderBottom = "0.2px solid lightgray";
                    header.style.zIndex = "500";
                    header.style.padding = "0";
                } else {
                    header.style.backgroundColor = "inherit";
                    header.style.borderBottom = "none";
                    header.style.padding = "2%";
                }
            }
        });
    }, []);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navigateHome = (place) => {
        if (pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollTo(place), 500);
        } else {
            scrollTo(place);
        }
    };

    return (
        <Grid container className={classes.headerContainer} id="header">
            <Grid container className={classes.headerMaxWidthGrid}>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    className={classes.nameGrid}
                    onClick={() => navigateHome("home")}
                >
                    <Typography
                        color="secondary"
                        id="name"
                        style={{ transition: "all .4s" }}
                    >
                        erolyagiz
                    </Typography>
                    <Typography color="error">aydin</Typography>
                </Grid>
                {width > limit && (
                    <Grid item xs={5} className={classes.menuGrid}>
                        <Typography
                            color="secondary"
                            key="home-desktop"
                            id="header-home"
                            onClick={() => navigateHome("home")}
                        >
                            Home
                        </Typography>
                        <Typography
                            color="secondary"
                            key="services-desktop"
                            id="header-services"
                            onClick={() => navigateHome("services-desktop")}
                        >
                            Services
                        </Typography>
                        <Typography
                            color="secondary"
                            key="stack-desktop"
                            id="header-stack"
                            onClick={() => navigateHome("stack-desktop")}
                        >
                            Tech
                        </Typography>
                        <Typography
                            color="secondary"
                            key="project-desktop"
                            id="header-projects"
                            onClick={() => navigateHome("project-desktop")}
                        >
                            Projects
                        </Typography>
                        <Typography
                            color="secondary"
                            key="contact-desktop"
                            id="header-contacts"
                            onClick={() => navigateHome("contact-desktop")}
                        >
                            Contact
                        </Typography>
                        <Typography
                            color="secondary"
                            key="blog"
                            id="header-blog"
                            onClick={() => navigate("/blog")}
                        >
                            Blog
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default compose(withStyles(useStyles))(Header);

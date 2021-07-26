import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    withStyles,
    Menu,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
    headerContainer: {
        padding: "min(5%,50px)",
        justifyContent: "space-between",
        position: "fixed",
        alignItems: "center",
        top: 0,
        transition: "all 0.5s ease-out",
        height: "10%",
    },
    nameGrid: {
        display: "flex",
        "& p": {
            fontSize: "2rem",
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

const Header = ({ classes, width, limit }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const scrollTo = (element) => {
        document.getElementById(`${element}`).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
        setAnchorEl(null);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let y = window.pageYOffset;
            let header = document.getElementById("header");
            if (y) {
                header.style.backgroundColor = "black";
                header.style.borderBottom = "0.2px solid lightgray";
                header.style.padding = "min(3.5%,35px)";
                header.style.zIndex = "50";
            } else {
                header.style.backgroundColor = "inherit";
                header.style.borderBottom = "none";
                header.style.padding = "min(5%,50px)";
            }
        });
    }, []);

    return (
        <Grid container className={classes.headerContainer} id="header">
            <Grid item xs={4} className={classes.nameGrid}>
                <Typography color="secondary">erolyagiz</Typography>
                <Typography color="error">aydin</Typography>
            </Grid>
            {width > limit ? (
                <Grid item xs={5} className={classes.menuGrid}>
                    <Typography
                        color="secondary"
                        key="home-desktop"
                        onClick={() => scrollTo("home")}
                    >
                        Home
                    </Typography>
                    <Typography
                        color="secondary"
                        key="services-desktop"
                        onClick={() => scrollTo("services-desktop")}
                    >
                        Services
                    </Typography>
                    <Typography
                        color="secondary"
                        key="stack-desktop"
                        onClick={() => scrollTo("stack-desktop")}
                    >
                        Tech
                    </Typography>
                    <Typography
                        color="secondary"
                        key="project-desktop"
                        onClick={() => scrollTo("project-mobile")}
                    >
                        Projects
                    </Typography>
                    <Typography
                        color="secondary"
                        key="contact-desktop"
                        onClick={() => scrollTo("contact-mobile")}
                    >
                        Contacts
                    </Typography>
                </Grid>
            ) : (
                <Grid item xs={2} className={classes.menuGrid}>
                    <MenuIcon onClick={handleClick} aria-controls="menu" />
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        elevation={0}
                        getContentAnchorEl={null}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: "#000000",
                                border: "0.2px solid lightgray",
                                color: "#4BFFA5",
                            },
                        }}
                    >
                        <MenuItem
                            style={{ borderBottom: "0.5px solid lightgray" }}
                            key="home-mobile"
                            onClick={() => scrollTo("home")}
                        >
                            Home
                        </MenuItem>
                        <MenuItem
                            style={{ borderBottom: "0.5px solid lightgray" }}
                            onClick={() => scrollTo("services-mobile")}
                        >
                            Services
                        </MenuItem>
                        <MenuItem
                            style={{ borderBottom: "0.5px solid lightgray" }}
                            key="stack-mobile"
                            onClick={() => scrollTo("stack-mobile")}
                        >
                            Tech
                        </MenuItem>

                        <MenuItem
                            style={{ borderBottom: "0.5px solid lightgray" }}
                            key="project-mobile"
                            onClick={() => scrollTo("project-mobile")}
                        >
                            Projects
                        </MenuItem>
                        <MenuItem onClick={() => scrollTo("contact-mobile")}>
                            Contacts
                        </MenuItem>
                    </Menu>
                </Grid>
            )}
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);

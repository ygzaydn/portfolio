import React, { useEffect } from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
    footerContainer: {
        padding: "min(5%,50px)",
        justifyContent: (props) =>
            props.width > props.limit ? "space-between" : "flex-end",
        position: "fixed",
        bottom: 0,
        transition: "all 0.5s ease-out",
    },
    socialIcon: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& svg": {
            fill: "#A4A4A4",
            cursor: "pointer",
            "&:hover": {
                fill: "#4BFFA5",
            },
            transition: "all 0.25s ease-out",
        },
    },
    mail: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.25s ease-out",
    },
});

const Footer = ({ classes, limit, width }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let y = window.pageYOffset;
            let header = document.getElementById("footer");
            let socialIcon = document.getElementById("socialIcon");
            let mailBox = document.getElementById("mailBox");
            if (y) {
                header.style.padding = "min(2.5%,25px)";
                if (mailBox) {
                    mailBox.style.backgroundColor = "black";
                    mailBox.style.border = "0.2px lightgray solid";
                    mailBox.style.borderRadius = "10px";
                    mailBox.style.padding = "1%";
                }

                socialIcon.style.backgroundColor = "black";
                socialIcon.style.border = "0.2px lightgray solid";
                socialIcon.style.padding = "1%";
                socialIcon.style.borderRadius = "10px";
            } else {
                header.style.padding = "min(5%,50px)";

                if (mailBox) {
                    mailBox.style.backgroundColor = "transparent";
                    mailBox.style.border = "none";
                    mailBox.style.padding = "0";
                }

                socialIcon.style.backgroundColor = "transparent";
                socialIcon.style.border = "none";
                socialIcon.style.padding = "0";
            }
        });
    }, []);

    return (
        <Grid container className={classes.footerContainer} id="footer">
            {width > limit ? (
                <Grid
                    item
                    md={2}
                    xs={6}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    id="mailBox"
                >
                    <Grid container className={classes.mail}>
                        <Typography color="secondary" variant="subtitle1">
                            E-mail: ygzaydns@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            ) : null}

            <Grid
                item
                md={2}
                xs={6}
                className={classes.socialIcon}
                id="socialIcon"
            >
                <LinkedInIcon />
                <GitHubIcon />
                <TwitterIcon />
            </Grid>
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Footer);

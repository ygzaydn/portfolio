import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

import { ReactComponent as CSSLogo } from "../../logo/css-logo.svg";
import { ReactComponent as FirebaseLogo } from "../../logo/firebase-logo.svg";
import { ReactComponent as HTMLLogo } from "../../logo/html5-logo.svg";
import { ReactComponent as JavascriptLogo } from "../../logo/javascript-logo.svg";
import { ReactComponent as MongodbLogo } from "../../logo/mongodb-logo.svg";
import { ReactComponent as MuiLogo } from "../../logo/mui-logo.svg";
import { ReactComponent as NodejsLogo } from "../../logo/nodejs-logo.svg";
import { ReactComponent as ReactLogo } from "../../logo/react-logo.svg";
import { ReactComponent as ReduxLogo } from "../../logo/redux-logo.svg";
import { ReactComponent as SaasLogo } from "../../logo/saas-logo.svg";

const useStyles = () => ({
    logoGrid: {
        height: "6rem",
        padding: "0.5rem",
        margin: "0.5rem",
        position: "relative",
        "& h6": {
            position: "absolute",
            top: "50%",
            left: "50%",
            /* bring your own prefixes */
            transform: "translate(-50%, -50%)",
            display: "none",
            fontWeight: "bold",
        },
        "& svg": {
            height: (props) => (props.width < props.limit ? "3rem" : "4rem"),
            width: "auto",
            transition: "all 1s",
        },
        "&:hover": {
            "& svg": {
                filter: "blur(1.5rem) brightness(50%)",
            },
            "& h6": {
                display: "inherit",
            },
        },
    },
});

const TechStack = ({ classes }) => {
    return (
        <Grid container justifyContent="center" display="flex">
            <Grid item xs={3} className={classes.logoGrid}>
                <ReactLogo />
                <Typography variant="h6" color="secondary">
                    React
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <ReduxLogo />
                <Typography variant="h6" color="secondary">
                    Redux
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <SaasLogo />
                <Typography variant="h6" color="secondary">
                    Sass
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <HTMLLogo />
                <Typography variant="h6" color="secondary">
                    HTML
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <JavascriptLogo />
                <Typography variant="h6" color="secondary">
                    Javascript
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <CSSLogo />
                <Typography variant="h6" color="secondary">
                    CSS
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <MuiLogo />
                <Typography variant="h6" color="secondary">
                    Material UI
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <MongodbLogo />
                <Typography variant="h6" color="secondary">
                    MongoDB
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <FirebaseLogo />
                <Typography variant="h6" color="secondary">
                    Firebase
                </Typography>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <NodejsLogo />
                <Typography variant="h6" color="secondary">
                    Node.js
                </Typography>
            </Grid>
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(TechStack);

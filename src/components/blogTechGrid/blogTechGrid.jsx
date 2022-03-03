import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";

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
        height: "5rem",
        padding: "0.5rem",
        margin: "0.5rem",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        "& svg": {
            height: "4rem",
            width: "4rem",
            transition: "all 1s",
        },
        "&:hover": {
            "& svg": {
                filter: "blur(1.5rem) brightness(50%)",
            },
        },
    },
});

const TechStack = ({ classes, setTopic }) => {
    return (
        <Grid container display="flex" justifyContent="center">
            <Grid
                item
                xs={12}
                className={classes.logoGrid}
                onClick={() => setTopic("react")}
            >
                <ReactLogo />
                <Typography variant="h6" color="secondary">
                    React
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                className={classes.logoGrid}
                onClick={() => setTopic("redux")}
            >
                <ReduxLogo />
                <Typography variant="h6" color="secondary">
                    Redux
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <SaasLogo />
                <Typography variant="h6" color="secondary">
                    Sass
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <HTMLLogo />
                <Typography variant="h6" color="secondary">
                    HTML
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <JavascriptLogo />
                <Typography variant="h6" color="secondary">
                    Javascript
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <CSSLogo />
                <Typography variant="h6" color="secondary">
                    CSS
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <MuiLogo />
                <Typography variant="h6" color="secondary">
                    Material UI
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <MongodbLogo />
                <Typography variant="h6" color="secondary">
                    MongoDB
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                className={classes.logoGrid}
                onClick={() => setTopic("firebase")}
            >
                <FirebaseLogo />
                <Typography variant="h6" color="secondary">
                    Firebase
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.logoGrid}>
                <NodejsLogo />
                <Typography variant="h6" color="secondary">
                    Node.js
                </Typography>
            </Grid>
        </Grid>
    );
};

export default compose(withStyles(useStyles))(TechStack);

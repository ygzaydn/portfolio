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

import { blogTechnologies } from "../../logo";

const useStyles = () => ({
    techContainer: {
        display: "flex",
        justifyContent: "center",
        "@media only screen and (max-width:900px)": {
            display: "grid",
            gridAutoFlow: "column",
            justifyContent: "start",
            overflow: "auto",
            minHeight: "10rem",
            alignItems: "center",
        },
    },
    logoGrid: {
        height: "5rem",
        padding: "0.5rem",
        margin: "0.5rem",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        "& img": {
            height: "4rem",
            width: "4rem",
            transition: "all 1s",
        },
        "&:hover": {
            "& img": {
                filter: "blur(1.5rem) brightness(50%)",
            },
        },
        "@media only screen and (max-width:900px)": {
            padding: "0.25rem",
            margin: "0.25rem",
        },
    },
});

const TechStack = ({ classes, setTopic }) => {
    return (
        <Grid container className={classes.techContainer}>
            {blogTechnologies.map((el) => (
                <Grid
                    item
                    xs={12}
                    className={classes.logoGrid}
                    onClick={() => setTopic(el.name.toLowerCase())}
                >
                    <img
                        src={require(`../../logo/${el.logo}.svg`).default}
                        alt={`${el.logo}`}
                    />{" "}
                    <Typography variant="h6" color="secondary">
                        {el.name}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default compose(withStyles(useStyles))(TechStack);

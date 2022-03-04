import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";

import { blogTechnologies } from "../../logo";

const useStyles = () => ({
    techContainer: {
        display: "flex",
        justifyContent: "center",
        "@media only screen and (max-width:900px)": {
            display: "grid",
            gridAutoFlow: "column",
            justifyContent: "start",
            overflowY: "scroll",
            minHeight: "10rem",
            alignItems: "center",
            padding: "0 1rem",
            gridGap: ".5rem",
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
                    onClick={() => setTopic(el.key)}
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

import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

import { technologies } from "../../logo";

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
        "& img": {
            height: (props) => (props.width < props.limit ? "3rem" : "4rem"),
            width: "auto",
            transition: "all 1s",
        },
        "&:hover": {
            "& img": {
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
            {technologies.map((el) => (
                <Grid item xs={3} className={classes.logoGrid}>
                    <img
                        src={require(`../../logo/${el.logo}.svg`).default}
                        alt={`${el.logo}`}
                    />
                    <Typography variant="h6" color="secondary">
                        {el.name}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(TechStack);

import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
    serviceCardGrid: {
        border: "0.2px solid #4B6587",
        borderRadius: "20px",
        margin: "2.5%",
        height: (props) => (props.width < props.limit ? null : "25rem"),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all .5s ",
        padding: "1rem 2rem",
        maxWidth: 300,
        maxHeight: 350,
        "& svg": {
            fill: "#4B6587",
            height: "3rem",
            width: "3rem",
            transition: "all .5s ",
        },
        "&:hover": {
            background: "#4B6587",
            color: "white",
            "& svg": {
                fill: "white",
                transform: "scale(1.25)",
            },
        },
    },
    logoGrid: {
        padding: "1rem 0",
    },
});

const ServiceCard = ({ title, description, logo, classes }) => {
    return (
        <Grid item className={classes.serviceCardGrid} key={title}>
            <Grid
                item
                xs={12}
                style={{
                    display: "grid",
                    gridTemplateRows: "repeat(2, min-content) 1fr",
                    alignItems: "center",
                }}
            >
                <Grid item xs={12} className={classes.logoGrid}>
                    {logo}
                </Grid>
                <Typography variant="h6" style={{ padding: ".5rem 0" }}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" style={{ padding: ".5rem 0" }}>
                    {description}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default compose(withWindowConsumer, withStyles(useStyles))(ServiceCard);

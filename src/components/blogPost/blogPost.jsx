import React, { useState, useEffect } from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import ReactMarkdown from "react-markdown";

import { blogPosts } from "../../blog/index";
import { useParams } from "react-router";

import Background from "../../images/background4.jpg";

const useStyles = () => ({
    backgroundContainer: {
        backgroundImage: `url(${Background})`,
        height: "60vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
    },
    infoGrid: {
        position: "absolute",
        bottom: 0,
        left: 0,
        minWidth: "50%",
        backgroundColor: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 4rem",
        "& h4": {
            display: "inline",
            fontSize: "3rem",
        },
        "& h6": {
            textAlign: "end",
        },
    },
    markdownContainer: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bottom: "10rem",
    },
    markdownGrid: {
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "1vh 4rem",
        overflow: "auto",
        marginBottom: "10rem",
        textAlign: "start",
        fontSize: "160%",
        "@media only screen and (max-width:900px)": {
            padding: "1vh .4rem",
        },
        "& pre": {
            margin: "0 1rem",
            padding: "3rem 1rem",
            backgroundColor: "#ead9d9",
            maxWidth: "80vw",
            overflow: "auto",
            "@media only screen and (max-width:900px)": {
                width: "80vw",
            },
        },
    },
});

const TechStack = ({ classes }) => {
    const [myMarkdown, setMyMarkdown] = useState(null);
    const [info, setInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const postInfo = blogPosts.filter((el) => el.key === id)[0];
        setInfo({ title: postInfo.title, date: postInfo.createDate });
        import(`../../blog/files/${postInfo.name}.md`).then((module) =>
            fetch(module.default)
                .then((res) => res.text())
                .then((md) => {
                    setMyMarkdown(md);
                })
        );
    }, []);
    return (
        <>
            <Grid container className={classes.backgroundContainer}>
                {info && (
                    <Grid item xs={12} sm={6} className={classes.infoGrid}>
                        <Typography variant="h4">{info.title}</Typography>
                        <Typography variant="subtitle2">{info.date}</Typography>
                    </Grid>
                )}
            </Grid>

            <Grid container className={classes.markdownGrid}>
                <ReactMarkdown>{myMarkdown}</ReactMarkdown>
            </Grid>
        </>
    );
};

export default compose(withStyles(useStyles))(TechStack);

import React, { useState, useEffect } from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import ReactMarkdown from "react-markdown";

import { blogPosts } from "../../blog/index";
import { useParams } from "react-router";

import Background from "../../images/background4.jpg";
import rehypeHighlight from "remark-rehype";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";

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
        backgroundColor: "#f1f1f191",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 2rem",
        borderBottom: "1px solid black",
        "& h4": {
            width: "100%",
            fontSize: "2.15rem",
            marginBottom: "1rem",
        },
        "& h6": {
            textAlign: "end",
        },
        "& svg": {
            cursor: "pointer",
            position: "absolute",
            height: "2rem",
            width: "2rem",
            top: "15%",
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
        overflowX: "auto",
        marginBottom: "10rem",
        textAlign: "start",
        fontSize: "160%",

        "@media only screen and (max-width:900px)": {
            padding: "1vh .6rem",
        },
        "& pre": {
            border: ".2px solid black",
            margin: "1rem 2rem",
            padding: "2rem 1rem 2rem 1rem",
            backgroundColor: "#ead9d9",
            maxWidth: "80vw",
            position: "relative",
            "@media only screen and (max-width:900px)": {
                width: "70vw",
            },
            outlineStyle: "solid",
            outlineWidth: "1rem",
            outlineColor: "#ead9d9",
            "&:after": {
                content: "'</> Code'",
                textAlign: "center",
                backgroundColor: "#ead9d9",
                position: "absolute",
                top: "-.5rem",
                left: "1rem",
                zIndex: 55,
                overflow: "auto",
                padding: "0 1rem",
                border: ".1px solid black",
            },
        },
    },
});

const TechStack = ({ classes }) => {
    const [myMarkdown, setMyMarkdown] = useState(null);
    const [info, setInfo] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
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
                        <KeyboardReturnIcon onClick={() => navigate("/blog")} />
                        <Typography variant="h4">{info.title}</Typography>
                        <Typography variant="subtitle2">{info.date}</Typography>
                    </Grid>
                )}
            </Grid>

            <Grid container className={classes.markdownGrid}>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {myMarkdown}
                </ReactMarkdown>
            </Grid>
        </>
    );
};

export default compose(withStyles(useStyles))(TechStack);

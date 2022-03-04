import React, { useState } from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import Background from "../../images/background3.jpg";

import BlogTechGrid from "../../components/blogTechGrid/blogTechGrid";

import { blogPosts } from "../../blog/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = () => ({
    blogHeadGrid: {
        minHeight: "100vh",
        backgroundImage: `linear-gradient(#00000081, #00000081), url(${Background}) `,
        backgroundSize: "cover",
        paddingTop: "10vh",
        flexDirection: "column",
    },
    blogTitle: {
        color: "rgb(75, 202, 135)",

        paddingTop: "5rem",
        "@media only screen and (max-width:900px)": {
            paddingTop: "2rem",
        },
    },
    innerGrid: {
        backgroundColor: "#000000d2",
        borderRadius: 20,
        padding: "1rem 2rem",
        margin: "0 2rem",
        height: "30rem",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",

        "@media only screen and (max-width:900px)": {
            height: "inherit",
            margin: "2rem 1rem",
            maxHeight: "20rem",
            padding: "1rem .4rem",
        },
    },
    contentGrid: {
        marginTop: "5rem",
        padding: "2rem 4rem",
        "@media only screen and (max-width:900px)": {
            padding: "0.2rem 0.4rem",
            margin: "1rem 0",
        },
    },
    innerTitle: {
        color: "#fff",
        padding: "1rem 2rem 3rem 2rem",
        "@media only screen and (max-width:900px)": {
            padding: "1rem 2rem",
        },
    },
    postDetailGrid: {
        display: "flex",
        maxHeight: "5rem",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "1rem 2rem",
        textAlign: "start",
        transition: "all .4s",
        margin: "0 0 1rem 0",
        "&:hover": {
            backgroundColor: "rgb(75, 202, 135)",
            borderRadius: 5,
        },
        "& img": {
            height: "4rem",
            width: "auto",
        },
        "@media only screen and (max-width:900px)": {
            padding: "1rem 0.2rem",
        },
    },
    whiteColor: {
        color: "#fff",
    },
});

const Blog = ({ classes }) => {
    const [mytopic, setMyTopic] = useState(null);
    const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (mytopic === null) {
            setFilteredBlogPosts(blogPosts);
        } else {
            setFilteredBlogPosts(
                blogPosts.filter(({ topic }) => topic === mytopic)
            );
        }
    }, [mytopic]);

    return (
        <Grid>
            <Grid container className={classes.blogHeadGrid}>
                <Typography variant="h1" className={classes.blogTitle}>
                    Blog
                </Typography>
                <Grid container className={classes.contentGrid}>
                    <Grid item xs={12} sm={4} className={classes.leftGrid}>
                        <Grid item xs={12} className={classes.innerGrid}>
                            <Typography
                                variant="h6"
                                className={classes.innerTitle}
                            >
                                Topics
                            </Typography>
                            <BlogTechGrid setTopic={setMyTopic} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.rightGrid}>
                        <Grid item xs={12} className={classes.innerGrid}>
                            <Typography
                                variant="h6"
                                className={classes.innerTitle}
                            >
                                Posts
                            </Typography>
                            {filteredBlogPosts.map(
                                ({ title, logoName, createDate, key }) => (
                                    <Grid
                                        item
                                        xs={12}
                                        key={title}
                                        className={classes.postDetailGrid}
                                        onClick={() => navigate(`/blog/${key}`)}
                                    >
                                        <img
                                            src={
                                                require(`../../logo/${logoName}.svg`)
                                                    .default
                                            }
                                            alt={`${logoName}`}
                                        />
                                        <Typography
                                            variant="h6"
                                            className={classes.whiteColor}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            className={classes.whiteColor}
                                        >
                                            {createDate}
                                        </Typography>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default compose(withStyles(useStyles))(Blog);

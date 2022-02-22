import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
    Grid,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Button,
} from "@material-ui/core";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
    root: {
        display: "flex",
        minHeight: (props) => (props.width < props.limit ? "15rem" : "20rem"),
        padding: (props) => (props.width < props.limit ? "0" : "1rem"),
        backgroundColor: "transparent",
        border: "2px solid lightgray",
        width: "100%",
        position: "relative",
        borderRadius: 20,
        "&:hover": {
            cursor: "pointer",
            "& h4": {
                textShadow:
                    "2px 2px 0 #4B6587, 2px -2px 0 #4B6587, -2px 2px 0 #4B6587, -2px -2px 0 #4B6587, 2px 0px 0 #4B6587, 0px 2px 0 #4B6587, -2px 0px 0 #4B6587, 0px -2px 0 #4B6587",
                display: (props) =>
                    props.width > props.limit ? "inherit" : "hidden",
                zIndex: 50,
                color: "black",
            },
            "& div": {
                "& div": {
                    transform: "scale(1.5)",
                    overflow: "hidden",
                    filter: "brightness(10%)",
                },
            },
        },
    },

    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "90%",
    },
    cover: {
        height: "100%",
        backgroundSize: "cover",
        transition: "all .5s",
    },
    coverDialog: {
        height: (props) => (props.width < props.limit ? "10rem" : "20rem"),
        backgroundSize: "cover",
        transition: "all .5s",
    },
    projectCardGrid: {
        "& h4": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontWeight: 800,
            display: "none",
            textTransform: "uppercase",
        },
    },

    dialogImageGrid: {
        padding: "0.5rem",
    },
    dialogTextGrid: {
        padding: "0.5rem",
    },
    dialogContainer: {
        borderBottom: "0.2px solid lightgray",
    },
    gridSize: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        gridColumn: (props) =>
            props.size === "big"
                ? props.width < props.limit
                    ? "1/3"
                    : "1/3"
                : props.size === "big-end"
                ? props.width < props.limit
                    ? "1/3"
                    : "2/4"
                : props.size === "huge"
                ? props.width < props.limit
                    ? "1/3"
                    : "1/3"
                : null,
        gridRow: (props) => (props.size === "huge" ? "1/3" : null),
    },
});

const ProjectCard = ({
    classes,
    title,
    description,
    image,
    tech,
    link,
    note,
    limit,
    width,
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.gridSize}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography
                        color="primary"
                        variant={width < limit ? "h6" : "h4"}
                        style={{
                            textAlign: "center",
                            padding: "1rem 2rem",
                            borderBottom: "0.1px lightgray solid",
                        }}
                    >
                        {title}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container className={classes.dialogContainer}>
                        <Grid item xs={12} className={classes.dialogImageGrid}>
                            <CardMedia
                                className={classes.coverDialog}
                                image={image}
                                title={title}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.dialogTextGrid}>
                            <DialogContentText>
                                <Typography
                                    variant={
                                        width < limit
                                            ? "subtitle1"
                                            : "subtitle1"
                                    }
                                >
                                    {description}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText>
                                <Typography
                                    variant={
                                        width < limit
                                            ? "subtitle2"
                                            : "subtitle1"
                                    }
                                >
                                    Stack: {tech}
                                </Typography>
                            </DialogContentText>
                            {note && (
                                <DialogContentText
                                    style={{
                                        borderTop: "0.01px solid lightgray",
                                        padding: "12px 0",
                                        marginBottom: "0",
                                    }}
                                >
                                    <Typography variant="subtitle2">
                                        Note: {note}
                                    </Typography>
                                </DialogContentText>
                            )}
                        </Grid>
                    </Grid>

                    <DialogActions>
                        <Button
                            onClick={() => {
                                window.open(link, "_blank");
                            }}
                            color="primary"
                            variant="contained"
                        >
                            Click to proceed
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <Card className={classes.root} onClick={handleClickOpen}>
                <Grid item xs={12} className={classes.projectCardGrid}>
                    <CardMedia
                        className={classes.cover}
                        image={image}
                        title={title}
                    />
                    <Typography color="primary" variant="h4">
                        {title}
                    </Typography>
                </Grid>
            </Card>
        </div>
    );
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default compose(withWindowConsumer, withStyles(useStyles))(ProjectCard);

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

const useStyles = () => ({
    root: {
        display: "flex",
        height: "20rem",
        padding: "1.5rem 2rem",
        backgroundColor: "black",
        border: "2px solid lightgray",
        width: "60%",
        position: "relative",
        "&:hover": {
            cursor: "pointer",
            "& h6": {
                display: "inherit",
                zIndex: 50,
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
        height: "20rem",
        backgroundSize: "cover",
        transition: "all .5s",
    },
    projectCardGrid: {
        "& h6": {
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
        padding: "1rem",
    },
    dialogTextGrid: {
        padding: "1rem",
    },
    dialogContainer: {
        borderBottom: "0.2px solid lightgray",
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
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    <Typography
                        color="primary"
                        variant="h4"
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
                                className={classes.cover}
                                image={image}
                                title={title}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.dialogTextGrid}>
                            <DialogContentText>
                                <Typography variant="subtitle1">
                                    {description}
                                </Typography>
                            </DialogContentText>
                            <DialogContentText>
                                <Typography variant="subtitle2">
                                    Stack: {tech}
                                </Typography>
                            </DialogContentText>
                            {note && (
                                <DialogContentText
                                    style={{
                                        borderTop: "0.01px solid lightgray",
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
                    <Typography color="primary" variant="h6">
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

export default compose(withStyles(useStyles))(ProjectCard);

import React, { useState } from "react";

import {
    Grid,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";

import { compose } from "recompose";
import { withFirebaseConsumer } from "../../contexts/firebase/index";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";

import { v4 as uuidv4 } from "uuid";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
    contactContainer: {
        padding: "2rem 2rem 5rem 2rem",
    },
    contactGrid: {
        display: "flex",
        justifyContent: "center",
        margin: "0.2rem 0",
        alignItems: "center",
    },
    root: {
        width: (props) => (props.limit < props.width ? "60%" : "100%"),

        "& .MuiInputBase-input": {
            color: "#f1f1f1",
        },
        "& .MuiFormLabel-root": {
            color: "#C8C6C6",
        },
    },
    dialogBox: {
        "& .MuiDialog-paperScrollPaper": {
            backgroundColor: "#C8C6C6",
            border: "0.2px solid lightgray",
        },
    },
    footerContainer: {
        padding: "min(5%,50px)",
        justifyContent: "center",

        bottom: 0,
        transition: "all 0.5s ease-out",
    },
    socialIcon: {
        display: "flex",

        justifyContent: "space-evenly",
        alignItems: "center",
        "& svg": {
            fill: "#C8C6C6",
            cursor: "pointer",
            "&:hover": {
                fill: "#f1f1f1",
            },
            transition: "all 0.25s ease-out",
        },
    },
    fromGrid: {
        margin: "auto",
        borderRight: (props) =>
            props.width < props.limit ? null : "0.2px solid lightgray",
        borderBottom: (props) =>
            props.width > props.limit ? null : "0.2px solid lightgray",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
    },
    button: {
        marginTop: "3rem",
        "& .MuiButton-contained.Mui-disabled": {
            backgroundColor: "#f1f1f1 !important",
        },
    },
});

const ContactForm = ({ classes, firebase, width, limit }) => {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
        uuid: uuidv4(),
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addInfo = (infoType) => (event) =>
        setMessage({ ...message, [infoType]: event.target.value });

    const sendInfoToDb = (uuid, info) => {
        handleClickOpen();
        firebase.doPushNewMessage(uuid, info);
    };

    const checkFields = () => {
        if (
            message.name.length > 0 &&
            message.email.length > 0 &&
            message.message.length > 0
        ) {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            const match = message.email.match(regex);
            if (match) {
                return true;
            }
        }
        return false;
    };

    return (
        <Grid
            container
            className={classes.contactContainer}
            id="contact-desktop"
        >
            <Grid container>
                <Grid item xs={12} md={6} className={classes.fromGrid}>
                    <Grid container>
                        <Grid item xs={12} className={classes.contactGrid}>
                            <TextField
                                label="Name"
                                required
                                color="secondary"
                                className={classes.root}
                                onChange={addInfo("name")}
                                classes={{
                                    root: classes.root,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} className={classes.contactGrid}>
                            <TextField
                                label="E-mail"
                                color="secondary"
                                required
                                onChange={addInfo("email")}
                                className={classes.root}
                                classes={{
                                    root: classes.root,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} className={classes.contactGrid}>
                            <TextField
                                label="Message"
                                color="secondary"
                                required
                                onChange={addInfo("message")}
                                multiline
                                rows={3}
                                className={classes.root}
                                classes={{
                                    root: classes.root,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={classes.contactGrid}>
                        <Button
                            variant="outlined"
                            disabled={!checkFields()}
                            className={classes.button}
                            color="secondary"
                            onClick={() => sendInfoToDb(message.uuid, message)}
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ margin: "auto", padding: "2rem 0" }}
                >
                    <Grid item xs={12}>
                        <Typography color="secondary" variant="h6">
                            ygzaydns@gmail.com
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        className={classes.footerContainer}
                        id="footer"
                    >
                        <Grid
                            item
                            xs={6}
                            className={classes.socialIcon}
                            id="socialIcon"
                        >
                            <LinkedInIcon
                                onClick={() => {
                                    window.location.href =
                                        "https://tr.linkedin.com/in/erol-ya%C4%9F%C4%B1z-ayd%C4%B1n-208517a9";
                                }}
                            />
                            <GitHubIcon
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/ygzaydn";
                                }}
                            />
                            <TwitterIcon
                                onClick={() => {
                                    window.location.href =
                                        "https://twitter.com/aydnygz";
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                className={classes.dialogBox}
            >
                <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                >
                    <Typography color="primary" variant="h6">
                        Successful
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="subtitle1">
                            I have received your message, you will get an e-mail
                            as a response.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default compose(
    withWindowConsumer,
    withFirebaseConsumer,
    withStyles(useStyles)
)(ContactForm);

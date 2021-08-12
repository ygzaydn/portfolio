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

import { v4 as uuidv4 } from "uuid";

const useStyles = () => ({
    contactContainer: {
        padding: "10% 2rem",
    },
    contactGrid: {
        display: "flex",
        justifyContent: "center",
        margin: "0.2rem 0",
        alignItems: "center",
    },
    root: {
        width: "50%",
        maxWidth: "750px",
        "& .MuiInputBase-root": {
            color: "#A4A4A4",
        },
        "& .MuiInputBase-inpıt": {
            color: "black",
        },
        "& .MuiFormLabel-root": {
            color: "#A4A4A4",
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "#A4A4A4",
        },
    },
    dialogBox: {
        "& .MuiDialog-paperScrollPaper": {
            backgroundColor: "black",
            border: "0.2px solid lightgray",
        },
    },
    button: {
        "&.Mui-disabled": {
            backgroundColor: "#4BFFA5",
        },
    },
});

const ContactForm = ({ classes, firebase }) => {
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
            <Grid
                item
                xs={12}
                style={{ marginBottom: "5%" }}
                id="contact-mobile"
            >
                <Typography color="primary" variant="h2">
                    Contact
                </Typography>
            </Grid>
            <Grid container style={{ height: "25rem" }}>
                <Grid item xs={12} className={classes.contactGrid}>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        color="primary"
                        required
                        className={classes.root}
                        onChange={addInfo("name")}
                        classes={{
                            root: classes.root,
                        }}
                    />
                </Grid>

                <Grid item xs={12} className={classes.contactGrid}>
                    <TextField
                        id="standard-basic"
                        label="E-mail"
                        color="primary"
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
                        id="standard-basic"
                        label="Message"
                        color="primary"
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
                <Grid item xs={12} className={classes.contactGrid}>
                    <Button
                        variant="contained"
                        disabled={!checkFields()}
                        className={classes.button}
                        color="primary"
                        onClick={() => sendInfoToDb(message.uuid, message)}
                    >
                        Send
                    </Button>
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
                        <Typography color="secondary" variant="subtitle1">
                            I have received your message, you will get an e-mail
                            as a response.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close{" "}
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default compose(
    withFirebaseConsumer,
    withStyles(useStyles)
)(ContactForm);

import React, { useEffect, useRef } from "react";

import { withStyles } from "@material-ui/core";
import { compose } from "recompose";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const useStyles = () => ({
    upScrollDiv: {
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "50px",
        backgroundColor: "rgb(75, 202, 135)",
        borderRadius: "10px",
        height: "50px",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 5000,

        "& svg": {
            height: 40,
            width: 40,
            fill: "white",
        },
    },
    "@global": {
        "@keyframes fade": {
            "0%": {
                opacity: "0",
                display: "none",
            },
            "100%": {
                opacity: "1",
                display: "flex",
            },
        },
        "@keyframes reverseFade": {
            "0%": {
                opacity: "1",
                display: "flex",
            },
            "100%": {
                opacity: "0",
                display: "none",
            },
        },
    },
});

const KeyboardArrowUp = ({ classes }) => {
    const scrollRef = useRef(null);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (scrollRef.current !== null) {
            const style = scrollRef.current.style;
            if (window.pageYOffset < 150) {
                style.animationName = "reverseFade";
                style.animationDuration = ".4s";
                style.animationFillMode = "forwards";
            } else {
                style.animationName = "fade";
                style.animationDuration = ".4s";
                style.animationFillMode = "forwards";
                style.display = "flex";
            }
        }
    };

    return (
        <div
            className={classes.upScrollDiv}
            onClick={() => {
                scrollToTop();
            }}
            ref={scrollRef}
        >
            <KeyboardArrowUpIcon />
        </div>
    );
};

export default compose(withStyles(useStyles))(KeyboardArrowUp);

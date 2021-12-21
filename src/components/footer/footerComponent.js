import React from "react";
import { Grid, withStyles } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
  footerContainer: {
    padding: "min(5%,50px)",
    justifyContent: (props) =>
      props.width > props.limit ? "space-between" : "flex-end",
    position: "fixed",
    bottom: 0,
    transition: "all 0.5s ease-out",
  },
  socialIcon: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& svg": {
      fill: "#A4A4A4",
      cursor: "pointer",
      "&:hover": {
        fill: "#4BFFA5",
      },
      transition: "all 0.25s ease-out",
    },
  },
  mail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.25s ease-out",
  },
});

const Footer = ({ classes, limit, width }) => {
  return (
    <Grid container className={classes.footerContainer} id="footer">
      {width > limit ? (
        <Grid
          item
          md={2}
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="mailBox"
        >
          <Grid container className={classes.mail}></Grid>
        </Grid>
      ) : null}

      <Grid item md={2} xs={6} className={classes.socialIcon} id="socialIcon">
        <LinkedInIcon
          onClick={() => {
            window.location.href =
              "https://tr.linkedin.com/in/erol-ya%C4%9F%C4%B1z-ayd%C4%B1n-208517a9";
          }}
        />
        <GitHubIcon
          onClick={() => {
            window.location.href = "https://github.com/ygzaydn";
          }}
        />
        <TwitterIcon
          onClick={() => {
            window.location.href = "https://twitter.com/aydnygz";
          }}
        />
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Footer);

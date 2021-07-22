import React from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";

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
    position: "sticky",
    bottom: 0,
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
});

const Footer = ({ classes, limit, width }) => {
  return (
    <Grid container className={classes.footerContainer} id="footer">
      {width > limit ? (
        <Grid item md={4} xs={6}>
          <Grid container>
            <Typography color="secondary" variant="subtitle1">
              E-mail: ygzaydns@gmail.com
            </Typography>
          </Grid>
        </Grid>
      ) : null}

      <Grid item md={2} xs={6} className={classes.socialIcon}>
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Footer);

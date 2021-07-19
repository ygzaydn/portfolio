import React from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = () => ({
  footerContainer: {
    padding: "50px",
    justifyContent: "space-between",
    position: "sticky",
    bottom: 0,
  },
  socialIcon: {
    display: "flex",
    justifyContent: "space-evenly",
    "& svg": {
      fill: "#A4A4A4",
      cursor: "pointer",
      "&:hover": {
        fill: "white",
      },
      transition: "all 0.25s ease-out",
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <Grid container className={classes.footerContainer}>
      <Grid item xs={4}>
        <Grid container>
          <Typography color="secondary">E-mail: ygzaydns@gmail.com</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2} className={classes.socialIcon}>
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Footer);

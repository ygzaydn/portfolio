import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

const useStyles = () => ({
  headerContainer: {
    padding: "50px",
    justifyContent: "space-between",
    position: "sticky",
    alignItems: "center",
    top: 0,
  },
  nameGrid: {
    display: "flex",
    "& p": {
      fontSize: "2rem",
    },
  },
  menuGrid: {
    display: "flex",
    justifyContent: "space-around",
    "& p": {
      fontSize: "1.2rem",
      cursor: "pointer",
      "&:hover": {
        color: "white",
      },
      transition: "all 0.25s ease-out",
    },
  },
});

const Header = ({ classes }) => {
  return (
    <Grid container className={classes.headerContainer}>
      <Grid item xs={4} className={classes.nameGrid}>
        <Typography color="secondary">erolyagiz</Typography>
        <Typography color="error">aydin</Typography>
      </Grid>
      <Grid item xs={5} className={classes.menuGrid}>
        <Typography color="secondary">Home</Typography>
        <Typography color="secondary">Resume</Typography>
        <Typography color="secondary">Works</Typography>
        <Typography color="secondary">Blogs</Typography>
        <Typography color="secondary">Contacts</Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Header);

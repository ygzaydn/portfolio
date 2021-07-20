import React from "react";

import { Grid, Paper, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
  serviceCardGrid: {
    border: "1px solid #A4A4A4",
    padding: "2.5%",
    margin: "2.5%",
  },
  logoGrid: {
    "& svg": {
      fill: "#4BFFA5",
      height: "50px",
      width: "50px",
    },
  },
});

const ServiceCard = ({ title, description, logo, classes }) => {
  return (
    <Grid item md={3} xs={5} className={classes.serviceCardGrid} key={title}>
      <Paper style={{ backgroundColor: "inherit" }}>
        <Grid container>
          <Grid item xs={12} className={classes.logoGrid}>
            {logo}
          </Grid>
          <Grid item xs={12}>
            <Typography color="error" variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="secondary" variant="subtitle1">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(ServiceCard);

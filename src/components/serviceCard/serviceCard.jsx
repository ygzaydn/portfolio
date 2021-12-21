import React from "react";

import { Grid, Typography, withStyles } from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
  serviceCardGrid: {
    border:"0.2px solid #4B6587",
    borderRadius:"20px",
    padding: "2.5%",
    margin: "2.5%",
    height: "25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    transition:"all .5s ",
    "& svg": {
      fill: "#4B6587",
      height: "50px",
      width: "50px",
      transition:"all .5s ",
    },
    "&:hover":{
      background:"#4B6587",
      color:'white',
      "& svg": {
        fill: "white",
        transform:"scale(1.25)"
      },

    }
  },
  logoGrid: {
    padding:"2vh 0",
  },
});

const ServiceCard = ({ title, description, logo, classes }) => {
  return (
    <Grid item md={3} xs={9} className={classes.serviceCardGrid} key={title}>
        <Grid container>
          <Grid item xs={12} className={classes.logoGrid}>
            {logo}
          </Grid>
          <Grid item xs={12} style={{padding:'2vh 0', display:'flex', justifyContent:'space-around', flexDirection:"column"}}>
            <Typography  variant="h6">
              {title}
            </Typography>

            <Typography variant="subtitle1">
              {description}
            </Typography>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(ServiceCard);

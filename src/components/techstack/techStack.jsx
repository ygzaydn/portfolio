import React from "react";

import {
  Grid,
  withStyles,
} from "@material-ui/core";
import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

import { ReactComponent as CSSLogo } from "../../logo/css-logo.svg";
import { ReactComponent as FirebaseLogo } from "../../logo/firebase-logo.svg";
import { ReactComponent as HTMLLogo } from "../../logo/html5-logo.svg";
import { ReactComponent as JavascriptLogo } from "../../logo/javascript-logo.svg";
import { ReactComponent as MongodbLogo } from "../../logo/mongodb-logo.svg";
import { ReactComponent as MuiLogo } from "../../logo/mui-logo.svg";
import { ReactComponent as NodejsLogo } from "../../logo/nodejs-logo.svg";
import { ReactComponent as ReactLogo } from "../../logo/react-logo.svg";
import { ReactComponent as ReduxLogo } from "../../logo/redux-logo.svg";
import { ReactComponent as SaasLogo } from "../../logo/saas-logo.svg";

const useStyles = () => ({
  logoGrid:{
    height:"8rem",
    padding:"1rem",
    margin:"1rem",
    "& svg":{
      height:'4rem',
      width:'auto',
      transition:"all .5s",
    },
    "&:hover":{
      "& svg":{
        transform: "scale(2)"
      }
    }
  }
});

const TechStack = ({ classes }) => {

  return (
    <Grid container justifyContent="center" display="flex">
      <Grid item xs={3} className={classes.logoGrid}>
        <ReactLogo />
      </Grid>
      <Grid item xs={3} className={classes.logoGrid}><ReduxLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><SaasLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><HTMLLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><JavascriptLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><CSSLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><MuiLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><MongodbLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><FirebaseLogo /></Grid>
      <Grid item xs={3} className={classes.logoGrid}><NodejsLogo /></Grid>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(TechStack);

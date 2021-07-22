import React, { useState } from "react";

import {
  Grid,
  withStyles,
  AppBar,
  Tab,
  Tabs,
  Box,
  Typography,
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

const useStyles = () => ({
  tabs: {
    background: "black  ",
    border: "2px solid lightgray",
    color: "red",
    "& svg": {
      height: "150px",
      width: "auto",
    },
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TechStack = ({ classes }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  return (
    <Grid container>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            <Tab icon={<ReactLogo />} label="React" {...a11yProps(0)} />
            <Tab icon={<ReduxLogo />} label="Redux" {...a11yProps(1)} />
            <Tab icon={<HTMLLogo />} label="HTML5" {...a11yProps(2)} />
            <Tab icon={<CSSLogo />} label="CSS3" {...a11yProps(3)} />

            <Tab
              icon={<JavascriptLogo />}
              label="Javascript"
              {...a11yProps(4)}
            />
            <Tab icon={<MuiLogo />} label="Material-UI" {...a11yProps(5)} />
            <Tab icon={<MongodbLogo />} label="MongoDB" {...a11yProps(6)} />
            <Tab icon={<FirebaseLogo />} label="Firebase" {...a11yProps(7)} />
            <Tab icon={<NodejsLogo />} label="NodeJS" {...a11yProps(8)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Typography color="primary">One</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography color="primary">Two</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography color="primary">Three</Typography>
        </TabPanel>
      </div>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(TechStack);

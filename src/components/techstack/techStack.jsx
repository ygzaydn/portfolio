import React, { useState } from "react";

import {
  Grid,
  withStyles,
  AppBar,
  Tab,
  Tabs,
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
    background: "black",
    //color: "#4BFFA5",
    color: "#A4A4A4",
    "& svg": {
      padding: "0.5rem",
      height: "100px",
      maxWidth: "200px",
    },
  },
  root: {
    maxWidth: (props) => (props.width < props.limit ? " 95%" : "60%"),
  },
  asd: {
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#4BFFA5",
    },
    "& PrivateTabIndicator-colorSecondary*": {
      backgroundColor: "#4BFFA5",
    },
  },
  infoGrid: {
    border: "0.2px solid lightgray",
    minHeight: "15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "50px 0 ",
    padding: (props) => (props.width < props.limit ? "1rem" : "1rem 5rem"),
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
        <Grid item xs={12} p={3}>
          <Typography>{children}</Typography>
        </Grid>
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
    <Grid container align="center" justifyContent="center">
      <div className={classes.root}>
        <AppBar position="static" classes={{ root: classes.asd }}>
          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabs}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
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
        <Grid item xs={12} className={classes.infoGrid}>
          <TabPanel value={value} index={0}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                React
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                React.js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications. It’s used for handling the view layer for web and
                mobile apps. React also allows us to create reusable UI
                components. React was first created by Jordan Walke, a software
                engineer working for Facebook. React first deployed on
                Facebook’s newsfeed in 2011 and on Instagram.com in 2012.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                Redux
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                Redux is a predictable state container designed to help you
                write JavaScript apps that behave consistently across client,
                server, and native environments and are easy to test.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                HTML5
              </Typography>
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography color="secondary">
                HTML5 is a programming language whose acronym stands for Hyper
                Text Markup Language. It is a system that allows the
                modification of the appearance of web pages, as well as making
                adjustments to their appearance. It also used to structure and
                present content for the web.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                CSS3
              </Typography>
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography color="secondary">
                Cascading Style Sheets Level 3 (CSS3) is the iteration of the
                CSS standard used in the styling and formatting of Web pages.
                CSS3 incorporates the CSS2 standard with some changes and
                improvements.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                Javascript
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                JavaScript is a text-based programming language used both on the
                client-side and server-side that allows you to make web pages
                interactive. Where HTML and CSS are languages that give
                structure and style to web pages, JavaScript gives web pages
                interactive elements that engage a user.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                Material UI
              </Typography>
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography color="secondary">
                Material-UI is simply a library that allows us to import and use
                different components to create a user interface in our React
                applications.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                MongoDB
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                MongoDB is a document-oriented database which stores data in
                JSON-like documents with dynamic schema. It means you can store
                your records without worrying about the data structure such as
                the number of fields or types of fields to store values. MongoDB
                documents are similar to JSON objects.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                Firebase
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                Google Firebase is a Google-backed application development
                software that enables developers to develop iOS, Android and Web
                apps. Firebase provides tools for tracking analytics, reporting
                and fixing app crashes, creating marketing and product
                experiment.
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={8}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4">
                Node JS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary">
                Node. js is a platform built on Chrome's JavaScript runtime for
                easily building fast and scalable network applications. Node. js
                uses an event-driven, non-blocking I/O model that makes it
                lightweight and efficient, perfect for data-intensive real-time
                applications that run across distributed devices.
              </Typography>
            </Grid>
          </TabPanel>
        </Grid>
      </div>
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(TechStack);

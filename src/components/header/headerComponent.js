import React, { useState } from "react";
import {
  Grid,
  Typography,
  withStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { compose } from "recompose";
import { withWindowConsumer } from "../../contexts/window/consumer";

const useStyles = () => ({
  headerContainer: {
    padding: "min(5%,50px)",
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
    "& svg": {
      cursor: "pointer",
      fill: "#A4A4A4",
      "&:hover": {
        fill: "#4BFFA5",
      },
    },
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

const Header = ({ classes, width, limit }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const scrollTo = (element) => {
    document
      .getElementById(`${element}`)
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.headerContainer}>
      <Grid item xs={4} className={classes.nameGrid}>
        <Typography color="secondary">erolyagiz</Typography>
        <Typography color="error">aydin</Typography>
      </Grid>
      {width > limit ? (
        <Grid item xs={5} className={classes.menuGrid}>
          <Typography
            color="secondary"
            key="home-desktop"
            onClick={() => scrollTo("home")}
          >
            Home
          </Typography>
          <Typography
            color="secondary"
            key="services-desktop"
            onClick={() => scrollTo("services")}
          >
            Services
          </Typography>
          <Typography color="secondary">Works</Typography>
          <Typography color="secondary">Blogs</Typography>
          <Typography color="secondary">Contacts</Typography>
        </Grid>
      ) : (
        <Grid item xs={2} className={classes.menuGrid}>
          <MenuIcon onClick={handleClick} aria-controls="menu" />
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            elevation={0}
            getContentAnchorEl={null}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: {
                backgroundColor: "#000000",
                border: "0.2px solid lightgray",
                color: "#4BFFA5",
              },
            }}
          >
            <MenuItem
              style={{ borderBottom: "0.5px solid lightgray" }}
              key="home-mobile"
              onClick={() => scrollTo("home")}
            >
              Home
            </MenuItem>
            <MenuItem
              style={{ borderBottom: "0.5px solid lightgray" }}
              key="services-mobile"
              onClick={() => scrollTo("services")}
            >
              Services
            </MenuItem>
            <MenuItem
              style={{ borderBottom: "0.5px solid lightgray" }}
              onClick={() => scrollTo("services")}
            >
              Works
            </MenuItem>
            <MenuItem
              style={{ borderBottom: "0.5px solid lightgray" }}
              onClick={() => scrollTo("services")}
            >
              Blogs
            </MenuItem>
            <MenuItem onClick={() => scrollTo("services")}>Contacts</MenuItem>
          </Menu>
        </Grid>
      )}
    </Grid>
  );
};

export default compose(withWindowConsumer, withStyles(useStyles))(Header);

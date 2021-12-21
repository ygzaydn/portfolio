import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";


import { compose } from "recompose";

const useStyles = () => ({
  root: {
    display: "flex",
    height: "20rem",
    padding: "1.5rem 2rem",
    backgroundColor: "black",
    border: "2px solid lightgray",
    width: "60%",
   
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "90%",
  },
  cover: {
    height: "20rem",
    backgroundSize: "cover",
    transition:"all .5s",
    "&:hover":{
        transform:"scale(1.5)",
        overflow:"hidden"
    }
  },
});

const ProjectCard = ({ classes, title, description, image, tech, link, note }) => {
  return (
    <Card className={classes.root}>
        <Grid item xs={12}>
          <CardMedia className={classes.cover} image={image} title={title} />
        </Grid>
    </Card>
  );
};

export default compose(withStyles(useStyles))(ProjectCard);

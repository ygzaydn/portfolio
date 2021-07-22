import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import { compose } from "recompose";

const useStyles = () => ({
  root: {
    display: "flex",
    height: "500px",
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
    height: "100%",
    backgroundSize: "cover",
  },
});

const ProjectCard = ({ classes, title, description, image, tech, link }) => {
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <CardMedia className={classes.cover} image={image} title={title} />
        </Grid>
        <Grid item md={4} xs={12}>
          <CardContent className={classes.content}>
            <Typography color="primary" variant="h4">
              {title}
            </Typography>
            <Typography variant="h6" color="secondary">
              {description}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              <strong>Stack:</strong> {tech}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              onClick={() => {
                window.location.href = link;
              }}
              style={{ cursor: "pointer" }}
            >
              Click to proceed
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default compose(withStyles(useStyles))(ProjectCard);

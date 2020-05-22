import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

const AboutScreen = () => {
  return (
    <Grid container direction="column" alignContent="center">
      <Grid item>
        <Typography variant="h2">Arduino Manager Thesis Project</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          This app is developed for my thesis project. Its purpose is to
          simplify management of specific Arduino prototypes I have connected to
          the network.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          GitHub repository can be found{" "}
          <Link
            target="_blank"
            href="https://github.com/loicprodhom/arduino-manager-client"
          >
            here
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutScreen;

import React from "react";
import { Grid, Typography } from "@material-ui/core";

const LCDBoxDataDisplay = (props) => {
  const box = props.box;
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6">Current display:</Typography>
      </Grid>
      <Grid item>
        {box.data.map((line, index) => (
          <Typography key={index} variant="body1">
            Line {index + 1}: "{line}"
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default LCDBoxDataDisplay;

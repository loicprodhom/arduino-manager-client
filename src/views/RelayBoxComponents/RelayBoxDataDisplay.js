import React from "react";
import { Grid, Typography } from "@material-ui/core";

const RelayBoxDataDisplay = (props) => {
  const box = props.box;
  return (
    <Grid>
      <Typography>
        Relay1 is {box.data.relay1Status}. Measure: {box.data.relay1}
      </Typography>
      <Typography>
        Relay2 is {box.data.relay2Status}. Measure: {box.data.relay2}
      </Typography>
    </Grid>
  );
};

export default RelayBoxDataDisplay;

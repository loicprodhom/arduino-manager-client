import React, { useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@material-ui/core";

const RelayBoxCommands = (props) => {
  const boxesEndpoint = "http://localhost:3001/api/boxes";
  const box = props.box;
  const [relayStates, setRelayStates] = useState({
    relay1State: box.data.relay1Status === "ON",
    relay2State: box.data.relay2Status === "ON",
  });
  const changeRelayOff = (relayNumber) => {
    box.data[`relay${relayNumber}Status`] = "OFF";
    setRelayStates({ ...relayStates, [`relay${relayNumber}State`]: false });
    axios
      .put(boxesEndpoint, box)
      .then((response) => {
        console.log(response);
        props.updateBoxes();
      })
      .catch((error) => console.log(error));
  };
  const changeRelayOn = (relayNumber) => {
    box.data[`relay${relayNumber}Status`] = "ON";
    setRelayStates({ ...relayStates, [`relay${relayNumber}State`]: true });
    axios
      .put(boxesEndpoint, box)
      .then((response) => {
        console.log(response);
        props.updateBoxes();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h6">Relay 1</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={relayStates.relay1State}
              onClick={() => {
                changeRelayOn(1);
              }}
            >
              ON
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              disabled={!relayStates.relay1State}
              onClick={() => {
                changeRelayOff(1);
              }}
            >
              OFF
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h6">Relay 2</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={relayStates.relay2State}
              onClick={() => {
                changeRelayOn(2);
              }}
            >
              ON
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              disabled={!relayStates.relay2State}
              onClick={() => {
                changeRelayOff(2);
              }}
            >
              OFF
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RelayBoxCommands;

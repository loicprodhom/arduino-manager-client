import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import BoxCard from "./BoxCard";

const DeviceView = (props) => {
  const boxesEndpoint = "http://localhost:3001/api/boxes";
  const [boxes, setBoxes] = useState([]);

  const updateBoxes = () => {
    axios
      .get(boxesEndpoint)
      .then((response) => {
        console.log(response.data);
        setBoxes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateBoxes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={2} justify="center">
      {boxes.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="h6">No Devices connected</Typography>
          </CardContent>
        </Card>
      ) : (
        boxes.map((box, index) => (
          <Grid item key={index}>
            <BoxCard box={box} updateBoxes={updateBoxes} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default DeviceView;

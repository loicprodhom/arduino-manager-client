import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Button, Grid } from "@material-ui/core";

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
  return <div>placeholder device view screen</div>;
};

export default DeviceView;

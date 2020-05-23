import React, { useState } from "react";
import axios from "axios";
import { Grid, InputAdornment, Button, TextField } from "@material-ui/core";

const LCDBoxCommands = (props) => {
  const boxesEndpoint = "http://localhost:3001/api/boxes";
  const box = props.box;
  const [state, setState] = useState(box.data);

  const handleChange = (value, lineNumber) => {
    let edit = [...state];
    edit.splice(lineNumber, 1, value);
    setState([...edit]);
  };

  const updateDisplay = () => {
    box.data = state;
    axios
      .put(boxesEndpoint, box)
      .then((response) => {
        props.updateBoxes();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Grid container direction="column" spacing={2}>
      {box.data.map((line, index) => (
        <Grid key={"grid-container-" + index} item>
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                inputProps={{
                  maxLength: 20,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">{`${state[index].length}/20`}</InputAdornment>
                  ),
                }}
                size="small"
                value={state[index]}
                label={`Line ${index + 1}`}
                variant="outlined"
                onChange={(event) => {
                  handleChange(event.target.value, index);
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleChange("", index);
                }}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={updateDisplay}>
              Update Display
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                let newData = [];
                box.data.forEach((element) => {
                  newData.push("");
                });
                setState([...newData]);
              }}
            >
              Clear all
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LCDBoxCommands;

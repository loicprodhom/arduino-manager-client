import React, { useState } from "react";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import AboutScreen from "./AboutScreen";
import DeviceView from "./DeviceView";

const HomeScreen = (props) => {
  const [currTab, setCurrTab] = useState("deviceView");

  const handleChange = (event, value) => {
    setCurrTab(value);
  };

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6" color="inherit">
          Arduino Manager v.01
        </Typography>
        <Tabs value={currTab} onChange={handleChange}>
          <Tab value="deviceView" label="Devices" />
          <Tab value="aboutScreen" label="About the App" />
        </Tabs>
      </AppBar>
      {currTab === "deviceView" && <DeviceView client={props.client} />}
      {currTab === "aboutScreen" && <AboutScreen />}
    </div>
  );
};

export default HomeScreen;

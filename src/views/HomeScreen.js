import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import AboutScreen from "./AboutScreen";
import DeviceView from "./DeviceView";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#616161",
      main: "#212121",
      dark: "#212121",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e53935",
      main: "#c62828",
      dark: "#b71c1c",
      contrastText: "#fff",
    },
  },
});

const HomeScreen = (props) => {
  const [currTab, setCurrTab] = useState("deviceView");

  const handleChange = (event, value) => {
    setCurrTab(value);
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default HomeScreen;

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import "./App.css";
import ProTip from "./components/Protip";
import AirConditioner from "./components/AirConditioner";
import RemoteControl from "./components/RemoteControl";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import * as pkg from "../package.json";

function Copyright() {
  return (
    <Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href={pkg.repository.url}>
          Yun Air Conditioner
        </Link>
        {" - "}
        <Link color="inherit" href={pkg.author.url}>
          {pkg.author.name}
        </Link>
        {" 2019 -  "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

function App() {
  const [status, setStatus] = useState(false);
  const [mode, setMode] = useState("cold");
  const [temperature, setTemperature] = useState(16);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            便携小空调
          </Typography>
          <ProTip />
          <AirConditioner
            status={status}
            mode={mode}
            temperature={temperature}
          />
          <RemoteControl
            status={status}
            setStatus={setStatus}
            mode={mode}
            setMode={setMode}
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

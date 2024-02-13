import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;

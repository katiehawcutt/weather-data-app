import React from "react";
import "./display.css";
import DisplayDate from "../Date/index";

function Display({ weather }) {
  return (
    <div className="display">
      <h1>{weather.name}</h1>
      <DisplayDate />
      <h2>{weather.main.temp}</h2>
      <h3>{weather.weather[0].description}</h3>
    </div>
  );
}

export default Display;

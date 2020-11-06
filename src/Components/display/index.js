import React from "react";
import "./display.css";
import DisplayDate from "../Date/index";

function Display({ weather }) {
  return (
      <div>

<div className="display">
      <h1 className="city">{weather.name}</h1>
      <h2 className="weather">
        {Math.round(weather.main.temp)}
        {" °C"}
      </h2>
      <DisplayDate />
      <h3 className="weather">{weather.weather[0].description}</h3>
    </div>
      </div>
    
  );
}

export default Display;

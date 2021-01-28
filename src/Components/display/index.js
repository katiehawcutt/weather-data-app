import React from "react";
import "./display.css";
import DisplayDate from "../Date/index";

function Display({ weather }) {
  return (
    <div className="display">
      <DisplayDate />
      <h1 className={weather.main.temp > 16 ? "city" : "cold"}>
        {weather.name}
      </h1>
      <h2 className={weather.main.temp > 16 ? "weather" : "cold"}>
        {Math.round(weather.main.temp)}
        {" °C"}
      </h2>
      <h3 className={weather.main.temp > 16 ? "weather" : "cold"}>
        {weather.weather[0].description}
      </h3>
    </div>
  );
}

export default Display;

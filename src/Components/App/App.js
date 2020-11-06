import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "../display";

const api = {
  key: "64fb852b810905d928c26726c873e75f",
  base: "http://api.openweathermap.org/data/2.5/",
};
//http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={API key}

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(
        `${api.base}weather?q=Birmingham&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setWeather(data);
      }
    }
    fetchApi();
  }, []);

  return (
    <div className={(weather !== null) ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <header>{/* <h1 className="page-title">Weather App</h1> */}</header>
      <main>{weather !== null && <Display weather={weather} />}</main>
    </div>
  );
}

export default App;

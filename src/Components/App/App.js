import React, { useState, useEffect } from "react";
import "./App.css";
 
const api = {
  key: "64fb852b810905d928c26726c873e75f",
  base: "http://api.openweathermap.org/data/2.5/",
};
//http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={API key}

import Display from "../display";
import Button from "../button/index"


function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(
        `${api.base}weather?q=Birmingham&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      
      console.log(data);
    }
    fetchApi();
  }, []);
function getWeather(){
  setWeather(data);

}


  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
      <Button getWeather = {getWeather}/>
        <Display weather = {weather}/>
      </main>
    </div>
  );
}

export default App;

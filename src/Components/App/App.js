import React from "react";
import "./App.css";
import Display from "../display";
import Button from "../button/index"



function App() {
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

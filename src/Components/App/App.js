import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "../display";
import Input from "../Input/index";

const api = {
  key: "64fb852b810905d928c26726c873e75f",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setWeather(data);
      }
    }
    if (query !== null) {
      fetchApi();
    }
  }, [query]);

  return (
    <div
      className={
        weather !== null ? (weather.main.temp > 16 ? "app warm" : "app") : "app"
      }
    >
      <main>
        <Input setQuery={setQuery} />
        {weather !== null && <Display weather={weather} />}
      </main>
    </div>
  );
}

export default App;

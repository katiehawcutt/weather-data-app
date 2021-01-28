import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "../Display";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== "") {
      async function fetchApi() {
        const res = await fetch(
          `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
        );
        if (res.status >= 200 && res.status <= 299) {
          const data = await res.json();
          console.log(data);
          if (data) {
            setWeather(data);
          }
        } else {
          setError(res.status);
        }
      }
      if (query !== null) {
        fetchApi();
      }
    }
  }, [query]);

  return (
    <div
      className={
        weather !== null ? (weather.main.temp > 16 ? "app warm" : "app") : "app"
      }
    >
      <Input setQuery={setQuery} setError={setError} />
      {weather !== null && error === null && <Display weather={weather} />}
      {error !== null && <ErrorMessage />}
    </div>
  );
}

export default App;

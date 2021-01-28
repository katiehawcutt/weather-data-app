import React, { useState } from "react";
import "./input.css";

function Input({ setQuery, setError }) {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input
        placeholder="type a location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button
        onClick={() => {
          setError(null);
          setQuery(input);
          setInput("");
        }}
      >
        GET WEATHER
      </button>
    </div>
  );
}

export default Input;

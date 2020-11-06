import React, { useState } from "react";
import "./input.css";

function Input({ setQuery }) {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>

      <button onClick={() => setQuery(input)}>click me</button>
    </div>
  );
}

export default Input;

import React from "react"
import "./display.css"

function Display({weather}){
    
return(
    <div className = "display">
        <h1>Birmingham</h1>
        <p>{weather.date}</p>
        <h2>{weather.temp}</h2>
        <h3>{weather.description}</h3>
    </div>

)
}

export default Display

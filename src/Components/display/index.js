import React from "react"
import "./display.css"

function Display({weather}){
    
return(
    <div className = "display">
         <h1 className="city">{weather.name}</h1>
        <h2 className="weather">{weather.main.temp}{" °C"}</h2>
        <img/>
        <h3 className="weather">{weather.weather[0].description}</h3> 
    </div>

)
}

export default Display

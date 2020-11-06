import React from "react"
import "./button.css"

function Button({getWeather}){
return <button onClick = {getWeather} >Click for Birmingham Weather!</button>

}
export default Button
import React, { useState } from 'react';
import {api} from './App'

function Hourly(props) { 
  console.log(typeof props)

  const children = props.daily.map((val) => (
    React.createElement("div", null, `<p>${Math.round(val["temp"].day-273.15)}°C</p><p>${val["weather"][0]["main"]}</p> `)
));
   
    
  return (
    React.createElement("div", {className: "contexCon"},
      children
    )
  )
}


export default Hourly;
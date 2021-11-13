import React, { useState } from 'react';

function Daily(props) { 
  console.log(typeof props)

  

  const children = props.daily.map((val) => (
      React.createElement("div", null, <div className="dailyAttr" ><p>{props.dateBuilder(new Date(val["dt"] * 1000))}</p><p>{Math.round(val["temp"].day-273.15)} °C</p><p>{val["weather"][0]["main"]}</p><img src={props.getUrl(val["weather"][0]["icon"])}/></div>)
));
   
    
  return (
    React.createElement("div", {className: "wrapper"},
      children
    )
  )
}


export default Daily;
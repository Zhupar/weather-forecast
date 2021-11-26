// все лишние импорты которые не используются в коде лучше убирать сразу
import React, { useState } from 'react';

function Daily(props) {
  console.log(typeof props)


  // почему не использовать JSX?
  // перед map лучше сделать проверку на наличие метода .map иначе может приложение сломаться
  const children = props?.daily?.map((val) => (
      React.createElement("div", null, <div className="dailyAttr" ><p>{props.dateBuilder(new Date(val["dt"] * 1000))}</p><p>{Math.round(val["temp"].day-273.15)} °C</p><p>{val["weather"][0]["main"]}</p><img src={props.getUrl(val["weather"][0]["icon"])}/></div>)
));

    // почему бы не использовать JSX?
  return (
      <div className="wrapper">
        {children}
      </div>
  );
  // return (
  //   React.createElement("div", {className: "wrapper"},
  //     children
  //   )
  // )
}


export default Daily;

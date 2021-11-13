import React, { useState } from 'react';
import Daily from './Daily';
import Button from 'react-bootstrap/Button';

const api = {
  key: "206283e9a4feb2b6c7dbaef3a7133492",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [dWeather, setDWeather] = useState([]);
  const [hWeather, setHWeather] = useState([]);


  const search = () =>{
    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
      setWeather(result)
      setQuery('')
      if(result != "undefined"){
        searchDaily(result)
      }      
      })    
  }
  const searchCurrent = evt => {
    if(evt.key === "Enter"){
        search()
      } 
    };

    const searchDaily = (weather) => {    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=alerts&appid=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        setDWeather(result.daily)
        setHWeather(result.hourly)
        
        })
    } 
  

  const dateBuilder =(d)=> {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    

    return `${day} ${date} ${month} ${year}`    
  }
  const getUrl = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`

  }

  return (
    <div className = {(typeof weather.main != "undefined") ? ((Math.round((weather.main.temp)-273.15) > 16) ? "app warm" : "app"): "app"}>
      <main>
        <div className="search-box">
          <input type ="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={searchCurrent}
          />
          <button type="submit" onClick={search}>Search</button>
        </div>
        {(typeof weather.main != "undefined")? (

            <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{ dateBuilder(new Date()) }</div>
            </div>
            <div className = "weather-box">
              <div className ="temp">{Math.round((weather.main.temp)-273.15)}°C</div> 
              <div className="weather">{weather.weather[0].main}</div>
              <img width = "100px" height= "100px"src={getUrl(weather.weather[0].icon)}/>
            </div>
            <Daily daily = {dWeather} dateBuilder = {dateBuilder} getUrl={getUrl}/>
          
          </div>
          
        ):('')}
        
                
      </main>
    </div>
  );
}

export default App;

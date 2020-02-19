import React, { useState, useEffect } from 'react';
import {getWeather} from '../actions/weatherAction';
//import {mockWeather} from '../mocks/mocksWeather.js'

function Weather() {

    const[weather, setWeather] = useState(null);
    //use effect => le composant est chargé
    //=> le state est modifié

    
    useEffect(()=>{
        loadWeatherData();


    }, [])

    function kelvinToCelsius(tempKelvin) {
        return Math.round(tempKelvin -273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather();
        console.log(weatherAjax);
        setWeather(weatherAjax.data);
    }

    function loadIconWeather(idIcon) {
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }
    
    return (
        <div>
            {weather ?

            <div>
            <h1>Météo : {weather.name}</h1>
            <img src={loadIconWeather(weather.weather[0].icon)} alt="pluie"/>
            <p>{weather.weather[0].description}</p>
            <p> {kelvinToCelsius(weather.main.temp)} °C</p>
            </div>
            : <div>
            <h2>meteo en attente de chargement</h2>
            </div>
        }
        </div>
    )
}

export default Weather;
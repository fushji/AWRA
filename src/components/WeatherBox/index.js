import React, { useState, useEffect } from 'react';
import { SEARCH_BASE_URL } from '../../settings.js'
import './index.css'

const WeatherBox = ({ location }) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch(SEARCH_BASE_URL + location)
            .then(result => result.json())
            .then(result => {
                setWeather(result);
            })
    }, [location]);


    if (!weather.sys || !weather.main || !weather.weather) {
        return (<div></div>)
    }


    return (
        <div className="weather-box">
            <div className="weather-city">{weather.name}, {weather.sys.country}</div>
            <div className="weather-date">{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</div>
            <div className="weather-temp-box">
                <div className="weather-temp-value">{Math.round(weather.main.temp)}°C</div>
                <div className="weather-temp-description">{weather.weather[0].main}</div>
            </div>
        </div>
    )
}

export default WeatherBox

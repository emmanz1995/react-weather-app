import React, { useState, useEffect } from 'react';
import Request from '../request';


function WeatherDetails() {
    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState('london');
    const [typeQuery, setTypeQuery] = useState('');

    const selectQuery = (evt) => {
        evt.preventDefault();
        setQuery(typeQuery);
    }
    const getWeather = async () => {
        try {
            const results = await Request(query);
            setWeather(results?.data);
        } catch(error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        return getWeather();
    }, [query])
    return (
        <div>
            <main className="search-container">
                <form className="search-wrapper">
                    <input type="search" className="search-input" placeholder="Search a Location" value={typeQuery} onChange={(evt) => setTypeQuery(evt.target.value)} />
                    <input type="submit" className="search-btn" value="Search Location" onClick={selectQuery} />
                </form>
            </main>
            <div className="weather-container">
                <h1>Weather Today in {weather?.name}</h1>
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt="" />
                <div className="temp-wrapper">
                    <span>
                        <p>Max Temperature:</p>
                        <p>{weather?.main?.temp_max}&deg;</p>
                    </span>
                    <span>
                        <p>Min Temperature:</p>
                        <p>{weather?.main?.temp_min}&deg;</p>
                    </span>
                </div>
                <br />
                <span>
                    <p>Temperature Today</p>
                    <p>{weather?.main?.temp}&#176;</p>
                </span>
            </div>
        </div>
    );
}

export default WeatherDetails;

import React, {useState} from 'react';
import './overview.css';
import { RecentSearches } from '../Recent Searches/recentSearches';
import { Hourly } from '../Hourly/hourly';
import { Fiveday } from '../5 Day Forecast/fiveday';

require('dotenv').config(); 

const fetchForecast = async (city) => {

    const api_key = process.env.API_KEY;
    // const api_key = '2220f5a5d83243938f764759211310';
    var BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=3&aqi=no&alerts=no`;

    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    // collects all of the current weather info for your search
    const currentTempInfo = {
        city: data.location.name, 
        state: data.location.region, 
        epochDate: data.location.localtime_epoch, 
        message: data.current.condition.text, 
        wicon: data.current.condition.icon, 
        currentTemp: data.current.temp_f,
        currentHighTemp: data.forecast.forecastday[0].day.maxtemp_f,
        currentLowTemp: data.forecast.forecastday[0].day.mintemp_f,
        feelsLike: data.current.feelslike_f,
        humidity: data.current.humidity,
        rainLevel: data.current.precip_in,
        // hourlyTemps is an array, starts from midnight(index 0) and goes every hour until 11 pm(index 23)
        hourlyTemps: data.forecast.forecastday[0].hour.map((entry) => {
            let epochTime, temp;
            [epochTime, temp] = [entry.time_epoch, entry.temp_f];
            return [epochTime, temp];
        })
    };

    const daycardInfo = [];

    // this for loop triggers and creates an array with all necessary values for the 
    for (var x in data) {
        const fcDayDates = data.forecast.forecastday[x].date_epoch;
        const dayInfo = data.forecast.forecastday[x].day; 
        const dayValues = {
            dates: fcDayDates, 
            message: dayInfo.condition.text, 
            wicon: dayInfo.condition.icon, 
            maxTemp: dayInfo.maxtemp_f, 
            minTemp: dayInfo.mintemp_f, 
            avgTemp: dayInfo.avgtemp_f
        };
        // pushes dayValues object into daycardInfor array
        daycardInfo.push(dayValues);    
    };

    // this updates the state with the forecast for the city entered
    data = {
        currentTempInfo: currentTempInfo,
        daycardInfo: daycardInfo
    };

    // this spits out the newly created forecast object
    return data;
};

export function Overview() {
    const [search, setSearch] = useState(null);

    // 
    const getSearch = async (searchedCity) => {
        setSearch(searchedCity);
        const forecast = await fetchForecast(searchedCity);
        return await fetchForecast(search);
    };

    return (
        <div>
            <div class='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple Weather Dashboard </h3>
            </div>

            <div class='container-fluid' id='homepage-skeleton'>
                <div class='d-flex' id='center-page'>
                    <RecentSearches getSearch={getSearch}/>
        
                    <Hourly />
                </div>
            </div>

            <Fiveday />        
        </div>
    )
};


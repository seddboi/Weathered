import {useState} from 'react';
import axios from 'axios';
require('dotenv').config();

export async function useForecast(search) {
    // const [error, setError] = useState(false);
    const [forecast, setForecast] = useState(null);

    const api_key = process.env.API_KEY;
    var BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${search}&days=3&aqi=no&alerts=no`;

    const response = await axios.get(BASE_URL);
    const data = await response.json();

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

    // this updates the state with the firecast for the city entered
    setForecast({
        currentTempInfo: currentTempInfo,
        daycardInfo: daycardInfo
    });

    // this spits out the newly created forecast object
    return forecast;
};
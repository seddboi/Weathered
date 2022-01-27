import React, {useState} from 'react';
import './overview.css';
import { RecentSearches } from '../Recent Searches/recentSearches';
import { Hourly } from '../Hourly/hourly';
import { Fiveday } from '../5 Day Forecast/fiveday';

const axios = require('axios'); 
require('dotenv').config();

export function Overview() {
    // const [search, setSearch] = useState(null);
    const [forecast, setForecast] = useState(null);

    // this callback function receives the searched city entered from recentSearches and applies it to fetchForecast
    const getSearch = (searchedCity) => {
        // setSearch(searchedCity);
        fetchForecast(searchedCity);
        // data(searchedCity);
    }; 

    async function fetchForecast(searchedCity) {
        // var BASE_URL = `http://localhost:8000/results`;
    
        // const response = await fetch(BASE_URL);
        // const data = await response.json();

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/forecast',
            params: {city: searchedCity}
        };

        axios.request(options).then((response) => {
            setForecast(response.data);
        }).catch((error) => {
            console.log(error);
        })
        
        // await data(searchedCity);
    };

    // async function data(searchedCity) {
    //     await fetchForecast(searchedCity);

    //     // collects all of the current weather info for your search
    //     console.log(forecast);
    //     const currentTempInfo = await {
    //         city: forecast.location.name, 
    //         state: forecast.location.region, 
    //         epochDate: forecast.location.localtime_epoch, 
    //         message: forecast.current.condition.text, 
    //         wicon: forecast.current.condition.icon, 
    //         currentTemp: forecast.current.temp_f,
    //         currentHighTemp: forecast.forecast.forecastday[0].day.maxtemp_f,
    //         currentLowTemp: forecast.forecast.forecastday[0].day.mintemp_f,
    //         feelsLike: forecast.current.feelslike_f,
    //         humidity: forecast.current.humidity,
    //         rainLevel: forecast.current.precip_in,
    //         // hourlyTemps is an array, starts from midnight(index 0) and goes every hour until 11 pm(index 23)
    //         hourlyTemps: data.forecast.forecastday[0].hour.map((entry) => {
    //             let epochTime, temp;
    //             [epochTime, temp] = [entry.time_epoch, entry.temp_f];
    //             return [epochTime, temp];
    //         })
    //     };
    
    //     // console.log(currentTempInfo);
    
    //     const daycardInfo = [];
    //     // this for loop triggers and creates an array with all necessary values for the 
    //     function daycardForLoop() {
    //         for (let x=0; x < 3; x++) {
    //             const fcDayDates = forecast.forecast.forecastday[x].date_epoch;
    //             const dayInfo = forecast.forecast.forecastday[x].day; 
    //             const dayValues = {
    //                 dates: fcDayDates, 
    //                 message: dayInfo.condition.text, 
    //                 wicon: dayInfo.condition.icon, 
    //                 maxTemp: dayInfo.maxtemp_f, 
    //                 minTemp: dayInfo.mintemp_f, 
    //                 avgTemp: dayInfo.avgtemp_f
    //             };
    //             // pushes dayValues object into daycardInfor array
    //             daycardInfo.push(dayValues);
    //         };
    //     }; 
        
    //     daycardForLoop();
    
    //     // this updates the state with the forecast for the city entered
    //     const newData = {
    //         currentTempInfo: currentTempInfo,
    //         daycardInfo: daycardInfo
    //     };
    
    //     // this spits out the newly created forecast object
    //     console.log(newData);
    //     return newData;
    // }

    return (
        <div>
            <div className='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple Weather Dashboard </h3>
            </div>

            <div className='container-fluid' id='homepage-skeleton'>
                <div className='d-flex' id='center-page'>
                    <RecentSearches getSearch={getSearch}/>
        
                    <Hourly forecast={forecast}/>
                </div>
            </div>

            <Fiveday forecast={forecast}/>        
        </div>
    )
};


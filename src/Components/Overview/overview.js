import React from 'react';
import './overview.css';
import { RecentSearches } from '../Recent Searches/recentSearches';
import { Hourly } from '../Hourly/hourly';
import { Fiveday } from '../5 Day Forecast/fiveday';
import { fetchForecast } from '../../helpers/fetchForecast';

export function Overview() {

    // this callback function receives the searched city entered from recentSearches and applies it to fetchForecast
    const getSearch = async (searchedCity) => {
        fetchForecast(searchedCity);
    }; 

    return (
        <div>
            <div className='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple Weather Dashboard </h3>
            </div>

            <div className='container-fluid' id='homepage-skeleton'>
                <div className='d-flex' id='center-page'>
                    <RecentSearches getSearch={getSearch}/>
        
                    <Hourly />
                </div>
            </div>

            <Fiveday />        
        </div>
    )
};


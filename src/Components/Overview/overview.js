import React from 'react';
import './overview.css';


import useForecast from '../../hooks/useForecast';
import { RecentSearches } from '../Recent Searches/recentSearches';
import { Hourly } from '../Hourly/hourly';
import { Fiveday } from '../5 Day Forecast/fiveday';

export function Overview() {
    
    const {error, loading, forecast} = useForecast();

    return (
        <div>
            <div class='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple Weather Dashboard </h3>
            </div>

            <div class='container-fluid' id='homepage-skeleton'>
                <div class='d-flex' id='center-page'>
                    <RecentSearches />
        
                    {error ? <p>Something went wrong here... :(</p> : <Hourly />}
                </div>
            </div>

            {error ? <p>Something went wrong here... :(</p> : <Fiveday />}        
        </div>
    )
};


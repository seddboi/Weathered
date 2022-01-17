import React from 'react';
import './overview.css';


import {useForecast} from '../../hooks/useForecast';
import { RecentSearches } from '../Recent Searches/recentSearches';
import { Hourly } from '../Hourly/hourly';
import { Fiveday } from '../5 Day Forecast/fiveday';

export function Overview() {
    
    // const {forecast} = useForecast();

    return (
        <div>
            <div class='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple Weather Dashboard </h3>
            </div>

            <div class='container-fluid' id='homepage-skeleton'>
                <div class='d-flex' id='center-page'>
                    <RecentSearches />
        
                    <Hourly />
                </div>
            </div>

            <Fiveday />        
        </div>
    )
};


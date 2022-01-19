import React from 'react';
import './fiveday.css';

import Daycard from '../Day Card/daycard';

export function Fiveday() {
    return (
        <div class='jumbotron' id='five-day-section'>
            <h3 className='three-day-title'>3 Day Forecast</h3>

            <div className='container-fluid' id='five-day-forecast'>
                <Daycard />
                <Daycard />
                <Daycard />
            </div>
        </div>
    )
};
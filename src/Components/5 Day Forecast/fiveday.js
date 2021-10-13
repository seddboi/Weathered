import React from 'react';
import './fiveday.css';

import Daycard from '../Day Card/daycard';

function Fiveday() {
    return (
        <div class='jumbotron' id='five-day-section'>
            <h3 class=''>5 Day Forecast</h3>

            <div class='container-fluid' id='5-day-forecast'>
                <Daycard />
                <Daycard />
                <Daycard />
            </div>
        </div>
    )
};

export default Fiveday;

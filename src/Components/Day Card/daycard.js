import React from 'react';
import './daycard.css';

function Daycard() {
    return (
        <div class='card'>
            <div class="card-header">
                <h3><span id='plug-in-date'>Insert Date Here</span></h3>
            </div>

            {/* <ul class='list-group list-group-flush'>
                <li class='list-group-item'>
                    <h5 id='weather-text'>Weather Text</h5>
                    <img id='weather-icon' href='https://cdn.weatherapi.com/weather/64x64/day/113.png' />
                </li>
                <li class='list-group-item'>Max Temp: <span id='max-temp'></span></li>
                <li class='list-group-item'>Min Temp: <span id='min-temp'></span></li>
                <li class='list-group-item'>Average Temp: <span id='avg-temp'></span></li>
                <li class='list-group-item'>Chance Of Rain: <span id='chance-rain'></span></li>
            </ul> */}

            <div class="card-body">
                <h4 id='weather-text'>Description</h4>
                <img id='weather-icon' src='https://cdn.weatherapi.com/weather/64x64/day/113.png'></img>
                <h5 class="card-text">Max Temp: <span id='max-temp'></span></h5>
                <h5 class="card-text">Min Temp: <span id='min-temp'></span></h5>
                <h5 class="card-text">Average Temp: <span id='avg-temp'></span></h5>
                <h5 class="card-text">Chance Of Rain: <span id='chance-rain'></span></h5>
            </div>
        </div>
    )
};

export default Daycard;

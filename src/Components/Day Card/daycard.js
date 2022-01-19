import React from 'react';
import './daycard.css';

function Daycard() {
    return (
        <div className='card'>
            <div id='card-header' className="card-header">
                <h4 id='plug-in-date'>Insert Date Here</h4>
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

            <div className="card-body">
                <h5 id='weather-text'>Description</h5>
                <img id='weather-icon' src='https://cdn.weatherapi.com/weather/64x64/day/113.png'></img>
                <h5 className="card-text">Max Temp: <span id='max-temp'></span></h5>
                <h5 className="card-text">Min Temp: <span id='min-temp'></span></h5>
                <h5 className="card-text">Average Temp: <span id='avg-temp'></span></h5>
                <h5 className="card-text">Chance Of Rain: <span id='chance-rain'></span></h5>
            </div>
        </div>
    )
};

export default Daycard;

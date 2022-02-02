import React from 'react';
import './daycard.css';

export function Daycard({data}) {
    const unixTime = new Date(data.date * 1000);
    const convertedDate = unixTime.toLocaleDateString("en-US");
    return (
        <div className='card'>
            <div id='card-header' className="card-header">
                <h4 id='plug-in-date'>{convertedDate}</h4>
            </div>

            <div className="card-body">
                <img id='weather-icon' src={data.wicon} alt={data.wicon_text}></img>
                <h5 className="card-text">Max Temp: <span className='bold-text'>{data.max_temp}</span> °F</h5>
                <h5 className="card-text">Min Temp: <span className='bold-text'>{data.min_temp}</span> °F</h5>
                <h5 className="card-text">Chance Of Rain: <span className='bold-text'>{data.chance_of_rain}</span> %</h5>
            </div>
        </div>
    )
};
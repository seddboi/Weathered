import React from 'react';
import './hourly.css';

export function Hourly() {
    return (
        <section class='flex-grow-1' id='forecast'>
            <h4 class='m-3'>Hourly Forecast</h4>
            <h3 id='hourly-date'>(insert date here)</h3>

            <div id='hourly-forecast'>

            </div>
        </section>
    )
};
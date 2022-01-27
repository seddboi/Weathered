import React from 'react';
import './hourly.css';

export function Hourly({forecast}) {

    if (forecast === null) {
        return <section>
            <h4 id='blank-search'>Search Something!</h4>
        </section>
    }

    return (
        <section className='flex-grow-1' id='forecast'>
            <h4 className='m-3'>Hourly Forecast</h4>
            <h3 id='hourly-date'>(insert date here)</h3>

            <div id='hourly-forecast'>

            </div>
        </section>
    )
};
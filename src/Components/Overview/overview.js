import React from 'react';
import './overview.css';

function Overview() {
    return (
        <div>
            <div class='jumbotron' id='heading-title'>
                <h1>Welcome to <strong>Weathered</strong>!</h1>
                <h3>A Simple React-Based Weather Dashboard </h3>
            </div>

            <div class='container-fluid' id='homepage-skeleton'>
                <div class='d-flex' id='center-page'>
                    <section class='' id='search-bar-recents'>
                        <h3 class='m-3'>Recents</h3>
                        <div id='insert-recent-buttons'>

                        </div>

                        <div class="m-3">
                            <label for="exampleFormControlInput1" class="form-label">Search A New City</label>
                            <input class="form-control" id="search-bar" placeholder="Las Vegas, etc." />
                        </div>
                    </section>

                    <section class='flex-grow-1' id='forecast'>
                        <h3 class='m-3'>Hourly Forecast for <span id='hourly-date'></span></h3>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default Overview;

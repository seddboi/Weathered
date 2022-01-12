import React, {useState} from 'react';
import './recentSearches.css';

export function RecentSearches() {
    const [city, setCity] = useState('');

    const onSubmit = e => {
        e.preventDefault();
         if (!city || city === '') return;
    }
 
    const onChange = (e) => {
        setCity(e.target.value)
    };
    
    return (
        <section id='search-bar-recents'>
            <h3 class='m-3'>Recents </h3>
            <div id='insert-recent-buttons'></div>

            <div class="m-3">
                <label for="search-bar" class="form-label">Search A New City</label>
                <input class="form-control" id="search-bar" type='text' value={city} placeholder="Las Vegas, etc." onSubmit={onSubmit} onChange={onChange}/>
                <button id='search-button' onSubmit={onSubmit}>Search</button>
            </div>
        </section>
    )
};
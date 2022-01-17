import React, {useState} from 'react';
import './recentSearches.css';

export function RecentSearches() {
    const [city, setCity] = useState('');
    const [recents, setRecents] = useState([]);

    const onSubmit = e => {
        e.preventDefault();
        
        if (!city || city === '') {
            return;
        } else {
            addRecent(city);
        }  
    }
 
    const onChange = (e) => {
        setCity(e.target.value);
    }; 

    // function which takes in searched entry and adds entry to recent searches array
    function addRecent(newSearch) {
        if (recents.includes(newSearch)) {
            return;
        } else {
            setRecents((prev) => [newSearch, ...prev]);
        }
        // clear our search bar entry
        setCity('');
    }; 

    const searchAgain = (e) => {
        // console.log(e.target.innerHTML);
        const recent = e.target.innerHTML;
        setCity(recent);
        console.log(city);
    }
    
    return (
        <section id='search-bar-recents'>
            <h3 class='m-3'>Recents </h3>
            <div id='insert-recent-buttons'>{recents.map((entry, index) => <h5 key={index} onClick={searchAgain} value={entry}>{entry}</h5>)}</div>

            <form onSubmit={onSubmit} class="m-3">
                <label className="form-label" for="search-bar">Search A City</label><br/>
                <input className='form-text' id="search-bar" type='text' value={city} placeholder="Las Vegas, etc." onChange={onChange}/>
                <input className='form-button' id='search-button' type='submit' value='Search'/>
            </form>
        </section>
    )
};
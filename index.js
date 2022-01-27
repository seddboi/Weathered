const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(cors());

// this callback function receives the searched city entered from recentSearches and applies it to fetchForecast
// update: this callback function now passes the search to the backend for the url search to parse the new data
// export const getSearch = async (searchedCity) => {
//     fetchForecast(searchedCity);
// }; 

app.get('/', (req, res) => {
    res.json('hi');
});

app.get('/forecast', (req, res) => {   
    const options = {
        method: 'GET',
        url: `http://api.weatherapi.com/v1/forecast.json?`,
        params: {
            q: req.query.city,
        }, 
        headers: {
            'key' : process.env.REACT_APP_API_KEY,
            'days': '3',
            'api': 'no',
            'alerts': 'no'
        }
    };

    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} `))
 
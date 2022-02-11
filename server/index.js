const PORT = 3001;
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('/', (req, res) => {
    res.json('hi');
});

app.get('/forecast', (req, res) => {   
    const options = {
        method: 'GET',
        url: `http://api.weatherapi.com/v1/forecast.json?`,
        params: {
            q: req.query.city,
            key : PORT,
            days: '3',
            api: 'no',
            alerts: 'no',
        }, 
    };

    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        console.log(error);
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} `))
 
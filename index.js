const PORT = process.env.PORT || 8000;
const path = require('path');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'https://weatheredd.netlify.app/');
	next();
});

app.use(cors());

app.get('/', (req, res) => {
	res.json('hi');
});

app.get('/forecast', (req, res) => {
	const options = {
		method: 'GET',
		url: `http://api.weatherapi.com/v1/forecast.json?`,
		params: {
			q: req.query.q,
			key: process.env.REACT_APP_API_KEY,
			days: '3',
			api: 'no',
			alerts: 'no',
		},
	};

	axios
		.request(options)
		.then((response) => {
			res.json(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} `));

import {useState} from 'react';

const useForecast = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState({});

    return {
        error, loading, forecast
    };
};

export default useForecast;
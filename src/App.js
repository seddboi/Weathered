import React from 'react';
import './App.css';

import Overview from './Components/Overview/overview.js';
import Fiveday from './Components/5 Day Forecast/fiveday';

function App() {
  return (
    <div>
      <Overview />
      <Fiveday />
    </div>
  );
}

export default App;
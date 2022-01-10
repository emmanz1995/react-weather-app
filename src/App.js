import React, { useState } from 'react';
import './scss/main.scss';
import WeatherDetails from './pages/WeatherDetails';
import axios from 'axios';

function App() {
  return (
    <div className="App">
        <WeatherDetails />
    </div>
  );
}

export default App;

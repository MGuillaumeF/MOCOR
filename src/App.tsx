import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meter from './components/semantics/Meter/Meter';

const meterStyle = { width: '3em', height: 'auto' }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Meter
        value={6}
        max={10}
        style={meterStyle}
        bgMeterColor='#222'
      />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Meter from './components/semantics/Meter/Meter';
import CSS from 'csstype';
const meterStyle : CSS.Properties = { width: '3em', height: 'auto' }

function App() : JSX.Element{
  return (
    <div className="App">
      <header className="App-header">
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

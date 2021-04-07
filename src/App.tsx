import React, { FormEvent, useState } from 'react';
import './App.css';
import Meter from './components/semantics/Meter/Meter';
import CSS from 'csstype';
import InputText from './components/semantics/Inputs/InputText/InputText';
const meterStyle : CSS.Properties = { width: '3em', height: 'auto' }

function App() : JSX.Element{
  const [state, setState] = useState(6);
  function onChange (event : FormEvent<HTMLInputElement>) {
    setState(Number(event.currentTarget.value));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Meter
        value={state}
        max={10}
        style={meterStyle}
        bgMeterColor='#222'
      />
      <InputText id="essai-1" label="update gauge" value={state} onChange={onChange}/>
      </header>
    </div>
  );
}

export default App;

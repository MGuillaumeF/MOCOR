import React, { ChangeEvent, CSSProperties, useState } from 'react';
import './App.scss';
import './utils-css/base.scss';
import './utils-css/fonts/nunito-sans.scss';
import Meter from './components/semantics/Meter/Meter';

import InputText from './components/semantics/Inputs/InputText/InputText';
import InputNumber from './components/semantics/Inputs/InputNumber/InputNumber';

const meterStyle : CSSProperties = { width: '3em', height: 'auto' };

function App() : JSX.Element{
  const [state, setState] = useState(6);
  function onChange (event : ChangeEvent<HTMLInputElement>) {
    setState(Number(event.target.value));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Meter
        value={state}
        max={10}
        // style={meterStyle}
        bgMeterColor='#222'
      />
      <InputText id="essai-1" label="update gauge" value={state} onChange={onChange}/>
      <InputNumber id="essai-2" label="update gauge" onChange={onChange}/>
      <input type="submit" className="mocor primary"/> 
      </header>
    </div>
  );
}

export default App;

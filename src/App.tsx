import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import './utils-css/base.scss';
import './utils-css/fonts/nunito-sans.scss';
import Meter from './components/semantics/Meter/Meter';

import InputText from './components/semantics/Inputs/InputText/InputText';
import InputNumber from './components/semantics/Inputs/InputNumber/InputNumber';
import Button from './components/semantics/Button/Button';


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
        bgMeterColor='#222'
      />
      <InputText id="essai-1" label="update gauge" value={state} onChange={onChange}/>
      <InputNumber id="essai-2" label="update gauge" onChange={onChange}/>
      <Button id="button-test" type="submit">Test</Button> 
      <Button id="button-test" type="submit" level="primary">Test</Button> 
      <Button id="button-test" type="submit" level="secondary">Test</Button> 
      <Button id="button-test" type="submit" level="tertiary">Test</Button> 
      </header>
    </div>
  );
}

export default App;

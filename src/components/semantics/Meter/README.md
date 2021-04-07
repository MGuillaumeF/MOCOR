The component **Meter**

```tsx
function CallerComponent() {
  const [state, setState] = React.useState(4);
  return (
    <React.Fragment>
      <Meter
        value={state}
        max={10}
        style={{ width: '3em', height: 'auto' }}
        bgMeterColor='#222'
      />
      <br />
      <Meter
        value={state}
        max={10}
        style={{ width: '3em', height: 'auto', border: '1px solid #333' }}
        strikeMeterColor='cyan'
        fontMeterColor='blue'
      />
      <br />
      <label htmlFor='set' style={{color:'white'}}>
        {'The value in the Meter [min=0, max=10] is  : '}
        <input
          id='set'
          type='number'
          value={state}
          onChange={(event) => {
            event.stopPropagation();
            setState(event.target.value);
          }}
        />
      </label>
    </React.Fragment>
  );
}

<CallerComponent />;
```
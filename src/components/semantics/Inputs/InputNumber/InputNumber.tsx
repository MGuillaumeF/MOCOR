function Input (props) {
    return <input {...props} />;
}


const inputList = [
    "text",
    "email",
    "tel",
    "password",
    "number",
    "url",
    "search",
    "range",
    "date",
    "datetime",
    "datetime-local",
    "week",
    "month",
    "time",
    "color",
    "checkbox",
    "radio",
    "button",
    "submit",
    "reset",
    "image",
    "file"
];

const inputButtonList = [
    "button",
    "submit",
    "reset"
]


function App (props){
    const [isNatif, setNatif] = React.useState(true);
    return (
        <React.Fragment>
            <input type="checkbox" checked={isNatif} onClick={() => {setNatif(!isNatif)}}/>
            {isNatif ? (
            <div className="f-col">
                <h1>Natif</h1>
                {inputList.map(function (inputType) {
                    return (
                        <React.Fragment>
                            <label key={`${inputType}-label`}>{inputType}</label>
                            <Input type={inputType} key={`${inputType}-input`}/>
                        </React.Fragment>
                    );
                })}
            </div>) : (
            <div className="f-col fwk-container">
                <h1>Framework</h1>
                {inputList.map(function (inputType) {
 
                    return (
                        <div key={`fwk-${inputType}-container`} className="f-col input-container">
                            <Input className="MOCOR-UI" type={inputType} placeholder=" "/>
                            <label>{inputType}</label>
                        </div>
                    );
                })}

                <h2>Button</h2>
                {inputButtonList.map(function (inputType) {
 
                    return (
                      <React.Fragment>
                        <h3>{inputType}</h3>
                        <div key={`fwk-${inputType}-container-outline`} className="f-col input-container">
                            <label>default - outline</label>
                            <Input className="MOCOR-UI outline" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-default`} className="f-col input-container">
                            <label>default</label>
                            <Input className="MOCOR-UI" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-outline-primary`} className="f-col input-container">
                            <label>primary - outline</label>
                            <Input className="MOCOR-UI outline primary" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-primary`} className="f-col input-container">
                            <label>primary</label>
                            <Input className="MOCOR-UI primary" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-outline-seconday`} className="f-col input-container">
                            <label>secondary - outline</label>
                            <Input className="MOCOR-UI outline seconday" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-secondary`} className="f-col input-container">
                            <label>secondary</label>
                            <Input className="MOCOR-UI secondary" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-outline-tertiary`} className="f-col input-container">
                            <label>tertiary - outline</label>
                            <Input className="MOCOR-UI outline tertiary" type={inputType} placeholder=" "/>
                        </div>
                        <div key={`fwk-${inputType}-container-tertiary`} className="f-col input-container">
                            <label>tertiary</label>
                            <Input className="MOCOR-UI tertiary" type={inputType} placeholder=" "/>            
                        </div>
                      </React.Fragment>
                    );
                })}

            </div>)}
            <p data-alt="test">titi</p>
        </React.Fragment>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

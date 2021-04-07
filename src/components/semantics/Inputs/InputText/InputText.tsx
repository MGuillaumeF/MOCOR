import React, { HTMLProps, ReactElement } from 'react'
import './InputText.scss'

interface IInputTextProps extends HTMLProps<HTMLInputElement> {
    id : string;
    label?: string;
}

function InputText(props: IInputTextProps): ReactElement {
    return (
        <div className="mocor-input-text-container">
            <input {...props} type="text" className="mocor"/>
            {props.label? <label id={`${props.id}-label`} htmlFor={props.id}>{props.label}</label> : null}
        </div>
    )
}

export default InputText

import React, { ReactElement } from 'react'
import { IInputProps } from '../interfaces'
import './InputNumber.css'

function InputNumber(props: IInputProps): ReactElement {
    return (
        <div className="mocor-input-text-container f-col input-container" >
            <input {...props} type="number" className="mocor"/>
            {props.label? <label id={`${props.id}-label`} htmlFor={props.id}>{props.label}</label> : null}
        </div>
    )
}

export default InputNumber

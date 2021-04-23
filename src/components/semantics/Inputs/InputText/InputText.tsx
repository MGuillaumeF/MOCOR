import React, { ReactElement } from "react";
import { IInputProps } from "../interfaces";
import "./InputText.scss";

function InputText(props: IInputProps): ReactElement {
  return (
    <div className="mocor-input-text-container">
      <input {...props} type="text" className="mocor" />
      {props.label ? (
        <label id={`${props.id}-label`} htmlFor={props.id}>
          {props.label}
        </label>
      ) : null}
    </div>
  );
}

export default InputText;

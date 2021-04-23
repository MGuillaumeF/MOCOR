import React, { ReactElement } from "react";
import { IInputProps } from "../interfaces";

import { loadCssClasses } from "../../../../utils-css/utils";
import { EFlex } from "../../../../utils-css/disposition";
import "./InputNumber.scss";

const CONTAINER_CLASSNAME = loadCssClasses(
  "mocor-input-text-container",
  "input-container",
  EFlex.COLUMN
);

function InputNumber(props: IInputProps): ReactElement {
  return (
    <div className={CONTAINER_CLASSNAME}>
      <input
        type="number"
        className="mocor"
        placeholder=" "
        {...props}
        data-alt="changer la valeur de la gauge"
      />
      {props.label ? (
        <label id={`${props.id}-label`} htmlFor={props.id}>
          {props.label}
        </label>
      ) : null}
    </div>
  );
}

export default InputNumber;

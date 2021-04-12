import React, { HTMLProps, ReactElement } from 'react'
import './Button.scss';

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    id : string;
    level?: 'primary' | 'secondary' | 'tertiary';
    type: 'button' | 'submit' | 'reset';
}

function loadCss(css : {className ?: string, level ?: 'primary' | 'secondary' | 'tertiary'}) : string {
    const processedClassName = ["mocor"];
    if (css.className) {
        processedClassName.push(...css.className.split(' '));
    }
    if (css.level) {
        processedClassName.push(css.level);
    }
    return processedClassName.join(' ');
}

function Button(props: IButtonProps): ReactElement {
    const {className, level} = props;
    return (
        <button {...props} className={loadCss({className, level})}></button>
    )
}

export default Button

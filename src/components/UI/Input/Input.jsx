import React from 'react';
import styles from './input.module.scss'

const Input = ({className, ...props}) => {

    return (
        <input className={[styles.input, className].join(' ')} {...props}/>
    );
};

export default Input;
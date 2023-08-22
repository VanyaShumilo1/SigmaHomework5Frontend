import React, {useState} from 'react';
import styles from './input.module.scss'

const Input = ({value, setValue, className, ...props}) => {

    return (
        <input className={[styles.input, className].join(' ')} value={value} onChange={(e) => setValue(e.target.value)} {...props}/>
    );
};

export default Input;
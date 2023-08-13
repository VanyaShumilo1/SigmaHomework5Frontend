import React, {useState} from 'react';
import styles from '../../styles/numberInput.module.scss'

const NumberInput = () => {

    const [value, setValue] = useState(1)

    return (
        <input className={styles.numberInput} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    );
};

export default NumberInput;
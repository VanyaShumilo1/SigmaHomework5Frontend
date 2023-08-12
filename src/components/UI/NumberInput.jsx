import React, {useState} from 'react';
import styles from '../../styles/numberInput.module.scss'

const NumberInput = () => {

    const [value, setValue] = useState(1)

    return (
        // <div className={styles.numberInput}>
        // </div>

        <input className={styles.numberInput} type="number" value={value} onChange={(e) => setValue(e.target.value)}/>

    );
};

export default NumberInput;
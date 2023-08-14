import styles from '../../styles/numberInput.module.scss'

const NumberInput = ({value, setValue, ...props}) => {

    return (
        <input {...props} className={styles.numberInput} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    );
};

export default NumberInput;
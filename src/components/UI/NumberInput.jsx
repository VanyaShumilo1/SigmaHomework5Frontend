import styles from '../../styles/numberInput.module.scss'

const NumberInput = ({value, setValue, className, ...props}) => {

    return (
        <input {...props} className={[styles.numberInput, className].join(' ')} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    );
};

export default NumberInput;
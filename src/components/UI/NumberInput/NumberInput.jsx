import styles from './numberInput.module.scss'

const NumberInput = ({value, setValue, className, ...props}) => {
    return (
        <input className={[styles.numberInput, className].join(' ')} type="number" min={'1'} value={value}
               onChange={(e) => setValue(e.target.value)} {...props}/>
    );
};

export default NumberInput;
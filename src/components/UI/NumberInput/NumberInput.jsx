import styles from './numberInput.module.scss'

const NumberInput = ({value, className, ...props}) => {
    return (
        <input className={[styles.numberInput, className].join(' ')} type="number" min={'1'} value={value} {...props}/>
    );
};

export default NumberInput;
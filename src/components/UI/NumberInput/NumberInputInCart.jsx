import styles from './numberInput.module.scss'

const NumberInput = ({className, ...props}) => {

    return (
        <input className={[styles.numberInput, className].join(' ')} type="text" {...props} />
    );
};

export default NumberInput;
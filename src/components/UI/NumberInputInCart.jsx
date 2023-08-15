import styles from '../../styles/numberInput.module.scss'

const NumberInput = ({value, setValue, className, ...props}) => {

    return (
        <input className={[styles.numberInput, className].join(' ')} type="text" value={value} {...props} />
    );
};

export default NumberInput;
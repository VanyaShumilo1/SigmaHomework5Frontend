import React from 'react';
import styles from '../../styles/button.module.scss'
import rightArrow from '../../img/common/rightArrow.svg'

const Button = ({children, className, ...props}) => {
    return (
        <button {...props} className={[styles.button, className].join(' ')}>
            <div className={styles.button__text}>{children}</div>
            <img src={rightArrow} alt={'rightArrow'}/>
        </button>
    );
};

export default Button;
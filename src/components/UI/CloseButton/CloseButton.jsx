import React from 'react';
import styles from './closeButton.module.scss';
const CloseButton = ({children, className, ...props}) => {
    return (
        <button {...props} className={[styles.closeButton, className].join(' ')}>
            {children}
        </button>
    );
};

export default CloseButton;
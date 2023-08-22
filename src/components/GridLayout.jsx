import React from 'react';
import styles from '../styles/gridLayout.module.scss'

const GridLayout = ({children, className, ...props}) => {
    return (
        <div className={[styles.gridLayout, className].join(' ')} {...props}>
            {children}
        </div>
    );
};

export default GridLayout;
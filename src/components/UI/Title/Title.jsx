import React from 'react';
import styles from './title.module.scss'

const Title = ({children, className, ...props}) => {
    return (
        <h2 {...props} className={[styles.title, className].join(' ')}>
            {children}
        </h2>
    );
};

export default Title;
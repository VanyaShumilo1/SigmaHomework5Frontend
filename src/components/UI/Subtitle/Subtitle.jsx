import React from 'react';
import styles from "./subtitle.module.scss";

const Subtitle = ({children, className, ...props}) => {
    return (
        <h3 {...props} className={[styles.subtitle, className].join(' ')}>
            {children}
        </h3>
    );
};

export default Subtitle;
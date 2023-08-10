import React from 'react';
import styles from '../../styles/about.module.scss'

const AboutIcon = ({icon, ...props}) => {
    return (
        <div className={styles.icon}>
            <img src={icon} alt="icon"/>
        </div>
    );
};

export default AboutIcon;
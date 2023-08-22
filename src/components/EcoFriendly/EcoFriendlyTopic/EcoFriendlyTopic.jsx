import React from 'react';
import Title from "../../UI/Title/Title";
import styles from './ecoFriendlyTopic.module.scss'

const EcoFriendlyTopic = ({title, text, className, ...props}) => {
    return (
        <div className={[styles.ecoFriendlyTopic, className].join(' ')} {...props}>
            <Title className={styles.ecoFriendlyTopic__title}>{title}</Title>
            <div className={styles.ecoFriendlyTopic__text}>{text}</div>
        </div>
    );
};

export default EcoFriendlyTopic;
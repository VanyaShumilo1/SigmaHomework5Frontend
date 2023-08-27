import React from 'react';
import styles from './whyChooseUsCard.module.scss'
import Title from "../../UI/Title/Title";

const WhyChooseUsCard = ({icon, title, text, ...props}) => {
    return (
        <div className={styles.whyChooseUsCard} {...props}>
            <div className={styles.whyChooseUsCard__image}>
                <img src={icon} alt="icon"/>
            </div>
            <Title className={styles.whyChooseUsCard__title}>{title}</Title>
            <div className={styles.whyChooseUsCard__text}>{text}</div>
        </div>
    );
};

export default WhyChooseUsCard;
import React from 'react';
import pointImage from '../../../img/whyChooseUs/point.svg'
import styles from './whyChooseUsPoint.module.scss'
import Title from "../../UI/Title/Title";

const WhyChooseUsPoint = ({title, text, ...props}) => {
    return (
        <div className={styles.whyChooseUsPoint} {...props}>
            <div className={styles.whyChooseUsPoint__header}>
                <img src={pointImage} alt="point"/>
                <Title className={styles.whyChooseUsPoint__title}>
                    {title}
                </Title>
            </div>
            <div className={styles.whyChooseUsPoint__text}>
                {text}
            </div>
        </div>
    );
};

export default WhyChooseUsPoint;
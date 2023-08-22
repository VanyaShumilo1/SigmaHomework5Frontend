import React from 'react';
import styles from './testimonialsCircle.module.scss'
import Title from "../../UI/Title/Title";

const TestimonialsCircle = ({title, subtitle, className, ...props}) => {
    return (
        <div className={[styles.testimonialsCircle, className].join(' ')} {...props}>
            <Title>{title}</Title>
            <Title className={styles.testimonialsCircle__subtitle}>{subtitle}</Title>
        </div>
    );
};

export default TestimonialsCircle;
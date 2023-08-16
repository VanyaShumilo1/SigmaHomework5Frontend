import React from 'react';
import Title from "../components/UI/Title";
import image from '../img/successOrder/img.png'
import styles from '../styles/successOrder.module.scss'

const SuccessOrder = () => {
    return (
        <div className={styles.successOrder}>
            <Title className={styles.successOrder__title}>Thank you for your order</Title>
            <img src={image} alt="img"/>
        </div>
    );
};

export default SuccessOrder;
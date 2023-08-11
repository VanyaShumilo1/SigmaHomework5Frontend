import React from 'react';
import styles from '../../styles/offer.module.scss'
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const OfferCard2 = () => {
    return (
        <div className={[styles.card, styles.card2].join(' ')}>
            <Subtitle className={'subtitle'}>Offer!!</Subtitle>
            <Title className={'title'}>Get 10% off<br/> on Vegetables</Title>
        </div>
    );
};

export default OfferCard2;
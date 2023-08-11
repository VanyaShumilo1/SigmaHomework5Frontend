import React from 'react';
import styles from '../../styles/offer.module.scss'
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";

const OfferCard1 = () => {
    return (
        <div className={[styles.card, styles.card1].join(' ')}>
            <Subtitle className={'subtitle'}>Natural!!</Subtitle>
            <Title className={'title'}>Get Garden<br/> Fresh Fruits</Title>
        </div>
    );
};

export default OfferCard1;
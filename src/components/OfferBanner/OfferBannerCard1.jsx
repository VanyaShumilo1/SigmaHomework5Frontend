import React from 'react';
import styles from './offerBanner.module.scss'
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";

const OfferBannerCard1 = () => {
    return (
        <div className={[styles.card, styles.card1].join(' ')}>
            <Subtitle className={'subtitle'}>Natural!!</Subtitle>
            <Title className={'title'}>Get Garden<br/> Fresh Fruits</Title>
        </div>
    );
};

export default OfferBannerCard1;
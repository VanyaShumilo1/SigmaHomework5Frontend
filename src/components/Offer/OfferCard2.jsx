import React from 'react';
import styles from '../../styles/offer.module.scss'

const OfferCard2 = () => {
    return (
        <div className={[styles.card, styles.card2].join(' ')}>
            <h3 className={'subtitle'}>Offer!!</h3>
            <h2 className={'title'}>Get 10% off<br/> on Vegetables</h2>
        </div>
    );
};

export default OfferCard2;
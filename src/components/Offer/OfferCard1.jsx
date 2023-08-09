import React from 'react';
import styles from '../../styles/offer.module.scss'

const OfferCard1 = () => {
    return (
        <div className={[styles.card, styles.card1].join(' ')}>
            <h3 className={'subtitle'}>Natural!!</h3>
            <h2 className={'title'}>Get Garden<br/> Fresh Fruits</h2>
        </div>
    );
};

export default OfferCard1;
import React from 'react';
import Container from "../Container";
import OfferCard1 from "./OfferCard1";
import OfferCard2 from "./OfferCard2";
import styles from '../../styles/offer.module.scss'

const Offer = () => {
    return (
        <Container className={styles.offer}>
            <OfferCard1/>
            <OfferCard2/>
        </Container>
    );
};

export default Offer;
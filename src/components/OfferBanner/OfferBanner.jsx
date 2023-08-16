import React from 'react';
import Container from "../Container";
import OfferBannerCard1 from "./OfferBannerCard1";
import OfferBannerCard2 from "./OfferBannerCard2";
import styles from '../../styles/OfferBanner.module.scss'

const OfferBanner = () => {
    return (
        <Container className={styles.OfferBanner}>
            <OfferBannerCard1/>
            <OfferBannerCard2/>
        </Container>
    );
};

export default OfferBanner;
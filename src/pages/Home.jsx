import React from 'react';
import Header from "../components/Header/Header";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Offer from "../components/Offer/Offer";
import EcoFriendly from "../components/EcoFriendly/EcoFriendly";
import Gallery from "../components/Gallery/Gallery";
import News from "../components/News/News";
import Newslatteer from "../components/Newsletter/Newslatteer";

const Home = () => {
    return (
        <>
            <Header/>
            <OfferBanner/>
            <About/>
            <Products/>
            <Testimonials/>
            <Offer/>
            <EcoFriendly/>
            <Gallery/>
            <News/>
            <Newslatteer/>
        </>
    );
};

export default Home;
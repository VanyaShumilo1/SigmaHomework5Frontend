import React from 'react';
import Header from "../components/Header/Header";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Offer from "../components/Offer/Offer";

const Home = () => {
    return (
        <>
            <Header/>
            <OfferBanner/>
            <About/>
            <Products/>
            <Testimonials/>
            <Offer/>
        </>
    );
};

export default Home;
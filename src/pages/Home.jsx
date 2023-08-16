import React from 'react';
import Header from "../components/Header/Header";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Header/>
            <Offer/>
            <About/>
            <Products/>
            <Testimonials/>
        </>
    );
};

export default Home;
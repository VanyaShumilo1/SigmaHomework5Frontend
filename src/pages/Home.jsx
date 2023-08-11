import React from 'react';
import Header from "../components/Header/Header";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Products from "../components/Products/Products";

const Home = () => {
    return (
        <>
            <Header/>
            <Offer/>
            <About/>
            <Products/>
        </>
    );
};

export default Home;
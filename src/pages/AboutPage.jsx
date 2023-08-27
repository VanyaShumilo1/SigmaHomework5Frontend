import React from 'react';
import PageHeader from "../components/PageHeader/PageHeader";
import CreativeThings from "../components/CreativeThings/CreativeThings";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Team from "../components/Team/Team";

const AboutPage = () => {
    return (
        <div>
            <PageHeader bg={2} title={'About us'}/>
            <CreativeThings/>
            <WhyChooseUs/>
            <Team/>
        </div>
    );
};

export default AboutPage;
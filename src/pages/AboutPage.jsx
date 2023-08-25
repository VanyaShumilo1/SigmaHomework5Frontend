import React from 'react';
import PageHeader from "../components/PageHeader/PageHeader";
import CreativeThings from "../components/CreativeThings/CreativeThings";

const AboutPage = () => {
    return (
        <div>
            <PageHeader bg={2} title={'About us'}/>
            <CreativeThings/>
        </div>
    );
};

export default AboutPage;
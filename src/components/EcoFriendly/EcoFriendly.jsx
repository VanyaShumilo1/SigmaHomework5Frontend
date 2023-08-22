import React from 'react';
import image from '../../img/ecoFriendly/image.png'
import styles from './ecoFriendly.module.scss'
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import EcoFriendlyTopic from "./EcoFriendlyTopic/EcoFriendlyTopic";

const EcoFriendly = () => {
    return (
        <div className={styles.ecoFriendly}>
            <div className={styles.ecoFriendly__image}>
                <img src={image} alt="image"/>
            </div>
            <div className={styles.ecoFriendly__content}>
                <Subtitle>Eco Friendly</Subtitle>
                <Title>Econis is a Friendly<br/> Organic Store</Title>
                <div className={styles.ecoFriendly__topics}>
                    <EcoFriendlyTopic title={'Start with Our Company First'}
                                      text={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                    <EcoFriendlyTopic title={'Learn How to Grow Yourself'}
                                      text={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                    <EcoFriendlyTopic title={'Farming Strategies of Today'}
                                      text={'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.\n'}/>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendly;

import React from 'react';
import Container from "../Container/Container";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import image from '../../img/whyChooseUs/img.png'
import WhyChooseUsPoint from "./WhyChooseUsPoint/WhyChooseUsPoint";
import styles from './whyChooseUs.module.scss'
import WhyChooseUsCard from "./whyChooseUsCard/WhyChooseUsCard";
import icon1 from '../../img/whyChooseUs/icon1.svg'
import icon2 from '../../img/whyChooseUs/icon2.svg'
import icon3 from '../../img/whyChooseUs/icon3.svg'
import icon4 from '../../img/whyChooseUs/icon4.svg'

const WhyChooseUs = () => {
    return (
        <div className={styles.whyChooseUs}>
            <Container>
                <div className={styles.whyChooseUs__wrapper}>
                    <div className={styles.whyChooseUs__content}>
                        <Subtitle>Why Choose us</Subtitle>
                        <Title>
                            We do not buy from the
                            open market & traders.
                        </Title>
                        <div className={styles.whyChooseUs__text}>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                            industry's standard the 1500s, when an unknown
                        </div>
                        <div className={styles.whyChooseUs__points}>
                            <WhyChooseUsPoint
                                title={"100% Natural Product"}
                                text={"Simply dummy text of the printing and typesetting industry Lorem Ipsum"}
                            />

                            <WhyChooseUsPoint
                                title={"Increases resistance"}
                                text={"Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing"}
                            />
                        </div>
                    </div>
                    <div className={styles.whyChooseUs__image}>
                        <img src={image} alt="image"/>
                    </div>
                </div>
                <div className={styles.whyChooseUs__cards}>
                    <WhyChooseUsCard
                        icon={icon1} title={'Return Policy'}
                        text={'Simply dummy text of the printintypesetting industry.'}
                    />
                    <WhyChooseUsCard
                        icon={icon2} title={'100% Fresh'}
                        text={'Simply dummy text of the printintypesetting industry.'}
                    />
                    <WhyChooseUsCard
                        icon={icon3} title={'Support 24/7'}
                        text={'Simply dummy text of the printintypesetting industry.'}
                    />
                    <WhyChooseUsCard
                        icon={icon4} title={'Secured Payment\n'}
                        text={'Simply dummy text of the printintypesetting industry.'}
                    />
                </div>
            </Container>
        </div>
    );
};

export default WhyChooseUs;
import React from 'react';
import styles from './about.module.scss'
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import AboutIcon from "./AboutIcon";
import OrganicIcon from '../../img/about/organic.svg'
import QualityIcon from '../../img/about/quality.svg'
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";

const About = () => {
    return (
        <div className={styles.about}>
            <Container className={styles.about__wrapper}>
                <div>
                    <Subtitle>About us</Subtitle>
                    <Title>We Believe in Working<br/>Accredited Farmers</Title>
                    <div className={styles.about__text}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley.
                    </div>
                    <div className={styles.about__advantages}>
                        <div className={styles.about__advantages_item}>
                            <div className={styles.about__advantages_icon}>
                                <AboutIcon icon={OrganicIcon}/>
                            </div>
                            <div className={styles.about__advantages_content}>
                                <h4 className={styles.about__advantages_title}>Organic Foods Only</h4>
                                <div className={styles.about__advantages_text}>
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                </div>
                            </div>
                        </div>

                        <div className={styles.about__advantages_item}>
                            <div className={styles.about__advantages_icon}>
                                <AboutIcon icon={QualityIcon}/>
                            </div>
                            <div className={styles.about__advantages_content}>
                                <h4 className={styles.about__advantages_title}>Organic Foods Only</h4>
                                <div className={styles.about__advantages_text}>
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className={styles.about__button}>Shop Now</Button>
                </div>

            </Container>
        </div>
    );
};

export default About;
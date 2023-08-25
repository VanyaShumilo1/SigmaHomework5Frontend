import React from 'react';
import Container from "../Container/Container";
import styles from './creativeThings.module.scss'
import image from '../../img/creativeThings/img.png'
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import icon1 from '../../img/creativeThings/icon1.svg'
import icon2 from '../../img/creativeThings/icon2.svg'
import Button from "../UI/Button/Button";
import buttonStyles from '../UI/Button/button.module.scss'

const CreativeThings = () => {
    return (
        <div className={styles.creativeThings}>
            <Container className={styles.creativeThings__wrapper}>
                <div className={styles.creativeThings__img}>
                    <img src={image} alt="image"/>
                </div>
                <div className={styles.creativeThings__content}>
                    <Subtitle>About Us</Subtitle>
                    <Title>
                        We do Creative<br/>
                        Things for Success
                    </Title>
                    <div className={styles.creativeThings__text}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </div>
                    <div className={styles.creativeThings__text}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </div>
                    <div className={styles.creativeThings__icons}>
                        <div className={styles.creativeThings__icons_item}>
                            <img src={icon1} alt="icon"/>
                            <Title className={styles.creativeThings__icons_title}>Modern Agriculture Equipment</Title>
                        </div>
                        <div className={styles.creativeThings__icons_item}>
                            <img src={icon2} alt="icon"/>
                            <Title className={styles.creativeThings__icons_title}>No growth hormones are used</Title>
                        </div>
                    </div>
                    <Button className={[buttonStyles.button_blue, styles.creativeThings__button].join(' ')}>Explore mode</Button>
                </div>
            </Container>
        </div>
    );
};

export default CreativeThings;
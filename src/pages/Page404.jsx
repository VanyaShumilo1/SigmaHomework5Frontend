import React from 'react';
import styles from '../styles/page404.module.scss'
import Container from "../components/Container/Container";
import Title from "../components/UI/Title/Title";
import Button from "../components/UI/Button/Button";
import buttonStyles from '../components/UI/Button/button.module.scss'
import big404img from '../img/page404/404.svg'
import {useNavigate} from "react-router-dom";

const Page404 = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className={styles.page404}>
            <Container className={styles.page404__wrapper}>
                <div>
                    <div className={styles.page404__bigImg}>
                        <img src={big404img} alt="404"/>
                    </div>
                    <Title className={styles.page404__title}>Page not found</Title>
                    <div className={styles.page404__text}>The page you are looking for doesn't exist or has been moved
                    </div>
                    <Button onClick={handleClick} className={[buttonStyles.button_blue, styles.page404__button].join(' ')}>Go to
                        Homepage</Button>
                </div>
            </Container>
        </div>
    );
};

export default Page404;
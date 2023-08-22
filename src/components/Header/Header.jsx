import React from 'react';
import styles from './header.module.scss'
import Container from "../Container/Container";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Subtitle>100% Natural Food</Subtitle>
                <Title className={styles.title}>
                    Choose the best<br/>
                    healthier way<br/>
                    of life
                </Title>
                <Button className={'button'}>Explore Now</Button>
            </Container>
        </header>
    );
};

export default Header;
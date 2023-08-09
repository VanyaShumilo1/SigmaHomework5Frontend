import React from 'react';
import styles from '../../styles/header.module.scss'
import Container from "../Container";
import Button from "../UI/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <h2 className="subtitle">100% Natural Food</h2>
                <h1 className="title">
                    Choose the best<br/>
                    healthier way<br/>
                    of life
                </h1>
                <Button className={'button'}>Explore Now</Button>
            </Container>
        </header>
    );
};

export default Header;
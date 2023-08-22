import React from 'react';
import styles from './cartHeader.module.scss'
import Container from "../Container/Container";
import Title from "../UI/Title/Title";

const CartHeader = () => {
    return (
        <header className={styles.cartHeader}>
            <Container className={styles.cartHeader__wrapper}>
                <Title className={styles.cartHeader__title}>Cart</Title>
            </Container>
        </header>
    );
};

export default CartHeader;
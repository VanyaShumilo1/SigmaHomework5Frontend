import React from 'react';
import styles from './gallery.module.scss'
import Title from "../UI/Title/Title";

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__card}>
                <Title className={styles.gallery__card_text}>
                    Organic Juice
                </Title>
            </div>

            <div className={styles.gallery__card}>
                <Title className={styles.gallery__card_text}>
                    Organic Food
                </Title>
            </div>

            <div className={styles.gallery__card}>
                <Title className={styles.gallery__card_text}>
                    Nuts Cookies
                </Title>
            </div>

        </div>
    );
};

export default Gallery;
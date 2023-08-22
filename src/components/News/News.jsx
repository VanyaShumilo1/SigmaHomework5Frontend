import React from 'react';
import styles from './news.module.scss'
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import buttonStyles from '../UI/Button/button.module.scss'
import Container from "../Container/Container";
import NewsCard from "./NewsCard/NewsCard";
import cardImage1 from '../../img/news/img1.png'
import cardImage2 from '../../img/news/img2.png'

const News = () => {
    return (
        <div className={styles.news}>
            <Container>
                <Subtitle>News</Subtitle>
                <header className={styles.news__header}>
                    <Title className={styles.news__title}>Discover weekly content about organic food, & more</Title>
                    <Button className={buttonStyles.button__white}>More news</Button>
                </header>
                <div className={styles.news__cards}>
                    <NewsCard
                        image={cardImage1}
                        username={'Rachi Card'}
                        title={'The Benefits of Vitamin D & How to Get It'}
                        text={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'}
                        day={'25'}
                        month={'Nov'}
                    />
                    <NewsCard
                        image={cardImage2}
                        username={'Rachi Card'}
                        title={'Our Favourite Summertime Tommeto'}
                        text={'Simply dummy text of the printing and typesetting industry. Lorem Ipsum'}
                        day={'25'}
                        month={'Nov'}
                    />
                </div>
            </Container>

        </div>
    );
};

export default News;
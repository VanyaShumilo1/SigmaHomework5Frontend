import React from 'react';
import styles from './newsCard.module.scss'
import userImg from '../../../img/news/user.svg';
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";

const NewsCard = ({image, username, title, text, day, month, ...props}) => {
    return (
        <div className={styles.newsCard} {...props}>
            <div className={styles.newsCard__date}>
                <div className={styles.newsCard__day}>{day}</div>
                <div className={styles.newsCard__month}>{month}</div>
            </div>
            <img className={styles.newsCard__bg} src={image} alt="image"/>
            <div className={styles.newsCard__content}>
                <div className={styles.newsCard__username}>
                    <img src={userImg} alt="user"/> By {username}
                </div>
                <Title className={styles.newsCard__title}>{title}</Title>
                <div className={styles.newsCard__text}>{text}</div>
                <Button className={styles.newsCard__button}>Read more</Button>
            </div>
        </div>
    );
};

export default NewsCard;
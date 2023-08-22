import React from 'react';
import Subtitle from "../UI/Subtitle/Subtitle";
import Container from "../Container/Container";
import Title from "../UI/Title/Title";
import avatar from '../../img/testimonials/person.png'
import dots from '../../img/testimonials/dots.svg'
import stars from '../../img/common/stars.svg'
import styles from './testimonials.module.scss'
import TestimonialsCircle from "./TestimonialsCircle/TestimonialsCircle";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <Container className={styles.testimonials__container}>
                <Subtitle className={styles.testimonials__heading}>Testimonial</Subtitle>
                <Title className={styles.testimonials__heading}>What Our Customer Saying?</Title>
                <div className={styles.testimonials__content}>
                    <div className={styles.testimonials__images}>
                        <img src={avatar} alt="avatar"/>
                        <img src={stars} alt="stars"/>
                    </div>
                    <div className={styles.testimonials__text}>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </div>
                    <Title className={styles.testimonials__name}>Sara Taylor</Title>
                    <div className={styles.testimonials__role}>Consumer</div>
                    <div className={styles.testimonials__dots}>
                        <img src={dots} alt="dots"/>
                    </div>
                </div>
                <div className={styles.testimonials__line}></div>
                <div className={styles.testimonials__circles}>
                    <TestimonialsCircle title={'100%'} subtitle={'Organic'}/>
                    <TestimonialsCircle title={'285'} subtitle={'Active Product'}/>
                    <TestimonialsCircle title={'350+'} subtitle={'Organic Orchards'}/>
                    <TestimonialsCircle title={'25+'} subtitle={'Years of Farming'}/>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;
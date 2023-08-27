import React from 'react';
import Container from "../Container/Container";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import styles from './team.module.scss'

const Team = () => {
    return (
        <div className={styles.team}>
            <Container>
                <Subtitle className={styles.team__center}>Team</Subtitle>
                <Title className={styles.team__center}>Our Organic Experts</Title>
                <div className={[styles.team__center, styles.team__text].join(' ')}>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </div>
            </Container>
        </div>
    );
};

export default Team;
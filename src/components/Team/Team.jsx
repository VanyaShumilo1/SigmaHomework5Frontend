import React from 'react';
import Container from "../Container/Container";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import styles from './team.module.scss'
import TeamCard from "./TeamCard/TeamCard";
import person1 from '../../img/team/person1.png'
import person2 from '../../img/team/person2.png'
import person3 from '../../img/team/person3.png'

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
                <div className={styles.team__cards}>
                    <TeamCard
                        image={person1}
                        name={'Giovani Bacardo'}
                        job={'Fermer'}
                        socials={{
                            facebook: true,
                            twitter: true,
                            instagram: false
                        }}
                    />
                    <TeamCard
                        image={person2}
                        name={'Marianne Loreno'}
                        job={'Designer'}
                        socials={{
                            facebook: true,
                            twitter: true,
                            instagram: true
                        }}
                    />
                    <TeamCard
                        image={person3}
                        name={'Riga Pelore'}
                        job={'Farmer'}
                        socials={{
                            facebook: true,
                            twitter: true,
                            instagram: true
                        }}
                    />
                </div>
            </Container>
        </div>
    );
};

export default Team;
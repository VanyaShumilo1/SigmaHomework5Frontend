import React from 'react';
import styles from './TeamCard.module.scss'
import Title from "../../UI/Title/Title";
import Subtitle from "../../UI/Subtitle/Subtitle";
import instagramIcon from '../../../img/socials/insta.svg'
import twitterIcon from '../../../img/socials/twit.svg'
import facebookIcon from '../../../img/socials/fb.svg'


const TeamCard = ({image, name, job, socials, ...props}) => {
    return (
        <div className={styles.teamCard}>
            <div className={styles.teamCard__image}>
                <img src={image} alt="person"/>
            </div>
            <div className={styles.teamCard__content}>
                <Title className={styles.teamCard__name}>{name}</Title>
                <div className={styles.teamCard__footer}>
                    <Subtitle className={styles.teamCard__job}>{job}</Subtitle>
                    <div className={styles.teamCard__socials}>
                        {
                            socials?.instagram
                                && <a href={'https://instagram.com/'} target={'_blank'}><img src={instagramIcon} alt="insta"/></a>
                        }
                        {
                            socials?.facebook
                            && <a href={'https://facebook.com/'} target={'_blank'}><img src={facebookIcon} alt="fb"/></a>
                        }
                        {
                            socials?.twitter
                            && <a href={'https://twitter.com/'} target={'_blank'}><img src={twitterIcon} alt="insta"/></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
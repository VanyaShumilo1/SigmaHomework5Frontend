import React from 'react';
import Container from "../Container/Container";
import styles from './footer.module.scss'
import Title from "../UI/Title/Title";
import logo from '../../img/common/logo.svg'
import instagramLogo from '../../img/socials/insta.svg'
import facebookLogo from '../../img/socials/fb.svg'
import twitterLogo from '../../img/socials/twit.svg'
import pinterestLogo from '../../img/socials/pin.svg'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container className={styles.footer__wrapper}>
                <div className={styles.footer__contact}>
                    <Title className={styles.footer__title}>Contact Us</Title>
                    <div className={styles.footer__contact_wrapper}>
                        <div className={styles.footer__contact_item}>
                            <div className={styles.footer__contact_subtitle}>Email</div>
                            <a className={styles.footer__contact_link} href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
                        </div>
                        <div className={styles.footer__contact_item}>
                            <div className={styles.footer__contact_subtitle}>Phone</div>
                            <a className={styles.footer__contact_link} href="tel:939493949">939493949</a>
                        </div>
                        <div className={styles.footer__contact_item}>
                            <div className={styles.footer__contact_subtitle}>Address</div>
                            <a className={styles.footer__contact_link} href="https://goo.gl/maps/gDRLni2765AZgWwV7" target={'_blank'}>88 road, Brooklyn street, USA</a>
                        </div>
                    </div>

                </div>
                <div className={styles.footer__content}>
                    <img className={styles.footer__logo} src={logo} alt="logo"/>
                    <div className={styles.footer__content_text}>
                        Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing
                    </div>
                    <div className={styles.footer__content_socials}>
                        <a className={styles.footer__content_link} href={'https://www.instagram.com/'}>
                            <img src={instagramLogo} alt="insta"/>
                        </a>
                        <a className={styles.footer__content_link} href={'https://uk-ua.facebook.com/'}>
                            <img src={facebookLogo} alt="fb"/>
                        </a>
                        <a className={styles.footer__content_link} href={'https://twitter.com/'}>
                            <img src={twitterLogo} alt="twitter"/>
                        </a>
                        <a className={styles.footer__content_link} href={'https://pinterest.com/'}>
                            <img src={pinterestLogo} alt="pinterest"/>
                        </a>
                    </div>
                </div>
                <div className={styles.footer__pages}>
                    <Title className={styles.footer__title}>Utility Pages</Title>
                    <div className={styles.footer__pages_wrapper}>
                        <Link to={'/'}>Style guide</Link>
                        <Link to={'/'}>404 Not Found</Link>
                        <Link to={'/'}>Password Protected</Link>
                        <Link to={'/'}>Licenses</Link>
                        <Link to={'/'}>Changelog</Link>
                    </div>
                </div>
            </Container>

            <div className={styles.footer__copyright}>
                Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
            </div>
        </div>
    );
};

export default Footer;
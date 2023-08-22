import React from 'react';
import Container from "../Container";
import styles from '../../styles/nav.module.scss'
import {Link, NavLink } from "react-router-dom";
import logo from '../../img/common/logo.svg'
import Search from "../Search";
import CartInHeader from "../CartInHeader";
import downArrow from '../../img/common/downarrow.svg'

const Nav = () => {
    return (
        <Container>
            <nav className={styles.nav}>
                <div className={[styles.nav__wrapper, styles.nav__wrapper_left].join(' ')}>
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'}/>
                    </Link>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/pages'}>Pages</NavLink>
                            <img src={downArrow} alt="arrow"/>
                        </li>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/shop'}>Shop</NavLink>
                        </li>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/projects'}>Projects</NavLink>
                        </li>
                        <li className={styles.nav__list_item}>
                            <NavLink to={'/news'}>News</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={[styles.nav__wrapper, styles.nav__wrapper_right].join(' ')}>
                    <Search/>
                    <CartInHeader cartCount={0}/>
                </div>

            </nav>
        </Container>
    );
};

export default Nav;
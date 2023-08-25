import React, {useState} from 'react';
import headerStyles from "./pageHeader.module.scss";
import backgroundsStyles from "./pageHeaderBackGrounds.module.scss";
import styles from './pageHeader.module.scss'
import Container from "../Container/Container";
import Title from "../UI/Title/Title";

const PageHeader = ({title, className, bg, ...props}) => {

    let background = ''

    if(bg === 1) {
        background = backgroundsStyles.bg1
    }

    return (
        <header className={[styles.header, background].join(' ')} {...props}>
            <Container className={headerStyles.header__wrapper}>
                <Title className={headerStyles.header__title}>{title}</Title>
            </Container>
        </header>
    );
};

export default PageHeader;
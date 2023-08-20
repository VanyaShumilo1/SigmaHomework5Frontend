import React, {useState} from 'react';
import styles from '../../styles/newsletter.module.scss'
import Title from "../UI/Title";
import Input from "../UI/Input";
import Button from "../UI/Button";
import buttonStyles from '../../styles/button.module.scss'
import Container from "../Container";

const Newsletter = () => {

    const [email, setEmail] = useState('')

    return (
        <Container className={styles.newsletter}>
                <Title className={styles.newsletter__title}>Subscribe to our Newsletter</Title>
                <form className={styles.newsletter__form}>
                    <Input className={styles.newsletter__input} type={'text'} placeholder={'Your Email Address'} value={email} setValue={setEmail}/>
                    <Button className={[buttonStyles.button_blue, styles.newsletter__button].join(' ')}>Subscribe</Button>
                </form>
        </Container>

    );
};

export default Newsletter;
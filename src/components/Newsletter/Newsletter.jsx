import React, {useState} from 'react';
import styles from './newsletter.module.scss'
import Title from "../UI/Title/Title";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import buttonStyles from '../UI/Button/button.module.scss'
import Container from "../Container/Container";
import {useNavigate} from "react-router-dom";

const Newsletter = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        if (email.toLocaleLowerCase() === 'admin') {
            navigate('/admin')
        }
    }

    return (
        <Container className={styles.newsletter}>
            <Title className={styles.newsletter__title}>Subscribe to our Newsletter</Title>
            <form className={styles.newsletter__form}>
                <Input className={styles.newsletter__input}
                       type={'email'}
                       placeholder={'Your Email Address'}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleSubmit}
                        className={[buttonStyles.button_blue, styles.newsletter__button].join(' ')}>Subscribe</Button>
            </form>
        </Container>

    );
};

export default Newsletter;
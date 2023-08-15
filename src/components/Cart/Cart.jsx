import React, {useContext, useState} from 'react';
import styles from '../../styles/cart.module.scss'
import Container from "../Container";
import {Context} from "../../context";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import buttonStyles from '../../styles/button.module.scss'
import Input from "../UI/Input";
import inputStyles from '../../styles/input.module.scss'
import {Navigate} from "react-router-dom";

const Cart = () => {

    const {cartItems, setCartItems} = useContext(Context)

    const totalCost = cartItems.reduce((prev, cur) => {
        if (cur.product.discount) {
            return prev + cur.product.discountPrice * cur.quantity
        }
        return prev + cur.product.originalPrice * cur.quantity
    }, 0)

    const discount = cartItems.reduce((prev, cur) => {
        if (cur.product.discount) {
            return prev + (cur.product.originalPrice - cur.product.discountPrice) * cur.quantity
        }
        return prev
    }, 0)

    const [isFormActive, setIsFormActive] = useState(false)

    const handleShowForm = () => {
        setIsFormActive(true)
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex = /\d+/
    const handleSubmit = (event) => {
        event.preventDefault()
        if (name.length >= 3 && emailRegex.test(email) && phoneRegex.test(phone) && phoneRegex.length > 5 && address.length >= 3) {

        }

        if (name.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }

        if (!emailRegex.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }

        if (address.length < 3) {
            setAddressError(true)
        } else {
            setAddressError(false)
        }

        if (!phoneRegex.test(phone) || phoneRegex.length <= 5) {
            setPhoneError(true)
        } else {
            setPhoneError(false)
        }
    }

    if (cartItems.length === 0) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={styles.cart}>
            <Container>
                <div className={styles.cart__items}>
                    {
                        cartItems.map(item => <CartItem key={item.product._id} item={item}/>)
                    }
                </div>
                <div className={styles.cart__price}>
                    <div className={styles.cart__price_wrapper}>
                        <div className={styles.cart__price_item}>Total cost</div>
                        <div className={styles.cart__price_item}>{totalCost}</div>
                        <div className={styles.cart__price_item}>Discount</div>
                        <div className={styles.cart__price_item}>{discount}</div>
                    </div>
                </div>

                <form className={[styles.cart__form, !isFormActive && styles.hide].join(' ')}>
                    <div className={styles.cart__form_wrapper}>
                        <div>
                            <label className={styles.cart__form_label} htmlFor="name">Full name*</label>
                            <Input className={[nameError && styles.error].join(' ')} type={'text'} id={'name'}
                                   value={name} setValue={setName}
                                   placeholder={'Your Email Address'}/>
                        </div>
                        <div>
                            <label className={styles.cart__form_label} htmlFor="email">Your email*</label>
                            <Input className={[emailError && styles.error].join(' ')} type={'email'} id={'email'}
                                   value={email} setValue={setEmail}
                                   placeholder={'example@yourmail.com'}/>
                        </div>
                        <div>
                            <label className={styles.cart__form_label} htmlFor="address">Address*</label>
                            <Input className={[addressError && styles.error].join(' ')} type={'text'} id={'address'} value={address} setValue={setAddress}
                                   placeholder={'Your Company Address'}/>
                        </div>
                        <div>
                            <label className={styles.cart__form_label} htmlFor="phone">Phone number*</label>
                            <Input className={[phoneError && styles.error].join(' ')} type={'text'} id={'phone'} value={phone} setValue={setPhone}
                                   placeholder={'Enter Your Phone'}/>
                        </div>
                        <div className={styles.cart__form_textAreaWrapper}>
                            <label className={styles.cart__form_label} htmlFor="message">Message</label>
                            <textarea className={inputStyles.input} id="message" value={message}
                                      onChange={(e) => setMessage(e.target.value)}
                                      placeholder={'Some Extra Information'}></textarea>
                        </div>
                    </div>

                    <Button className={[buttonStyles.button_blue, styles.cart__form_submit].join(' ')}
                            onClick={(event) => handleSubmit(event)}>Confirm</Button>
                </form>
                <Button
                    className={[buttonStyles.button_blue, styles.cart__button, isFormActive && styles.hide].join(' ')}
                    onClick={handleShowForm}>
                    To order
                </Button>
            </Container>
        </div>
    );
};

export default Cart;
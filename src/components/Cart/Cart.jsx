import React, {useContext, useState} from 'react';
import styles from '../../styles/cart.module.scss'
import Container from "../Container";
import {Context} from "../../context";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import buttonStyles from '../../styles/button.module.scss'
import Input from "../UI/Input";

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

    const [name, setName] = useState('')

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

            <Button className={[buttonStyles.button_blue, styles.cart__button].join(' ')}>To order</Button>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input id={'name'} value={name} setValue={setName} placeholder={'name'}/>
                    </div>
                </form>

            </Container>
        </div>
    );
};

export default Cart;
import React, {useContext} from 'react';
import styles from '../../styles/cart.module.scss'
import Container from "../Container";
import {Context} from "../../context";
import CartItem from "./CartItem";

const Cart = () => {

    const {cartItems, setCartItems} = useContext(Context)

    const totalCost = cartItems.reduce((prev, cur) => {
        if (cur.product.discount === true) {
           return prev + cur.product.discountPrice * cur.quantity
        }
        return prev + cur.product.originalPrice * cur.quantity
    }, 0)

    const discount = cartItems.reduce((prev, cur) => {
        if (cur.product.discount === true) {
            return prev + (cur.product.originalPrice - cur.product.discountPrice) * cur.quantity
        }
        return prev
    }, 0)

    console.log(discount)

    return (
        <div className={styles.cart}>
            <Container>
                <div className={styles.cart__items}>
                    {
                        cartItems.map(item => <CartItem item={item}/>)
                    }
                </div>

                <div className={styles.cart__total}>
                    <div>
                        <div>{totalCost} {discount}</div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Cart;
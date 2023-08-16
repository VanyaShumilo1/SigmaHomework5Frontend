import React, {useContext, useState} from 'react';
import ProductPrice from "../Products/ProductPrice";
import NumberInput from "../UI/NumberInput";
import CloseButton from "../UI/CloseButton";
import styles from '../../styles/cartItem.module.scss'
import Title from "../UI/Title";
import {Context} from "../../context";
import NumberInputInCart from "../UI/NumberInputInCart";

const CartItem = ({item, ...props}) => {

    const {cartItems, setCartItems} = useContext(Context)
    const [quantity, setQuantity] = useState(item?.quantity)

    const handleQuantity = (value) => {
        setQuantity(value)
        const cartItemsClone = cartItems.map(currentItem => {
            if(currentItem.product._id === item.product._id) {
                currentItem.quantity = value
                return currentItem
            }
            return currentItem
        })

        setCartItems(cartItemsClone)
    }

    const handleRemoveItem = () => {
        setCartItems(cartItems.filter(elem => elem.product._id !== item.product._id))
    }


    return (
        <div {...props} className={styles.cartItem}>
            <div className={styles.cartItem__content}>
                <div className={styles.cartItem__image}>
                    <img src={`http://localhost:5000/uploads/${item?.product?.imageUrl}`} alt="product"/>
                </div>
                <div className={styles.cartItem__info}>
                    <Title className={styles.cartItem__title}>{item?.product?.title}</Title>
                    <ProductPrice inCart={true} className={styles.cartItem__price} product={item?.product}/>
                </div>

            </div>
            <div className={styles.cartItem__triggers}>
                <Title className={styles.cartItem__triggers_text}>Quantity:</Title>
                <NumberInput className={styles.cartItem__input} value={quantity} setValue={setQuantity} onChange={(e) => handleQuantity(e.target.value)}/>
                <CloseButton onClick={handleRemoveItem} className={styles.cartItem__closeButton}>X</CloseButton>
            </div>
        </div>
    );
};

export default CartItem;
import React from 'react';
import ProductPrice from "../Products/ProductPrice";
import NumberInput from "../UI/NumberInput";
import CloseButton from "../UI/CloseButton";
import styles from '../../styles/cartItem.module.scss'
import Title from "../UI/Title";

const CartItem = ({item, ...props}) => {
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
                <NumberInput className={styles.cartItem__input} value={item?.quantity}/>
                <CloseButton className={styles.cartItem__closeButton}>X</CloseButton>
            </div>
        </div>
    );
};

export default CartItem;
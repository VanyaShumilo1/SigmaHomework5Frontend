import React from 'react';
import {Link} from 'react-router-dom'
import cartLogo from '../img/common/cart.svg'
import styles from '../styles/cartInHeader.module.scss'
const CartInHeader = ({cartCount}) => {

    return (
        <Link to={'/cart'} className={styles.cartInHeader}>
            <div className={styles.cartInHeader__img}>
                <img src={cartLogo} alt="Cart"/>
            </div>

            Cart ({cartCount})
        </Link>
    );
};

export default CartInHeader;
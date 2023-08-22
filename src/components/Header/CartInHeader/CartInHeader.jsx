import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import cartLogo from '../../../img/common/cart.svg'
import styles from './cartInHeader.module.scss'
import {Context} from "../../../context";
const CartInHeader = ({cartCount}) => {

    const {cartItems} = useContext(Context)

    return (
        <Link to={'/cart'} className={styles.cartInHeader}>
            <div className={styles.cartInHeader__img}>
                <img src={cartLogo} alt="CartPage"/>
            </div>

            Cart ({cartItems.reduce((prev, cur) => Number(cur.quantity) + prev, 0)})
        </Link>
    );
};

export default CartInHeader;
import React from 'react';
import styles from './orderProduct.module.scss'
import backendUrl from "../../../utils/backendUrl";

const OrderProduct = ({item, ...props}) => {
    return (
        <div className={styles.orderProduct}>
            <div>
                {item.quantity}x
            </div>
            <div className={styles.orderProduct__image}>
                <img src={`${backendUrl}/uploads/${item.product?.imageUrl}`} alt="product"/>
            </div>
            <div>
                {item.product.title}
            </div>
            <div>
                {item.product.discount ? item.product.discountPrice : item.product.originalPrice}$
            </div>

        </div>
    );
};

export default OrderProduct;
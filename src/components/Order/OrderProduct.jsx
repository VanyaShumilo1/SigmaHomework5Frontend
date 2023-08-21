import React from 'react';
import styles from '../../styles/order.module.scss'

const OrderProduct = ({item, ...props}) => {
    return (
        <div className={styles.orderProduct}>
            <div>
                {item.quantity}x
            </div>
            <div className={styles.orderProduct__image}>
                <img src={`http://localhost:1000/uploads/${item.product?.imageUrl}`} alt="product"/>
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
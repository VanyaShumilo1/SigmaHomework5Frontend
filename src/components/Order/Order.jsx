import React from 'react';
import styles from '../../styles/order.module.scss'
import OrderProduct from "./OrderProduct";


const Order = ({order, index, ...props}) => {

    const totalCost = order.products.reduce((prev, cur) => {
        if (cur.product.discount) {
            return prev + cur.product.discountPrice * cur.quantity
        }
        return prev + cur.product.originalPrice * cur.quantity
    }, 0)

    return (
        <div className={styles.order}>
            <div className={styles.order__number}>{Number(index) + 1}</div>
            <header className={styles.order__header}>
                <div>Name: {order?.fullName}</div>
                <div>Email: {order?.email}</div>
                <div>Address: {order?.address}</div>
                <div>Phone: {order?.phone}</div>
            </header>
            {
                order?.message &&
                <>
                    <div className={styles.order__message}>Message: {order?.message}</div>
                </>
            }

            <div className={styles.order__products}>
                {
                    order?.products.map((item, index) => <OrderProduct key={item.product._id} item={item}/>)
                }
            </div>
            <div className={styles.order__price}>
                Total: {totalCost}$
            </div>
        </div>
    );
};

export default Order;
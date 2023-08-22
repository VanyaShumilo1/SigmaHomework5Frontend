import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import axios from "../axios";
import Container from "../components/Container/Container";
import Order from "../components/Order/Order";
import styles from '../styles/admin.module.scss'
import Title from "../components/UI/Title/Title";

const Admin = () => {

    const [orders, setOrders] = useState([])

    const [getOrders, isOrdersLoading, ordersError] = useFetching( async () => {
        const response = await axios.get('/order')
        setOrders(response.data)
    })

    useEffect(() => {
        getOrders()
    }, []);

    if(ordersError) {
        console.log(ordersError)
    }


    return (
        <Container className={styles.admin}>
            <Title>Orders</Title>

            <div className={styles.admin__orders}>
                {
                    !isOrdersLoading && orders.map((order, index)=> <Order key={order._id} order={order} getOrders={getOrders} index={index}/>)
                }
            </div>

        </Container>
    );
};

export default Admin;
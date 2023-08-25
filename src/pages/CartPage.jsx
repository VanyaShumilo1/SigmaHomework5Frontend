import React from 'react';
import Cart from "../components/Cart/Cart";
import headerStyles from '../components/PageHeader/pageHeaderBackGrounds.module.scss'
import PageHeader from "../components/PageHeader/PageHeader";

const CartPage = () => {
    return (
        <>
            <PageHeader bg={1} title={'Cart'}/>
            <Cart/>
        </>
    );
};

export default CartPage;
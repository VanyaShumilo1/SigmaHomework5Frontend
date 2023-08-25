import React from 'react';
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import PageHeader from "../components/PageHeader/PageHeader";

const Shop = () => {
    return (
        <div>
            <PageHeader title={"Shop"} bg={1}/>
            <Products/>
            <Newsletter/>
        </div>
    );
};

export default Shop;
import React from 'react';
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import PageHeader from "../components/PageHeader/PageHeader";

const ShopPage = () => {
    return (
        <div>
            <PageHeader title={"ShopPage"} bg={1}/>
            <Products/>
            <Newsletter/>
        </div>
    );
};

export default ShopPage;
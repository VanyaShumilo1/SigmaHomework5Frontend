import React, {useEffect, useState} from 'react';
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import styles from '../../styles/products.module.scss'
import buttonStyles from '../../styles/button.module.scss'
import axios from '../../axios'
import ProductCard from "./ProductCard";
import Container from "../Container";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../UI/Loader";
import Button from "../UI/Button";
import Overlay from "./Overlay";

const Products = () => {

    const [products, setProducts] = useState([])
    const [showAllProducts, setShowAllProducts] = useState(false)

    const [getProducts, isProductsLoading, productsError] = useFetching(async () => {
        const response = await axios.get('/products')
        setProducts(response.data)
        return response
    })

    useEffect(() => {
        getProducts()
    }, [])

    const productsWithDiscount = products.filter(product => product.discount === true)
    const productsWithoutDiscount = products.filter(product => product.discount !== true)

    const handleClick = () => {
        setShowAllProducts(!showAllProducts)
    }

    return (
        <div className={styles.products}>

            <Overlay product={products[0]}/>

            <Container>
                <Subtitle className={styles.subtitle}>Categories</Subtitle>
                <Title className={styles.title}>Our Products</Title>
                <div className={styles.products__wrapper}>
                    {
                        isProductsLoading
                            ?
                            <Loader/>
                            :
                            showAllProducts
                                ?
                                <>
                                    {
                                        productsWithDiscount.map(product =>
                                            <ProductCard key={product._id} product={product}/>
                                        )
                                    }
                                    {
                                        productsWithoutDiscount.map(product =>
                                            <ProductCard key={product._id} product={product}/>
                                        )
                                    }

                                </>
                                :
                                productsWithDiscount.slice(0, 8).map(product =>
                                    <ProductCard key={product._id} product={product}/>
                                )
                    }
                </div>
                <Button
                    onClick={() => handleClick()}
                    className={[styles.buttonShow, showAllProducts ? buttonStyles.button_black : buttonStyles.button_blue].join(' ')}>
                    {showAllProducts ? "Hide All" : "Load More"}
                </Button>
            </Container>

        </div>
    );
};

export default Products;
import React, {useContext, useEffect, useState} from 'react';
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
import {Context} from "../../context";

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

    const handleShowProducts = () => {
        setShowAllProducts(!showAllProducts)
    }

    const [isOverlayActive, setIsOverlayActive] = useState(false)
    const [productInOverlay, setProductInOverlay] = useState({})

    const handleShowOverlay = (product) => {
        setIsOverlayActive(true)
        setProductInOverlay(product)
    }

    const {cartItems} = useContext(Context)

    return (
        <div className={styles.products}>

            {
                isOverlayActive && <Overlay isOverlayActive={isOverlayActive} setIsOverlayActive={setIsOverlayActive} product={productInOverlay}/>
            }

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
                                            <ProductCard onClick={() => handleShowOverlay(product)} key={product._id}
                                                         product={product}/>
                                        )
                                    }
                                    {
                                        productsWithoutDiscount.map(product =>
                                            <ProductCard onClick={() => handleShowOverlay(product)} key={product._id}
                                                         product={product}/>
                                        )
                                    }
                                </>
                                :
                                productsWithDiscount.slice(0, 8).map(product =>
                                    <ProductCard onClick={() => handleShowOverlay(product)} key={product._id}
                                                 product={product}/>
                                )
                    }
                </div>
                <Button
                    onClick={() => handleShowProducts()}
                    className={[styles.buttonShow, showAllProducts ? buttonStyles.button_black : buttonStyles.button_blue].join(' ')}>
                    {showAllProducts ? "Hide All" : "Load More"}
                </Button>
            </Container>

        </div>
    );
};

export default Products;
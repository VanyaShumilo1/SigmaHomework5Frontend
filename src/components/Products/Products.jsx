import React, {useContext, useEffect, useRef, useState} from 'react';
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import styles from './products.module.scss'
import buttonStyles from '../UI/Button/button.module.scss'
import ProductCard from "./ProductCard/ProductCard";
import Container from "../Container/Container";
import Loader from "../UI/Loader/Loader";
import Button from "../UI/Button/Button";
import Overlay from "../Overlay/Overlay";
import {Context} from "../../context";
import GridLayout from "../GridLayout/GridLayout";

const Products = () => {

    const {productBlockId} = useContext(Context)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const {products, isProductsLoading} = useContext(Context)

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

    return (
        <div className={styles.products} id={productBlockId}>

            {
                isOverlayActive && <Overlay isOverlayActive={isOverlayActive} setIsOverlayActive={setIsOverlayActive} product={productInOverlay}/>
            }

            <Container>
                <Subtitle className={styles.subtitle}>Categories</Subtitle>
                <Title className={styles.title}>Our Products</Title>
                <GridLayout className={styles.products__wrapper}>
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
                </GridLayout>
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
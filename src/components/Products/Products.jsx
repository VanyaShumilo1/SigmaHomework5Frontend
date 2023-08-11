import React, {useEffect, useState} from 'react';
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import styles from '../../styles/products.module.scss'
import axios from '../../axios'
import ProductCard from "./ProductCard";
import Container from "../Container";

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('/products')
        setProducts(response.data)
        return response
    }

    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)

    return (
        <Container className={styles.products}>
            <Subtitle className={styles.subtitle}>Categories</Subtitle>
            <Title className={styles.title}>Our Products</Title>
            <div className={styles.products__wrapper}>

                {
                    products.map(product =>
                        <ProductCard key={product.id} product={product}/>
                    )
                }

            </div>
        </Container>
    );
};

export default Products;
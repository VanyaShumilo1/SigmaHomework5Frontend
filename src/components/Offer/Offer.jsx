import React, {useContext} from 'react';
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import {Context} from "../../context";
import ProductCard from "../Products/ProductCard";
import Container from "../Container";
import styles from '../../styles/offer.module.scss'

const Offer = () => {

    const {products} = useContext(Context)

    return (
        <div className={styles.offer}>
            <Container>
                <Subtitle>Offer</Subtitle>
                <Title className={styles.offer__title}>We Offer Organic For You</Title>

                <div className={styles.offer__cards}>
                    {
                        products.slice(0, 4).map(product => <ProductCard product={product}/>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Offer;
import React, {useContext} from 'react';
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import {Context} from "../../context";
import ProductCard from "../Products/ProductCard/ProductCard";
import Container from "../Container/Container";
import styles from './offer.module.scss'
import GridLayout from "../GridLayout/GridLayout";

const Offer = () => {

    const {products, productBlockId} = useContext(Context)

    return (
        <div className={styles.offer}>
            <Container>
                <Subtitle>Offer</Subtitle>
                <Title className={styles.offer__title}>We Offer Organic For You</Title>

                <GridLayout className={styles.offer__cards}>
                    {
                        products.slice(0, 4).map(product => <a key={product._id} href={`#${productBlockId}`}><ProductCard product={product}/></a>)
                    }
                </GridLayout>
            </Container>

        </div>
    );
};

export default Offer;
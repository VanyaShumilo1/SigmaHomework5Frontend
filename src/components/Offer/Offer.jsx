import React, {useContext} from 'react';
import Subtitle from "../UI/Subtitle";
import Title from "../UI/Title";
import {Context} from "../../context";
import ProductCard from "../Products/ProductCard";
import Container from "../Container";
import styles from '../../styles/offer.module.scss'
import GridLayout from "../GridLayout";

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
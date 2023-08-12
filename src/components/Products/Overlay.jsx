import React from 'react';
import styles from "../../styles/overlay.module.scss";
import Container from "../Container";
import {capitalize} from "../../utils/capitalize";
import Title from "../UI/Title";
import stars from '../../img/products/stars.svg'
import ProductPrice from "./ProductPrice";
import NumberInput from "../UI/NumberInput";

const Overlay = ({product, ...props}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <Container>
                    <div className={styles.modal__wrapper}>
                        <div className={styles.modal__img}>
                            <div className={styles.modal__type}>{capitalize(product?.type || "none")}</div>
                            <img src={`http://localhost:5000/uploads/${product?.imageUrl}`} alt="product"/>
                        </div>
                        <div className={styles.modal__content}>
                            <Title className={styles.modal__title}>{product?.title}</Title>
                            <img className={styles.modal__stars} src={stars} alt="rating"/>
                            <ProductPrice className={styles.modal__price} product={product}/>
                            <div className={styles.modal__text}>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </div>
                            <NumberInput/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Overlay;
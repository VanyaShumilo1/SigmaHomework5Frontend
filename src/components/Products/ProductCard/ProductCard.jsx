import React from 'react';
import styles from './productCard.module.scss'
import {capitalize} from "../../../utils/capitalize";
import stars from '../../../img/common/stars.svg'
import ProductPrice from "../../UI/ProductPrice/ProductPrice";
import backendUrl from "../../../utils/backendUrl";

const ProductCard = ({product, ...props}) => {
    return (
        <div {...props} className={styles.productCard}>
            <div className={styles.productCard__type}>{capitalize(product.type || 'none')}</div>
            <div className={styles.productCard__image}>
                <img src={`${backendUrl}/uploads/${product?.imageUrl}`} alt="product"/>
            </div>
            <h3 className={styles.productCard__title}>{product?.title}</h3>
            <div className={styles.productCard__line}></div>
            <div className={styles.productCard__footer}>
                <ProductPrice product={product}/>
                <img src={stars} alt="stars"/>
            </div>
        </div>
    );
};

export default ProductCard;
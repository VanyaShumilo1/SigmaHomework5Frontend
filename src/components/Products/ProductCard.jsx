import React from 'react';
import styles from '../../styles/productCard.module.scss'
import {capitalize} from "../../utils/capitalize";
import stars from '../../img/products/stars.svg'

const ProductCard = ({product, ...props}) => {
    return (
        <div {...props} className={styles.productCard}>
            <div className={styles.productCard__type}>{capitalize(product.type)}</div>
            <div className={styles.productCard__image}>
                <img src={`http://localhost:5000/uploads/${product?.imageUrl}`} alt=""/>
            </div>
            <h3 className={styles.productCard__title}>{product?.title}</h3>
            <div className={styles.productCard__line}></div>
            <div className={styles.productCard__footer}>
                <div className={styles.productCard__price}>
                    {
                        product?.discount
                            ?
                            <>
                                <div className={styles.productCard__price_nonActual}>
                                    {Number(product?.originalPrice).toFixed(2)}
                                </div>
                                <div className={styles.productCard__price_actual}>
                                    {Number(product?.discountPrice).toFixed(2)}
                                </div>
                            </>
                            :
                            <div>
                                <div className={styles.productCard__price_actual}>
                                    {Number(product?.originalPrice).toFixed(2)}
                                </div>
                            </div>
                    }
                </div>
                <img src={stars} alt="stars"/>
            </div>
        </div>
    );
};

export default ProductCard;
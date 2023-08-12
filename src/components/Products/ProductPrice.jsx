import React from 'react';
import styles from "../../styles/productPrice.module.scss";

const ProductPrice = ({product, className, ...props}) => {
    return (
        <div {...props} className={[styles.productPrice, className].join(' ')}>
            {
                product?.discount
                    ?
                    <>
                        <div className={styles.productPrice_nonActual}>
                            ${Number(product?.originalPrice).toFixed(2)}
                        </div>
                        <div className={styles.productPrice_actual}>
                            ${Number(product?.discountPrice).toFixed(2)}
                        </div>
                    </>
                    :
                    <div>
                        <div className={styles.productPrice_actual}>
                            ${Number(product?.originalPrice).toFixed(2)}
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductPrice;
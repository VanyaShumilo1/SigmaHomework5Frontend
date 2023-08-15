import React from 'react';
import styles from "../../styles/productPrice.module.scss";

const ProductPrice = ({product, className, inCart, ...props}) => {
    return (
        <div {...props} className={[styles.productPrice, className].join(' ')}>
            {
                product?.discount
                    ?
                    <>
                        <div  className={[styles.productPrice_nonActual, inCart && styles.fzSmall].join(' ')}>
                            ${Number(product?.originalPrice).toFixed(2)}
                        </div>
                        <div className={[styles.productPrice_actual, inCart && styles.fzBig].join(' ')}>
                            ${Number(product?.discountPrice).toFixed(2)}
                        </div>
                    </>
                    :
                    <div>
                        <div className={[styles.productPrice_actual, inCart && styles.fzBig].join(' ')}>
                            ${Number(product?.originalPrice).toFixed(2)}
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductPrice;
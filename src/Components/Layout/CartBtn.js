import React from 'react';
import styles from './HeadercartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

const CartBtn = (props) => {
    return (
        <React.Fragment>
            <button className={styles.cartBtn} onClick={props.onClick}>
                <span className={styles.icon}><CartIcon />
                </span>
                <span >Your Cart</span>
                <span className={styles.badge}>7</span>
            </button>
        </React.Fragment>
    )

}
export default CartBtn;
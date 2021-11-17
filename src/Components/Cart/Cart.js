import styles from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
    const cartItems = (<ul className={styles['cart - item']}>
        {[{ id: 'C1', name: 'Ampligo', quantity: 500, price: 450 }].map(item => (<li>{item.name}</li>))}

    </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span> 400</span>

            </div>
            <div className={styles.action}>
                <button className={styles.btn} onClick={props.onClose}>Close</button>
                <button className={styles.order}>Order</button>
            </div>

        </Modal>


    )
}

export default Cart;
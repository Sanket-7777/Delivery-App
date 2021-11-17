import ItemForm from './ItemForm';
import styles from './PesticidesList.module.css'
const PesticidesList = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const quantity = `${props.quantity} ml`;
    return <li className={styles.items}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.quantity}>{quantity}</div>
            <div className={styles.price}>{price}</div>

        </div>

        <div>
            <ItemForm />
        </div>
    </li>


}

export default PesticidesList;
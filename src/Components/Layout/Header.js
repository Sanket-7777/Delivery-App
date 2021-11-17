import React from 'react';
import styles from './Header.module.css';
import pestSprayer from '../../assets/Pesticides.jpg';
import CartBtn from './CartBtn'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Krushi Sarathi</h1>
                <CartBtn onClick={props.onShowCart} />
            </header>
            <div className={styles.image}>
                <img src={pestSprayer} alt='pestSprayer' />
            </div>
        </React.Fragment >
    )
}

export default Header;
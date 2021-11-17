import React from 'react';
import styles from './AvailableItems.module.css';
import PesticidesList from './PesticidesList/PesticidesList';
import Card from '../UI/Card'
const items = [
    {
        id: 'p1',
        name: 'Alika',
        price: 350,
        Quantity: 500,
    },
    {
        id: 'p2',
        name: 'Azec',
        price: 300,
        Quantity: 500,
    },
    {
        id: 'p3',
        name: 'Korajan',
        price: 450,
        Quantity: 500,
    },
    {
        id: 'p4',
        name: 'Profex',
        price: 250,
        Quantity: 500,
    }
];
const AvailableItems = () => {
    const ItemsList = items.map(item => <PesticidesList
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.Quantity}>
    </PesticidesList>)
    return (
        <section className={styles.list}>
            <Card>
                <ul>
                    {ItemsList}
                </ul>
            </Card>


        </section>


    )
}
export default AvailableItems;
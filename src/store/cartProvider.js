import cartContext from './cart-context';
const CartProvider = props => {
    addItemhandler = (item) => {

    }
    removeItemhandler = (id) => {

    }
    const CartContext = React.createContext({
        items: [],
        totalAmount: 0,
        addItem: addItemhandler,
        removeItem: removeItemhandler
    })
    return (
        <cartContext.Provider value={CartContext}>
            {props.children}

        </cartContext.Provider>
    )

}
export default CartProvider;
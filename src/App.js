import { React, useState } from 'react';
import Fertilizers from './Components/Fertilizers/Fertilizers';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/cartProvider';

const App = () => {
  const [ShowCart, setCart] = useState(false);
  const setCartHandler = () => {
    setCart(true);
  }
  const disableCartHandler = () => {
    setCart(false);
  }

  return (
    <CartProvider>
      {ShowCart && <Cart onClose={disableCartHandler} />}
      <Header onShowCart={setCartHandler} />
      <main>
        <Fertilizers />
      </main>
    </CartProvider>
  );
}

export default App;

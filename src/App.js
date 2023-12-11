import { useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(true);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () =>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowcart = {shownCartHandler} />
      <main>
        < Meals />
      </main>
    </CartProvider>
  );
}

export default App;

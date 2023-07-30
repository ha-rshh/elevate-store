import { createContext, useState } from 'react';
import useProductsContext from '../hooks/useProductsContext';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const cartQuantity = cartItems.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);

  const getItemQuantity = id => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = id => {
    setCartItems(currItems => {
      if (!currItems.find(item => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      }
    });
  };

  const decreaseCartQuantity = id => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    });
  };

  const removeFromCart = id => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  };

  const valueToShare = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartQuantity,
    cartItems,
  };

  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}

export default CartContext;
export { CartProvider };

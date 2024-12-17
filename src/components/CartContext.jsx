import { createContext, useState, useContext } from "react";
//1. Context Creation

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //  all logic inside provider
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  // for the shoping cart total
  const getTotalCartQuantity = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const getCartQuantity = (productId) => {
    return cartItems[productId] || 0;
  };
  return (
    <CartContext.Provider
      value={{ getCartQuantity, addToCart, getTotalCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = book => {
    setCartItems(prev => [...prev, book]);
  };

  const removeFromCart = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
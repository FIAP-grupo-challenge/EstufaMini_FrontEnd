import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addCartItem(item) {
    setTotal((prev) => prev + 1);
    setCart((oldCart) => [...oldCart, item]);
  }

  function removeCartItem(item) {
    setTotal((prev) => prev - 1);
    const indexItem = cart.indexOf(item);
    setCart((oldCart) => oldCart.filter((item, index) => index !== indexItem));
  }

  return (
    <CartContext.Provider value={{ addCartItem, removeCartItem, total, cart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }
  return context;
}

export { CartProvider, useCart };

import React, { createContext, useContext } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}

export { CartProvider, useCart };

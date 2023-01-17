import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addCart: (pd) => {},
  removeCart: (id) => {},
  emptyCart: () => {},
});

export default CartContext;

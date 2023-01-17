import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    let updatedCartItems;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.payload);
    }
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    console.log(updatedCartItems);

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchFromCart] = useReducer(cartReducer, initialState);

  const addItems = (item) => {
    dispatchFromCart({
      type: "ADD",
      payload: item,
    });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCart: addItems,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

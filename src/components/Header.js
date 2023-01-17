import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Hedaer.module.css";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const numberofCartItems = cartCtx.items.reduce((currentNumber, item) => {
    console.log(currentNumber, item.amount);
    return currentNumber + item.amount;
  }, 0);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>Practice</h3>
      </div>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavItems}>
          <li className={styles.mainNavItem}>
            <a href="">home</a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="">shop</a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="">cart- {numberofCartItems}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

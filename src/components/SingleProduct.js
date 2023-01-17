import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./singleproduct.module.css";

const SingleProduct = (props) => {
  const { product } = props;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (pd) => {
    cartCtx.addCart({
      name: pd.name,
      id: pd.id,
      key: pd.id,
      amount: 1,
      description: pd.description,
      price: pd.price,
    });
  };
  return (
    <>
      <div className={styles.product}>
        <div className={styles["product-name"]}>
          <h3>{product.name}</h3>
        </div>

        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
        <button
          className={styles["cart-button"]}
          onClick={() => addToCartHandler(product)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default SingleProduct;

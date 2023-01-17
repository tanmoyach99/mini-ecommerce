import React, { useState } from "react";
import { dummyProduct } from "../helpers/dummyProduct";
import SingleProduct from "./SingleProduct";
import styles from "./shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState(dummyProduct);

  return (
    <section className={styles.shop}>
      <div className={styles.product}>
        {products.map((pd) => {
          return <SingleProduct product={pd} key={pd.id} />;
        })}
      </div>
    </section>
  );
};

export default Shop;

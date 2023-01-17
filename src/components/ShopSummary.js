import React from "react";
import styles from "./shopSummary.module.css";

const ShopSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Authentic Product, Delivered To You</h2>
      <p>
        Choose your favorite product from our broad selection of available
        products and enjoy a great experience at home.
      </p>
      <p>
        All our products are imported from ground-source, just-in-time and of
        course by experienced persons!
      </p>
    </section>
  );
};

export default ShopSummary;

import React from "react";
import styles from "./home.module.css";
import Header from "../../components/Header";
import Shop from "../../components/Shop";
import bg from "../../images/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg";
import ShopSummary from "../../components/ShopSummary";

const Home = () => {
  const imgstyles = {
    width: "180%",
    height: "100%",
  };
  return (
    <div>
      <Header />
      <div className={styles.mainImgSection}>
        <img className={styles.mainImg} src={bg} alt="" />
      </div>
      <ShopSummary />
      <Shop />
    </div>
  );
};

export default Home;

import React from "react";
import styles from "./Head.module.css";
import CartIcon from "../../icons/CartIcon";

const Head = () => {
  const count = 0;

  return (
    <header className={styles.container}>
      <h1>ReactMeals</h1>
      <div className={styles.cartButton}>
        <button>
          <CartIcon  style="height: 1px"/> 
          <span>Your Cart</span>
          <p>{count}</p>
        </button>
      </div>
    </header>
  );
};
export default Head;

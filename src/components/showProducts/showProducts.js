import React from "react";
import { DUMMY_MEALS } from "../../dummyProductsData/dummy_meals";
import Products from "./Products";
import styles from "./showProducts.module.css";
// has to be correct name START WITH A CAPITAL S

const ShowProducts = () => {
  console.log(DUMMY_MEALS);
  return (
    <div className={styles.container} style={{ borderRadius: '10px' }}>
      {DUMMY_MEALS.map((meals) => {
        return <Products meal={meals} key={meals.id}/>;
      })}
    </div>
  );
};
export default ShowProducts;

import React, { useState } from "react";
import styles from "./Head.module.css";
import CartIcon from "../../icons/CartIcon";
import ShowCard from "../Cart/ShowCard"

const Head = () => {
  const count = 0;
   const [showCard, setShowsCard] = useState(false);
   const handleOnClick = () =>{
    setShowsCard(true);
   }

   const handleCloseButton = () => {
    setShowsCard(false);
   }
  return (
    <header className={styles.container}>
      <h1>ReactMeals</h1>
      <div className={styles.cartButton}>
        <button onClick={handleOnClick}>
          <CartIcon  style="height: 1px"/> 
          <span>Your Cart</span>
          <p>{count}</p>
        </button>

        
      </div>{showCard
        && <div className={showDiv}><ShowCard/>
        <button onClick={handleCloseButton}>close</button></div>}
    </header>
  );
};
export default Head;

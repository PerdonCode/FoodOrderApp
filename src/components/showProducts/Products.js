import React from "react";
import styles from './Products.module.css'
import Form from "./Form";
const Products = (props) => {
   return(
    <div className={styles.containerWrapper}>
         <div className={styles.container}>
        <h1>{props.meal.name}</h1>
        <span>{props.meal.description}</span>
        <p>{props.meal.price}</p>
        <Form name={props.meal.name} description={props.meal.description} price={props.meal.price} />
     </div>
    </div>
   
  );
}

export default Products;
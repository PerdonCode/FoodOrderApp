import React, { useContext } from "react";
import { FormDataContext } from "../storeData/storeProvider";

const ShowCard = (props) => {
  const { formData } = useContext(FormDataContext);
    
  return (
    <div>
      <h2>My Cart:</h2>
      {Object.entries(formData).map(([key, value]) => {

        return (
          value.amount > 0 && (
            <div key={key}>
              <h3>{key}</h3>
              <p>Price: {props.value.price}</p>
              <p>Amount: {props.value.amount}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ShowCard;

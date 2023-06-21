import React, { useState, useContext } from "react";
import { FormDataContext } from "../storeData/storeProvider"; 

const Form = (props) => {
    const {name, price} = props;
    const { formData, updateFormData } = useContext(FormDataContext);
  const [amount, setAmount] = useState(0);
  const minValue = 0;

  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const incrementAmount = (event) => {
    event.preventDefault();
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decrementAmount = (event) => {
    event.preventDefault();
    if (amount > minValue) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(amount > 0){
        updateFormData({ [name]: {name, price, amount} });
    }
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={onChangeHandler}
            min={0}
          />
          <button>ADD</button>
        </label>
      </form>
      <button onClick={incrementAmount}>+</button>
      <button onClick={decrementAmount}>-</button>
    </div>
  );
};

export default Form;

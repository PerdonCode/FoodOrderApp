import React, { useState, useContext, useEffect } from "react";
import { FormDataContext } from "../storeData/storeProvider";

const Form = (props) => {
  const { name, price } = props;
  const { formData, updateFormData } = useContext(FormDataContext);
  const [amount, setAmount] = useState(0);
  const minValue = 0;

  useEffect(() => {
    submitHandler();
    console.log(formData)
  }, [amount]); // Run submitHandler whenever amount changes

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
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

  const submitHandler = () => {
    if (amount > 0) {
      updateFormData({ [name]: { name, price, amount } });
    }
  };

  return (
    <div>
      <form>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={onChangeHandler}
            min={0}
          />
        </label>
      </form>
      <button onClick={incrementAmount}>+</button>
      <button onClick={decrementAmount}>-</button>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import styles from "./CostForm.module.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  //States for checking inputName & inputAmount are not empty
  const [inputNameValid, setInputNameValid] = useState(true);
  const [inputAmountValid, setInputAmountValid] = useState(true);

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0) {
      setInputNameValid(false);
      return;
    } else if (inputAmount.trim().length === 0) {
      setInputAmountValid(false);
      return;
    }
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    setInputName("");
    setInputAmount("");
    setInputDate("");

    props.onSaveCostData(costData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-cost__controls"]}>
        <div
          className={`${styles["new-cost__control"]} ${
            !inputNameValid && styles.invalid
          }`}
        >
          <label>Description</label>
          <input
            // style={{ borderColor: !inputNameValid ? "orange" : "white" }}
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </div>
        <div
          className={`${styles["new-cost__control"]} ${
            !inputAmountValid && styles.invalid
          }`}
        >
          <label>Amount</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className={styles["new-cost__control"]}>
          <label>Data</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            step="2023-12-12"
          />
        </div>
      </div>
      <div className={styles["new-cost__actions"]}>
        <button type="submit">Add credits</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default CostForm;

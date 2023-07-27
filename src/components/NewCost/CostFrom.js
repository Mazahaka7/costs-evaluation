import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

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
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Description</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
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
      <div className="new-cost__actions">
        <button type="submit">Add credits</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default CostForm;

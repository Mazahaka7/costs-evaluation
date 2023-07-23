import React, { useState } from "react";
import "./CostForm.css";
const CostForm = () => {
  const [name, setName] = useState(" ");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const [amount, setAmount] = useState(" ");
  const amountChangeChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const [date, setDate] = useState(" ");
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Description</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Data</label>
          <input
            type="date"
            min="2023-01-01"
            step="2023-12-12"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost-actions">
          <button type="submit">Add credits</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;

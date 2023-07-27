import React, { useState } from "react";
import CostForm from "./CostFrom";
import "./NewCost.css";

const NewCost = (props) => {
  const [showCostForm, SetShowCostForm] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString().substring(2.9),
    };
    props.onAddCost(costData);
    SetShowCostForm(false);
  };
  const clickButtonHandler = () => {
    SetShowCostForm(true); //for button in NewCost component
  };
  const cancelButtonHandler = () => {
    SetShowCostForm(false); //for cancel button in form
  };
  return (
    <div className="new-cost">
      {showCostForm ? ( //ternary operator for condition
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelButtonHandler}
        />
      ) : (
        <button onClick={clickButtonHandler}>Add new credits</button>
      )}
    </div>
  );
};
export default NewCost;

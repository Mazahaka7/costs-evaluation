import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_DATA = [
  {
    id: "c1",
    date: new Date(2023, 6, 20),
    description: "Курси React Pro",
    amount: 11.33,
  },
  {
    id: "c2",
    date: new Date(2023, 5, 20),
    description: "Курточка Ricardo",
    amount: 49.99,
  },
  {
    id: "c3",
    date: new Date(2023, 4, 20),
    description: "Кросівки TommyJeans",
    amount: 90.99,
  },
  {
    id: "c3",
    date: new Date(2022, 4, 20),
    description: "Macbook",
    amount: 500,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_DATA);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      //f-n argument is a previous version of our state, obtained automatically. The correct way to update state.
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;

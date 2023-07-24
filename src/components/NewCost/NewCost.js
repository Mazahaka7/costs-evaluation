import CostForm from "./CostFrom";
import "./NewCost.css";

const NewCost = () => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id:Math.random().toString()
    }
    console.log(costData)
  }
  return <div className="new-cost">
    <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
};
export default NewCost;

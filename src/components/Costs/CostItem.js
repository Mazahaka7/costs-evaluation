import CostDate from "./CostDate";
import Card from "./Card";
import "./CostItem.css";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default CostItem;
//Fullish component, without state. Only used to show data. Very often you'll see components without state.

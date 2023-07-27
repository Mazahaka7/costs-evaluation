import CostList from "./CostList";
import Card from "./Card";
import CostsFilter from "./CostsFilter";
import CostDiagram from "./CostDiagram";
import "./Costs.css";
import { useState } from "react";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const yearSaveHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredCosts = props.costs.filter((element) => {
    const elementYear = element.date.getFullYear().toString();
    return elementYear === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearSaveHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
        {/* {filteredCosts.length === 0 && <p>There is no data for this year</p>}
        Conditional rendering:such condition expression is better because u can check several conditions then if u use ternar operator
        {filteredCosts.length > 0 &&
          filteredCosts.map((element) => (
            <CostItem
              key={element.id}
              id={element.id}
              date={element.date}
              description={element.description}
              amount={element.amount}
            ></CostItem>
          ))} */}
      </Card>
    </div>
  );
}
export default Costs;

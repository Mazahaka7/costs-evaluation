import CostItem from "./CostItem";
import styles from "./CostList.module.css";

// another case of condition rendering using 'if' statement & aditional component

const CostList = (props) => {
  if (props.costs.length === 0) {
    return (
      <h2 className={styles["cost-list__fallback"]}>
        There is no data for this year
      </h2>
    );
  }
  return (
    <ul className={styles["cost-list"]}>
      {props.costs.map((element) => (
        <CostItem
          key={element.id} // u should always add 'key' attribute for list items
          id={element.id}
          date={element.date}
          description={element.description}
          amount={element.amount}
        ></CostItem>
      ))}
    </ul>
  );
};

export default CostList;

import DiagramBar from "./DiagramBar";
import styles from "./Diagram.module.css";

const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValues);
  console.log(props.dataSets);

  return (
    <div className={styles.diagram}>
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};
export default Diagram;

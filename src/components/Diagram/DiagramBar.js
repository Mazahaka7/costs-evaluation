import styles from "./DiagramBar.module.css";

const DiagramBar = (props) => {
  console.log(props);
  let barFillHeight = "0%"; //for dynamic styles of the element 'diagram-bar__fill'
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles["diagram-bar"]}>
      <div className={styles["diagram-bar__inner"]}>
        <div
          className={styles["diagram-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles["diagram-bar__label"]}>{props.label}</div>
    </div>
  );
};
export default DiagramBar;

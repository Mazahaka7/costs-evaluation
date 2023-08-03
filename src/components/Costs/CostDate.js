import styles from "./CostDate.module.css";

function CostDate(props) {
  const day = props.date.toLocaleString("en-En", { day: "2-digit" });
  const month = props.date.toLocaleString("en-En", { month: "long" });
  const year = props.date.getFullYear();
  // const year = props.date.toLocaleString("en-En", { year: "numeric" });
  // console.log(props.date);
  return (
    <div className={styles["cost-date"]}>
      <div className={styles["cost-date__month"]}>{month}</div>
      <div className={styles["cost-date__day"]}>{day}</div>
      <div className={styles["cost-date__year"]}>{year}</div>
    </div>
  );
}
export default CostDate;

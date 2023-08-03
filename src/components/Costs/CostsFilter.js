import styles from "./CostsFilter.module.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={styles["costs-filter"]}>
      <div className={styles["costs-filter__control"]}>
        <label>Select year</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;

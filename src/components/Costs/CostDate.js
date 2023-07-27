import "./CostDate.css";

function CostDate(props) {
  const day = props.date.toLocaleString("en-En", { day: "2-digit" });
  const month = props.date.toLocaleString("en-En", { month: "long" });
  const year = props.date.getFullYear();
  // const year = props.date.toLocaleString("en-En", { year: "numeric" });
  // console.log(props.date);
  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__day">{day}</div>
      <div className="cost-date__year">{year}</div>
    </div>
  );
}
export default CostDate;

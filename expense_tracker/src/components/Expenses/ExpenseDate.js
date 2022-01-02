import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const classes = "date " + props.className;
  return (
    <div className={classes}>
      <div className="date__large">
        <div className="date__month">{month}</div>
        <div className="date__year">{year}</div>
        <div className="date__day">{day}</div>
      </div>
      <div className="date__mobile">
        {month} {day} {year}
      </div>
    </div>
  );
};

export default ExpenseDate;

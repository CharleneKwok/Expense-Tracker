import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const year = new Date().getFullYear();
  const years = [];

  for (let i = year; i >= 2019; i--) {
    years.push(i);
  }

  const selectedYearChange = (event) => {
    props.filterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="selectYear">Filter by year</label>
        <select
          id="selectYear"
          onChange={selectedYearChange}
          value={props.selected}
        >
          {years?.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

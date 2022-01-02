import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const year = new Date().getFullYear();
  const years = [];

  for (let i = year; i >= 2019; i--) {
    years.push(i);
  }

  console.log(years);

  const selectedYearChange = (event) => {
    props.filterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label for="selectYear">Filter by year</label>
        <select id="selectYear" onChange={selectedYearChange}>
          {years?.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

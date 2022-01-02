import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  let today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  today = year + "-" + month + "-" + day;

  return (
    <form className="new-form">
      <label for="title" className="new-form__title">
        Title
      </label>
      <input type="text" id="title" />
      <label for="amount" className="new-form__amount">
        Amount
      </label>
      <input type="number" id="amount" min="0.01" step="0.01" />
      <label for="date" className="new-form__date">
        Date
      </label>
      <input type="date" id="date" min="2000-01-01" max={today} />
      <button className="new-form__button">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

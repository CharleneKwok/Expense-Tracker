import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
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

  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onAddExpense(data);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="new-form" onSubmit={submitForm}>
      <label for="title" className="new-form__title">
        Title
      </label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label for="amount" className="new-form__amount">
        Amount
      </label>
      <input
        type="number"
        id="amount"
        min="0.01"
        step="0.01"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <label for="date" className="new-form__date">
        Date
      </label>
      <input
        type="date"
        id="date"
        min="2000-01-01"
        max={today}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <div className="new-form__allbuttons">
        <button className="new-form__button" onClick={props.cancelHandler}>
          Cancel
        </button>
        <button className="new-form__button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

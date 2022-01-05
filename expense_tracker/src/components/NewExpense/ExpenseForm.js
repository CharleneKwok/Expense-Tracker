import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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
    if (title.trim().length === 0 || amount <= 0 || !date) {
      if (title.trim().length === 0) {
        setErrorMsg("Please enter the title of expense :)");
      } else if (amount <= 0) {
        setErrorMsg("Please enter valid amount :)");
      } else {
        setErrorMsg("Please enter valid date :)");
      }
      setInvalid(true);
      return;
    }
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
    <div>
      {invalid && (
        <div>
          <div
            className="new-form__backdrop"
            onClick={() => {
              setInvalid(false);
            }}
          />
          <div className="new-form__invalid">
            <button
              className="new-form__invalid-close"
              onClick={() => {
                setInvalid(false);
              }}
            >
              X
            </button>
            <p>{errorMsg}</p>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default ExpenseForm;

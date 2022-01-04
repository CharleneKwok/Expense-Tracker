import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [open, setOpen] = useState(false);

  const onAddExpense = (newExpense) => {
    const data = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddNewHandler(data);
  };

  const cancelHandler = () => {
    setOpen(false);
  };

  return (
    <Card className="new-expense">
      {open ? (
        <ExpenseForm
          onAddExpense={onAddExpense}
          cancelHandler={cancelHandler}
        />
      ) : (
        <button
          className="new-expense__open"
          onClick={() => {
            setOpen(true);
          }}
        >
          Add New Expenses
        </button>
      )}
    </Card>
  );
};

export default NewExpense;

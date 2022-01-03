import React from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onAddExpense = (newExpense) => {
    const data = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddNewHandler(data);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense} />
    </Card>
  );
};

export default NewExpense;

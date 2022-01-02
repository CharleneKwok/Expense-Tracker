import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate className="expense-item__date" date={item.date} />
      <div className="expense-item__name">{item.title}</div>
      <div className="expense-item__price">${item.amount}</div>
    </Card>
  );
};

export default ExpenseItem;

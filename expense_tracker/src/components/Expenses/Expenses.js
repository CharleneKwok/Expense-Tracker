import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const year = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(year);
  const filterChange = (year) => {
    setSelectedYear(year);
    console.log("expenses" + selectedYear);
  };

  return (
    <Card className="expense">
      <ExpensesFilter value={selectedYear} filterChange={filterChange} />
      {items?.map((item, i) => (
        <ExpenseItem item={item} key={i} />
      ))}
    </Card>
  );
};

export default Expenses;

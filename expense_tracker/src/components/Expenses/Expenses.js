import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ items }) => {
  const year = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(year);
  const filterChange = (year) => {
    setSelectedYear(year);
  };

  const filterExpenses = items.filter(
    (item) => item.date.getFullYear() == selectedYear
  );

  return (
    <Card className="expense">
      <ExpensesFilter selected={selectedYear} filterChange={filterChange} />
      <ExpenseChart expenses={filterExpenses} />
      {filterExpenses.length === 0 && (
        <p className="expense__noExpense">No expenses found </p>
      )}
      {filterExpenses.length > 0 &&
        filterExpenses.map((item) => <ExpenseItem item={item} key={item.id} />)}
    </Card>
  );
};

export default Expenses;

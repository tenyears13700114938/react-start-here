import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onFilterChangeListener = (year) => {
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={onFilterChangeListener}
      />
      {props.expenses
        .filter((item) => {
          return item.date.getFullYear().toString() === selectedYear;
        })
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
    </Card>
  );
};

export default Expenses;

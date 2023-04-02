import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onFilterChangeListener = (year) => {
    setSelectedYear(year);
  };
  const filterExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });
  return (
    <Card className="expenses">
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={onFilterChangeListener}
      />
      <ExpenseList expenses={filterExpenses} />
    </Card>
  );
};

export default Expenses;

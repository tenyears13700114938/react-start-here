import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setShowForm(false);
  };
  const addExpenseClickListener = () => {
    setShowForm(true);
  };
  const onCancelAddListener = () => {
    setShowForm(false);
  };
  const showContent = showForm ? (
    <ExpenseForm
      onSaveExpense={onSaveExpenseHandler}
      onCancelAdd={onCancelAddListener}
    ></ExpenseForm>
  ) : (
    <button onClick={addExpenseClickListener}>Add Expense</button>
  );
  return <div className="new-expense">{showContent}</div>;
};

export default NewExpense;

import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enterDate),
    };

    props.onSaveExpense(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  const onCancelAddHandler = (event) => {
    event.preventDefault();
    props.onCancelAdd();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={onCancelAddHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

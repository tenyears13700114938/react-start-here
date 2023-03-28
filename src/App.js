import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [items, setItems] = useState([]);
  const onNewExpenseHandler = (newExpense) => {
    setItems((oldItems) => {
      return [...oldItems, newExpense];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense={onNewExpenseHandler} />
      <Expenses expenses={items} />
    </div>
  );
}

export default App;

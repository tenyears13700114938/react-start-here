import Expenses from "./components/Expenses/Expenses";

function App() {
  const items = [
    { title: "Car Insurance", amount: 1, date: new Date(2023, 3, 25) },
    { title: "Car Insurance", amount: 100, date: new Date(2023, 2, 21) },
    { title: "Car Insurance", amount: 888, date: new Date(2023, 1, 6) },
    { title: "Car Insurance", amount: 666, date: new Date(2023, 3, 29) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={items} />
    </div>
  );
}

export default App;

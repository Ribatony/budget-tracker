import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import IncomeForm from "./components/IncomeForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import "./App.css"; // import the styles

export default function App() {
  const [expenses, setExpenses] = useState(() =>
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [income, setIncome] = useState(() =>
    JSON.parse(localStorage.getItem("income")) || []
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  const addExpense = (exp) => setExpenses([...expenses, exp]);
  const addIncome = (inc) => setIncome([...income, inc]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((e) => e.id !== id));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Budget Tracker</h1>
      </header>

      <div className="section card">
        <Summary expenses={expenses} income={income} />
      </div>

      <div className="section card">
        <IncomeForm onAdd={addIncome} />
      </div>

      <div className="section card">
        <ExpenseForm onAdd={addExpense} />
      </div>

      <div className="section card">
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}


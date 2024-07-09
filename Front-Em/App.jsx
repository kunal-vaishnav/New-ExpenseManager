import Expense from "./components/Expense.jsx";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
//import "./styles.css";
//import ExpenseItem from "./ExpenseItem.js";
// if we donot have components we can simply import it
export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isadded, setIsAdded] = useState(false);
  function addToggler() {
    setIsAdded(!isadded);
  }
  const loaddatahandler = (expense) => {
    setExpenses((prevexpense) => {
      return [expense, ...prevexpense];
    });
    // console.log(ex);
  };
  return (
    <div>
      <NewExpense AddData={loaddatahandler} addToggler={addToggler} />
      <Expense
        expenses={expenses}
        setExpenses={setExpenses}
        isadded={isadded}
      />
    </div>
  );
}

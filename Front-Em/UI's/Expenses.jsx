import React, { useEffect, useState } from "react";

import Card from "./Ui/Card.jsx";
import ExpenseFilter from "./NewExpense/ExpenseFilter.jsx";
import "./Expense.css";
import Expenselist from "./Expenselist.jsx";
import ExpenseChart from "./ExpenseChart.jsx";
import axios from "axios";
function Expenses(props) {
  const { setExpenses, expenses, isadded } = props;
  const [loading, setLoading] = useState(false);
  const [filteryear, setfilteryear] = useState(null);
  const [delteItem, setdelteItem] = useState(false);
  function toggleDelte() {
    setdelteItem(!delteItem);
  }
  // console.log(filteryear + "year");
  useEffect(() => {
    if (filteryear === null || filteryear === "none") return;
    axios
      .get(`http://localhost:3000/v1/expense/expense/${filteryear}`)
      .then((response) => {
        setExpenses(response.data.expenses);
      })
      .catch((error) => {
        alert(error);
      });
  }, [filteryear, isadded, delteItem]);
  const filterchangehandler = (selectedyear) => {
    setfilteryear(selectedyear);
  };
  // {props.items.map((expense) => ( }
  //earlier it props.items but you can filterexpense also pointing that props.items
  //after adding  map we can remove dynamic content it will fetch from array
  //  we donot we have to declare like this<ExpenseItem
  //title={props.items[0].title}
  //amount={props.items[0].amount}
  //date={props.items[0].date}
  //></ExpenseItem>
  //<ExpenseItem
  //title={props.items[1].title}
  //amount={props.items[1].amount}
  //date={props.items[1].date}
  //></ExpenseItem>//

  //2: declaring ternary operator it is no paragraph showing no expense found
  //{filteredexpense.length === 0 ? (
  //  <p>no expense found</p>
  //) : (
  //  filteredexpense.map((expense) => (
  //   <ExpenseItem
  //    key={expense.id}
  //   title={expense.title}
  //  amount={expense.amount}
  //  date={expense.date}
  // />
  //  ))
  //)}
  //3:if we declare && operator it will default return statement
  //{filteredexpense.length === 0 && <p>no expense found</p>}
  //{filteredexpense.length > 0 &&
  //  filteredexpense.map((expense) => (
  //   <ExpenseItem
  //    key={expense.id}
  //    title={expense.title}
  //   amount={expense.amount}
  //   date={expense.date}
  // />
  // ))}
  //:4 calling a function
  // let expensecontent = <p>no expense found</p>;
  // if (filteredexpense.length > 0) {
  //  expensecontent = filteredexpense.map((expense) => (
  //    <ExpenseItem
  //      key={expense.id}
  //       title={expense.title}
  //    amount={expense.amount}
  //    date={expense.date}
  //  />
  // ));
  //}
  //{expensecontent}

  return (
    <Card className="expensess">
      <ExpenseFilter selected={filteryear} changefilter={filterchangehandler} />
      <div>
        <Expenselist items={expenses} toggleDelte={toggleDelte} />
        <ExpenseChart expenses={expenses} />
      </div>
    </Card>
  );
}
export default Expenses;

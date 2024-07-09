import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Ui/Card";
import "./ExpenseItem.css";
import axios from "axios";

function ExpenseItem(props) {
  function deleteExpenses(eId) {
    axios
      .delete(`http://localhost:3000/v1/expense/delete/${eId}`)
      .then((response) => {
        props.toggleDelete();
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  }
  const [title, setTitle] = useState(props.title);
  //with to toLocaleString we can date format like
  // english us great britain we can set month:long year:numeric
  // 2digit long
  // <div> {props.date.toISOString()}</div>
  // with the help we can set the normal date formart
  const onchange = () => {
    setTitle("Updated");

    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title} </h2>

        <div className="expense-item__price">${props.amount}</div>
        <button
          className="expense-item__btn"
          onClick={() => {
            deleteExpenses(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}
export default ExpenseItem;

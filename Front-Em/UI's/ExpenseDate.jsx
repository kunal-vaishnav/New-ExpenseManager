import "./ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  let date_string = new Date(props.date);
  let year = date_string.getFullYear();
  let month = (date_string.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  let day = date_string.getDate().toString().padStart(2, "0");
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

import "./Expenseform.css";
import React, { useState } from "react";
import axios from "axios";
export default function Expenseform(props) {
  const { addToggler } = props;
  const [entertitle, setTitle] = useState("");
  const [enteramount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const titlechange = (event) => {
    setTitle(event.target.value);
  };

  const amountchange = (event) => {
    setAmount(event.target.value);
  };
  const datechange = (event) => {
    setDate(event.target.value);
  };
  //method 2 instead of creating indiviual usestate  we can use one usestate maps
  // each individual value for ex
  // const [userInput, setuserInput] = useState({
  //  entertitle: " ",
  //  enteramount: " ",
  //  enterdate: " ",
  // });
  // const titlechange = (event) => {
  //   setuserInput({
  // ...userInput,
  // entertitle: event.target.value,
  // });
  // };
  //const amountchange = (event) => {
  //  setuserInput({
  //    ...userInput,
  //   enteramount: event.target.value,
  //  });
  //};
  //const datechange = (event) => {
  //setuserInput({
  //  ...userInput,
  //  enterdate: event.target.value,
  // });
  // };
  //method 3 but this method is technically work but not reccomended it is not a
  //good practice because if we have large data it is properly will not give
  //latest data userinput using previous value we can target that but we will use
  //the same state of method2
  //const titlechange = (event) => {
  // setuserInput((prevvalue) => {
  // return {
  //  ...prevvalue,
  // entertitle: event.target.value,
  // };
  // });
  //};
  //const amountchange = (event) => {
  // setuserInput((prevvalue) => {
  //  return {
  //  ...prevvalue,
  //  enteramount: event.target.value,
  // };
  // });
  // };
  //const datechange = (event) => {
  // setuserInput((prevvalue) => {
  //return {
  //  ...prevvalue,
  //  enterdate: event.target.value,
  //};
  // });
  //};
  // form if we click the button it will reload we have to prevent that
  //  and we can also use to target element
  //now we will use method1
  const submitchange = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entertitle,
      amount: enteramount,
      date: new Date(enterDate),
    };
    axios
      .post("http://localhost:3000/v1/expense/add_expense", expenseData)
      .then((res) => {
        alert(res.data.message);
        addToggler();
        setTitle("");
        setAmount("");
        setDate(" ");
      })
      .catch((err) => {
        alert(err.message);
      });

    //expense data is object which is wrapping all the data as an object
  };
  return (
    <form onSubmit={submitchange}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" value={entertitle} onChange={titlechange} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>{" "}
          <input
            type="number"
            //without we can change the set or reset value
            value={enteramount}
            onChange={amountchange}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            onChange={datechange}
            min="2019-01-01"
            max="2024-12-06"
          />
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

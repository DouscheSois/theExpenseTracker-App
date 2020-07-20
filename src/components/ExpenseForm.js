import React, { useState, useContext } from "react";
import { StoreContext } from "../contextAPI/Store";
import { GenerateID } from "./GenerateID";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    id: GenerateID(),
    description: "",
    location: "",
    date: "",
    amount: "",
  });

  const { description, location, date, amount } = expense;

  const onChange = (e) =>
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });

  const { AddExpense } = useContext(StoreContext);

  // const refreshPage = () => {
  //   window.location.reload(false);
  // };

  const resetForm = () => {
    setExpense({
      ...expense,
      id: GenerateID(),
      description: "",
      location: "",
      date: "",
      amount: "",
    });
  };

  const onClick = (e) => {
    e.preventDefault(); //How useful is this in this kind of app?
    AddExpense(expense);
    console.log(expense);
    resetForm();
    // refreshPage();
  };

  return (
    <div className="input-group">
      <div className="inputs">
        <input
          type="text"
          className="form-control"
          placeholder="Add description..."
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          name="location"
          value={location}
          onChange={(e) => onChange(e)}
        />
        <input
          type="date"
          className="form-control"
          name="date"
          value={date}
          onChange={(e) => onChange(e)}
        />
        <input
          type="amount"
          className="form-control"
          placeholder="10.00"
          name="amount"
          value={amount}
          onChange={(e) => onChange(e)}
        />
        <div className="input-group-append">
          <button
            onClick={(e) => onClick(e)}
            className="btn btn-secondary"
            type="button"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;

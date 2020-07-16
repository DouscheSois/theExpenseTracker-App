import React, { useState } from "react";

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    description: "",
    location: "",
    date: "",
    amount: "",
  });

  const { description, location, date, amount } = expenseData;

  const onChange = (e) =>
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });

  const onClick = (e) => {
    if ((description !== "") & (date !== "") & (amount !== "")) {
      console.log(expenseData);
    } else {
      console.log("Missing Data");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Add description..."
        name="description"
        value={description}
        onChange={(e) => onChange(e)}
        required
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
        required
      />
      <input
        type="amount"
        className="form-control"
        placeholder="10.00"
        name="amount"
        value={amount}
        onChange={(e) => onChange(e)}
        required
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
  );
};

export default ExpenseForm;

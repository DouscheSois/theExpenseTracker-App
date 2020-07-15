import React from "react";

const ExpenseForm = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Add description..."
      />
      <input type="text" className="form-control" placeholder="Location" />
      <input type="date" className="form-control" />
      <input type="number" className="form-control" placeholder="10.00" />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;

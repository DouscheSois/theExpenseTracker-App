import React, { useContext } from "react";
import { StoreContext } from "../contextAPI/Store";

const Expense = ({ expense }) => {
  const { DeleteExpense } = useContext(StoreContext);

  return (
    <li>
      You spent <span className="expense-amount">{expense.amount}</span> dollars
      on <span className="expense-description">{expense.description}</span> at{" "}
      <span className="expense-location">{expense.location}</span> on{" "}
      <span className="expense-date">{expense.date}</span>{" "}
      <button onClick={() => DeleteExpense(expense.id)} className="delete">
        x
      </button>
    </li>
  );
};

export default Expense;

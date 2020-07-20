import React, { useContext } from "react";
import Expense from "./Expense";

import { StoreContext } from "../contextAPI/Store";

const ExpenseList = () => {
  const { expenses } = useContext(StoreContext);

  return (
    <div className="expense-list">
      <ul>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

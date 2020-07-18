import React, { useContext } from "react";
import Expense from "./Expense";
import { StoreContext } from "../contextAPI/Store";

const ExpenseList = () => {
  const { expenses } = useContext(StoreContext);
  return (
    <ul>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;

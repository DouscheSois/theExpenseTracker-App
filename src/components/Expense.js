import React from "react";

const Expense = ({ expense }) => {
  return (
    <li>
      You spent {expense.amount} dollars on {expense.description} at{" "}
      {expense.location} on {expense.date}
    </li>
  );
};

export default Expense;

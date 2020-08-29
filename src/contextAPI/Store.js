import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  expenses: [],
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Action()
  const DeleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const AddExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <StoreContext.Provider
      value={{ expenses: state.expenses, DeleteExpense, AddExpense }}
    >
      {children}
    </StoreContext.Provider>
  );
};

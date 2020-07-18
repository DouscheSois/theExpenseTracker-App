import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  expenses: [
    {
      id: 1,
      description: "Toy for Brad",
      location: "Bay Area",
      date: "24/05/02",
      amount: 34,
    },
    {
      id: 2,
      description: "Watch Game",
      location: "San Diego",
      date: "24/08/15",
      amount: 150,
    },
    {
      id: 3,
      description: "Netflix",
      location: "San Jose",
      date: "14/15/02",
      amount: 10,
    },
  ],
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, action] = useReducer(Reducer, initialState);

  return (
    <StoreContext.Provider value={{ expenses: state.expenses }}>
      {children}
    </StoreContext.Provider>
  );
};

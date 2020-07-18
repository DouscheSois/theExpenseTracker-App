import React from "react";
import Jumbotron from "./components/Jumbotron";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import { StoreProvider } from "./contextAPI/Store";
import "./App.css";

const App = () => {
  return (
    <StoreProvider>
      <Jumbotron />
      <ExpenseForm />
      <ExpenseList />
    </StoreProvider>
  );
};

export default App;

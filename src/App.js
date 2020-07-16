import React, { Fragment } from "react";
import Jumbotron from "./components/Jumbotron";
import ExpenseForm from "./components/ExpenseForm";
import Table from "./components/Table";
import "./App.css";

const App = () => (
  <Fragment>
    <Jumbotron />
    <ExpenseForm />
    <Table />
  </Fragment>
);

export default App;

//Figure it out, how the fuck to render it to the dom in table mode setting style with a delete button.

// Each expense should include:

// The date of expense
// A description of the expense
// The amount
// Where the purchases occured (eg. McDonald’s)

// User should be able to add a new expense
// User should be able to delete expense
// User should be able to see all of the expenses in an HTML table

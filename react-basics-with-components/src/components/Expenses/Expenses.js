import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ data }) {
  return (
    <Card className="expenses">
      {data.map((it, i) => (
        <ExpenseItem item={it} key={i} />
      ))}
    </Card>
  );
}

export default Expenses;

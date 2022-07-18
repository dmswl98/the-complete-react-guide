import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ data }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const dataFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          filterData={dataFilterHandler}
        />
        {data
          .filter((v) => v.date.getFullYear().toString() === filteredYear)
          .map((it, i) => (
            <ExpenseItem item={it} key={i} />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  const [filteredYear, setFilteredYear] = useState(year);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // let abc = expense.date.getFullYear();
    // console.log(typeof abc);
    // console.log(typeof filteredYear);
    return expense.date.getFullYear() === Number(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

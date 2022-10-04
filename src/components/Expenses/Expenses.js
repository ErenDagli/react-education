import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li>
            <div>
                <Card className="expenses">
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                    <ExpensesChart expenses= {filteredExpenses}/>
                    <ExpensesList items={filteredExpenses} />
                </Card>
            </div>
        </li>
    );
}

export default Expenses;
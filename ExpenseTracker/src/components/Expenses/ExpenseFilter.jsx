import { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
	// eslint-disable-next-line
	const [expenseYear, setExpenseYear] = useState("");

	const filterChangeHandler = (event) => {
		const newYear = event.target.value;

		setExpenseYear(newYear);
		props.onFilterChange(newYear);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selected} onChange={filterChangeHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;

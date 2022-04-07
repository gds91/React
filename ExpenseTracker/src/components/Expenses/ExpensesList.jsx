import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
	// Checks if the filtered year has any content and displays the appropriate message
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;

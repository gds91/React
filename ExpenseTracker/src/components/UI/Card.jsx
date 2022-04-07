import "./Card.css";

const Card = (props) => {
	// Make sure you include a white space after the first set of manually defined classes
	// or the classes will get messed up
	const classes = "card " + props.className;
	return <div className={classes}>{props.children}</div>;
}

export default Card;

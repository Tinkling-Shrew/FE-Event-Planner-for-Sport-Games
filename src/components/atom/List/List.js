import "./List.css";

export const mainClass = "list-container";

// needs a list of object to generate the items in the events list

const List = ({ list, style }) => {
	return (
		<div className={mainClass} style={style}>
			{list}
		</div>
	);
};

export default List;

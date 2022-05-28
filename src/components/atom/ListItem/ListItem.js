import "./ListItem.css";

export const mainClass = "ListItem";

const ListItem = ({ children }) => {
	return <div className={mainClass}>{children}</div>;
};

export default ListItem;

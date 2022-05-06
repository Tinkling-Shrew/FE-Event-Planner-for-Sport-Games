import "./List.css";

export const mainClass = "list-container";

// needs a list of object to generate the items in the events list

const SportEventList = ({ list }) => {
    return <div className={mainClass}>{list}</div>;
};

export default SportEventList;

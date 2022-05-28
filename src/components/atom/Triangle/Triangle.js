import "./Triangle.css";

export const mainClass = "Triangle";

const Triangle = ({ style }) => {
	return <div className={mainClass} style={style}></div>;
};

export default Triangle;

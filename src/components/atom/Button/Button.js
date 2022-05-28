import "./Button.css";

export const mainClass = "Button";

const Button = ({ children, onClick, id, style }) => {
	return (
		<button id={id} className={mainClass} onClick={onClick} style={style}>
			{children}
		</button>
	);
};

export default Button;

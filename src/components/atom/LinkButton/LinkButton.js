import "./LinkButton.css";
import { Link } from "react-router-dom";

export const mainClass = "LinkButton";

const LinkButton = ({ children, to, onClick, disabled }) => {
	return (
		<Link
			className={mainClass}
			to={to}
			onClick={onClick}
			style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
		>
			{children}
		</Link>
	);
};

export default LinkButton;

import React from "react";
import "./Title.css";

export const mainClass = "title";

const Title = ({ title, loc, style }) => {
	return (
		<span
			className={mainClass}
			style={{
				textAlign: loc === undefined ? "center" : loc,
				style,
			}}
		>
			{title && <span>{title}</span>}
		</span>
	);
};

export default Title;

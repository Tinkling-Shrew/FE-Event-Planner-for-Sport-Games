import React from "react";
import "./Title.css";

export const mainClass = "Title";

const Title = ({ title, loc, style, fontSize }) => {
	return (
		<span
			className={mainClass}
			style={{
				textAlign: loc === undefined ? "center" : loc,
				...style,
			}}
		>
			{title && title}
		</span>
	);
};

export default Title;

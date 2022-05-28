import React from "react";
import "./Logo.css";

export const mainClass = "logo-container";

const Logo = () => {
	return (
		<div className={mainClass}>
			<a className="logo-text" href="/">
				Sports Planner
			</a>
			<div className="logo-back1"></div>
			<div className="logo-back2"></div>
		</div>
	);
};

export default Logo;

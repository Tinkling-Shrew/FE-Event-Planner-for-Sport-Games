import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const mainClass = "Navbar";

const Navbar = () => {
	return (
		<div className={mainClass}>
			<Link to={{ pathname: "/" }} className="navbar-option">
				Home
			</Link>
			<Link to={{ pathname: "/lobby" }} className="navbar-option">
				Lobby
			</Link>
		</div>
	);
};

export default Navbar;

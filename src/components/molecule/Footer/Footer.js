import React from "react";
import "./Footer.css";
import Title from "../../atom/Title/Title";
import { Link } from "react-router-dom";

export const mainClass = "footer-container";

const Footer = () => {
	return (
		<div className={mainClass}>
			<Title
				title={
					<Link to={{ pathname: "/home" }} className="footer-title">
						@Sport Planner
					</Link>
				}
				loc="left"
			/>
			<div className="footer-body">
				<div className="footer-left">
					<span className="footer-text">Created using React</span>
				</div>
				<div className="footer-mid"></div>
				<div className="footer-right">
					<Link to={{ pathname: "/contact" }} className="footer-text">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

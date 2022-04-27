import React from "react";
import "./Footer.css";
import Title from "../../atom/Title/Title";

export const mainClass = "footer-container";

const Footer = () => {
    return (
        <div className={mainClass}>
            <Title title="Footer" />
            <div className="footer-info-container">
                <div>
                    <h1>Event Planner</h1>
                    <h2>Made using React</h2>
                    <h3>Project created with the help of IBM employees</h3>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;

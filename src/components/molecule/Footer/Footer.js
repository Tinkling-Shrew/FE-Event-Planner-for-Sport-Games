import React from "react";
import "./Footer.css";
import Title from "../../atom/Title/Title";

export const mainClass = "footer-container";

const Footer = () => {
    return (
        <div className={mainClass}>
            <Title
                title={
                    <a className="footer-title" href="/">
                        @Sport Planner
                    </a>
                }
                loc="left"
            />
            <div className="footer-body">
                <div className="footer-left">
                    <span className="footer-text">Created using React</span>
                </div>
                <div className="footer-mid"></div>
                <div className="footer-right">
                    <a className="footer-text" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

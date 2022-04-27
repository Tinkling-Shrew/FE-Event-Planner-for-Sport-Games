import React from "react";
import "./Logo.css";

export const mainClass = "logo-container";

const Logo = () => {
    return (
        <div className={mainClass}>
            {/* <img
                className="logo-image"
                src="https://konch.ie/vlpu3wvi8j23.png"
                alt="Our beautiful logo designed by Chinese graphic designers."
            /> */}
            <a className="logo-text" href="/home">
                Sports Planner
            </a>
        </div>
    );
};

export default Logo;

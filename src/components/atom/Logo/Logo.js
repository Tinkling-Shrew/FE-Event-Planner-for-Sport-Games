import React from "react";
import "./Logo.css";

export const mainClass = "logo-container";

const Logo = () => {
    return (
        <div className={mainClass}>
            <a className="logo-text" href="/home">
                Sports Planner
            </a>
        </div>
    );
};

export default Logo;

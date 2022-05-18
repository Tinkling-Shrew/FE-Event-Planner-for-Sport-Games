import React from "react";
import "./Navbar.css";

export const mainClass = "Navbar";

const Navbar = () => {
    return (
        <div className={mainClass}>
            <a className="navbar-option" href="/landing">
                Landing
            </a>
            <a className="navbar-option" href="/home">
                Home
            </a>
            <a className="navbar-option" href="/lobby">
                Lobby
            </a>
            <a className="navbar-option" href="/about">
                About
            </a>
        </div>
    );
};

export default Navbar;

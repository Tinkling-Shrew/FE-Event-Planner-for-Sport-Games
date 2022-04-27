import React from "react";
import "./NavbarMenu.css";

export const mainClass = "menu-container";

const Menu = () => {
    return (
        <div className={mainClass}>
            <a className="menu-option" href="/start">
                Start
            </a>
            <a className="menu-option" href="/home">
                Home
            </a>
            <a className="menu-option" href="/lobby">
                Lobby
            </a>
            <a className="menu-option" href="/about">
                About
            </a>
            <a className="menu-option" href="/contact">
                Contact
            </a>
        </div>
    );
};

export default Menu;

import React from "react";
import "./NavbarMenu.css";

export const mainClass = "menu-container";

const Menu = () => {
    return (
        <div className={mainClass}>
            <a className="menu-option" href="/landing">
                Landing
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
            <a className="menu-button" href="/create_event">
                CREATE
            </a>
        </div>
    );
};

export default Menu;

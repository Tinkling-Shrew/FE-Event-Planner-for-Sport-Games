import React from "react";
import "./NavbarMenu.css";
import Profile from "../Profile/Profile";

export const mainClass = "menu-container";

const Menu = () => {
    return (
        <div className={mainClass}>
            <a className="menu-option" href="/start">
                Start
            </a>
            <a className="menu-option" href="https://google.com">
                Lobby
            </a>
            <a className="menu-option" href="https://google.com">
                Help
            </a>
            <a className="menu-option" href="https://google.com">
                Contact
            </a>
        </div>
    );
};

export default Menu;

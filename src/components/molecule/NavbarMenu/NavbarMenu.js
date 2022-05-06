import React from "react";
import "./NavbarMenu.css";
import LinkButton from "../../atom/LinkButton/LinkButton";

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
            <LinkButton>CREATE</LinkButton>
        </div>
    );
};

export default Menu;

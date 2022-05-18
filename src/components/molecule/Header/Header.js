import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../atom/Logo/Logo";
import Navbar from "../../atom/Navbar/Navbar";
import Profile from "../../atom/Profile/Profile";
import LinkButton from "../../atom/LinkButton/LinkButton";
import Button from "../../atom/Button/Button";

export const mainClass = "header-container";

const Header = () => {
    return (
        <div className={mainClass}>
            <Logo />
            <div className="header-right">
                <Navbar />
                <LinkButton href="/create_event">CREATE</LinkButton>
            </div>
        </div>
    );
};

export default Header;

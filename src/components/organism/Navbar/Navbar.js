import React from "react";
import "./Navbar.css";
import Logo from "../../atom/Logo/Logo";
import NavbarMenu from "../../molecule/NavbarMenu/NavbarMenu";
import Profile from "../../molecule/Profile/Profile";

export const mainClass = "navbar-container";

const Navbar = () => {
    return (
        <div className={mainClass}>
            <Logo />
            <div className="navbar-right">
                <NavbarMenu value="miau" />
                <Profile />
            </div>
        </div>
    );
};

export default Navbar;

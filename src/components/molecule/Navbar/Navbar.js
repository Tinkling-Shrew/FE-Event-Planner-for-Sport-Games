import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../atom/Logo/Logo";
import NavbarMenu from "../../atom/NavbarMenu/NavbarMenu";
import Profile from "../../atom/Profile/Profile";
import LinkButton from "../../atom/LinkButton/LinkButton";
import Button from "../../atom/Button/Button";

export const mainClass = "navbar-container";

const Navbar = () => {
    var loggedIn = false;

    const [openLogin, setOpenLogin] = useState(false);

    return (
        <div className={mainClass}>
            <Logo />
            <div className="navbar-right">
                <NavbarMenu />
                {loggedIn && (
                    <>
                        <LinkButton href="/create_event">CREATE</LinkButton>
                        <Profile />
                    </>
                )}
                {!loggedIn && (
                    <Button
                        onClick={() => {
                            setOpenLogin(true);
                        }}
                    >
                        LOGIN
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;

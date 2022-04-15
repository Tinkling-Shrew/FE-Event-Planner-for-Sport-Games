import React, { useEffect } from "react";
import "./LoginPage.css";
import LoginInput from "../../components/molecule/LoginInput/LoginInput";

export const mainClass = "loginpage-container";

const LoginPage = () => {
    // sets the scrollbar to 0, aka to the top

    // var id = "";
    // var pass = "";

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className={mainClass}>
            <h1>Login</h1>
            <LoginInput />
        </div>
    );
};

export default LoginPage;

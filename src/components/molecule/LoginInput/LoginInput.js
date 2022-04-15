import React from "react";
import "./LoginInput.css";

export const mainClass = "login-input-container";

const LoginInput = () => {
    return (
        <div className={mainClass}>
            <div className="id-container">
                <span className="id-span">id:</span>
                <input className="id-input"></input>
            </div>
            <div className="pass-container">
                <span className="pass-span">pass:</span>
                <input className="pass-input"></input>
            </div>
        </div>
    );
};

export default LoginInput;

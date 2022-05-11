import "./Login.css";
import { useState, useEffect } from "react";
import Link from "../../components/atom/Link/Link";
import Title from "../../components/atom/Title/Title.js";
import Input from "../../components/atom/Input/Input";
import Button from "../../components/atom/Button/Button";

export const mainClass = "login-container";

const Login = () => {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        console.log("id: " + id);
        console.log("pass: " + pass);
    }, [id, pass]);

    return (
        <div className={mainClass}>
            <div className="login-body">
                <Title>Login</Title>
                <div className="login-input">
                    <Input
                        placeholder="Username"
                        onChange={(e) => {
                            setId(e.target.value);
                            console.log("id: " + e.target.value);
                        }}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => {
                            setPass(e.target.value);
                            console.log("pass: " + e.target.value);
                        }}
                    />
                    <Link>Register</Link>
                </div>
                <div className="input-button-container">
                    <Button>Cancel</Button>
                    <Button>Enter</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;

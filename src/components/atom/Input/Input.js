import "./Input.css";
import { useState } from "react";

export const mainClass = "input-container";

const Input = ({ placeholder, fun }) => {
    const [value, setValue] = useState(0);

    return (
        <input
            className={mainClass}
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
                setValue(e.target.value.length);
            }}
            style={{ width: value <= 30 ? "20rem" : value * 0.6 + "rem" }}
        ></input>
    );
};

export default Input;

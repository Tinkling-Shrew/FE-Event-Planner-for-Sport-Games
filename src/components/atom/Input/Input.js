import "./Input.css";
import { useState } from "react";

export const mainClass = "input-container";

const Input = ({ placeholder, before, after, onChange, type }) => {
    const [value, setValue] = useState(0);

    return (
        <div className={mainClass} onChange={onChange}>
            {before}
            <input
                className="Input"
                type={type ? type : "text"}
                placeholder={placeholder}
            />
            {after}
        </div>
    );
};

export default Input;

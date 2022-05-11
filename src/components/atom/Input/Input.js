import "./Input.css";
import { useState, useEffect } from "react";

export const mainClass = "input-container";

const Input = ({
    placeholder,
    before,
    after,
    onChange,
    type,
    width,
    height,
}) => {
    const [value, setValue] = useState(0);

    useEffect(() => {}, []);

    return (
        <div className={mainClass} onChange={onChange}>
            {before}
            <input
                className="Input"
                type={type ? type : "text"}
                placeholder={placeholder}
                width={width}
                height={height}
                onChange={onChange}
            />
            {after}
        </div>
    );
};

export default Input;

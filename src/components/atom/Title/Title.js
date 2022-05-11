import React from "react";
import "./Title.css";

export const mainClass = "title";

const Title = ({ title, children, loc }) => {
    return (
        <h1
            className={mainClass}
            style={{
                textAlign: loc === undefined ? "center" : loc,
            }}
        >
            {title && <span>{title}</span>}
            {children}
        </h1>
    );
};

export default Title;

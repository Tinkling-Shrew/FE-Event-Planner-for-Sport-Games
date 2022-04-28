import React from "react";
import "./Title.css";

export const mainClass = "title";

const Title = ({ title, loc }) => {
    return (
        <h1
            className={mainClass}
            style={{
                textAlign: loc === undefined ? "center" : loc,
            }}
        >
            <span>{title}</span>
        </h1>
    );
};

export default Title;

import React from "react";
import "./Title.css";

export const mainClass = "title";

const Title = ({ title }) => {
    return <h1 className={mainClass}>{title}</h1>;
};

export default Title;

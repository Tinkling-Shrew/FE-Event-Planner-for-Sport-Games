import React from "react";
import "./Footer.css";
import Title from "../../atom/Title/Title";

export const mainClass = "footer-container";

const Footer = () => {
    return (
        <div className={mainClass}>
            <Title title="Footer" />
            miau
        </div>
    );
};

export default Footer;

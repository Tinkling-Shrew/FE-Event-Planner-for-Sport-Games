import React from "react";
import AboutDev from "../../components/organism/AboutDev/AboutDev";
import "./Contact.css";

export const mainClass = "contact-container";

const Contact = () => {
    return (
        <div className={mainClass}>
            <AboutDev />
        </div>
    );
};

export default Contact;

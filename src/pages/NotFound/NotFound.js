import React from "react";
import "./NotFound.css";

export const mainClass = "notfound-container";

const NotFound = () => {
    return (
        <div className={mainClass}>
            <p className="notfound-title">ERROR 404</p>
            <p className="notfound-title">
                {window.location.href} does not exist.
            </p>
        </div>
    );
};

export default NotFound;

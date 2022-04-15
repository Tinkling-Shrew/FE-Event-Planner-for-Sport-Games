import React from "react";

export const mainClass = "notfound-container";

const NotFound = () => {
    return (
        <div className={mainClass}>
            <span className="notfound-title">404 Not Found</span>
        </div>
    );
};

export default NotFound;

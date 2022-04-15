import React from "react";
import "./StartPageInfo.css";
import Title from "../../atom/Title/Title";

export const mainClass = "startpage-info-container";

const Info = () => {
    return (
        <div className="startpage-info-container">
            <Title title="Info" />
            <span className="startpage-info-text">
                A simple part of the startpage that should offer informations
                about the app
            </span>
        </div>
    );
};

export default Info;

import React from "react";
import "./DevCard.css";

export const mainClass = "devcard-container";

const DevCard = ({
    devName,
    roleName,
    cardInfo,
    imageLink = "https://via.placeholder.com/150",
}) => {
    return (
        <div className={mainClass}>
            <div className="devcard-profile">
                <img className="devcard-image" src={imageLink} alt="devImage" />
                <h1 className="devcard-name">{devName}</h1>
                <h2 className="devcard-role">{roleName}</h2>
            </div>
            <div className="devcard-info">
                {/* devcard text might need to be loaded from file as too much text in IDE will suck ass */}
                <span className="devcard-text">{cardInfo}</span>
            </div>
            <div className="devcard-social">
                <a href="#">
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
                </a>
            </div>
        </div>
    );
};

export default DevCard;

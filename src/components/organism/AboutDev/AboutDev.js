import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./AboutDev.css";
import DevCard from "../../molecule/DevCard/DevCard";
import Title from "../../atom/Title/Title";

export const mainClass = "aboutdev-container";

const AboutDev = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get("https://run.mocky.io/v3/54414445-4ba0-4d63-b481-6c63ed8238b7")
            .then((response) => {
                console.log(response.data);
                setCards(response.data.devs);
            });
    }, []);

    return (
        <div className={mainClass}>
            <Title title="Slaves" />
            <div className="aboutdev-profile">
                {cards.length > 0
                    ? cards.map((card) => (
                          <DevCard
                              devName={card.devName}
                              roleName={card.roleName}
                              cardInfo={card.cardInfo}
                              imageLink={card.imageLink}
                          />
                      ))
                    : "loading..."}
            </div>
        </div>
    );
};

AboutDev.propTypes = {
    cards: propTypes.arrayOf({
        devName: propTypes.string,
        roleName: propTypes.string,
        cardInfo: propTypes.string,
        imageLink: propTypes.string,
    }),
};

export default AboutDev;

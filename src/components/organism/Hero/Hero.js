import React from "react";
import "./Hero.css";

export const mainClass = "hero-container";

const Hero = () => {
    return (
        <div className={mainClass}>
            <div className="banner-title">
                <a className="sport-link" href="https://www.google.com">
                    Pick your sport
                </a>
                <a className="team-link" href="https://www.google.com">
                    Pick your team
                </a>
            </div>
        </div>
    );
};

export default Hero;

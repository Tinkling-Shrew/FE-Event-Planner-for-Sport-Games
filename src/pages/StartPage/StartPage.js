import React, { useEffect } from "react";
import "./StartPage.css";
import Hero from "../../components/organism/Hero/Hero";
import StartPageInfo from "../../components/organism/StartPageInfo/StartPageInfo";
import AboutDev from "../../components/organism/AboutDev/AboutDev";
import Space from "../../components/atom/Space/Space";

export const mainClass = "startpage-container";

const StartPage = () => {
    // sets the scrollbar to 0, aka to the top
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className={mainClass}>
            <Hero />
            <Space />
            <StartPageInfo />
            <Space />
            <AboutDev />
        </div>
    );
};

export default StartPage;

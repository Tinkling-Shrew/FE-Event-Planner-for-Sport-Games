import React, { useEffect } from "react";
import "./StartPage.css";
import StartPageInfo from "../../components/organism/StartPageInfo/StartPageInfo";
import Space from "../../components/atom/Space/Space";

export const mainClass = "startpage-container";

const StartPage = () => {
    // sets the scrollbar to 0, aka to the top
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className={mainClass}>
            <div className="startpage-hero-container">
                <div className="startpage-title-container">
                    <span className="startpage-title">
                        Plan your next{" "}
                        <mark className="startpage-mark">EVENT</mark> anytime
                    </span>
                    <span className="startpage-subtitle">
                        Always <mark className="startpage-mark">HERE</mark> for
                        your next <mark className="startpage-mark">PLAN</mark>
                    </span>
                </div>

                {/* <img
                    className="startpage-banner"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.scottishadhdcoalition.org%2Fwp-content%2Fuploads%2F2017%2F09%2FBanner-children-.png&f=1&nofb=1"
                    alt="banner"
                /> */}
            </div>
            <Space />
            <StartPageInfo />
        </div>
    );
};

export default StartPage;

import React, { useEffect } from "react";
import "./Landing.css";
import Title from "../../components/atom/Title/Title";

export const mainClass = "landing-container";

const LandingPage = () => {
    // sets the scrollbar to 0, aka to the top
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className={mainClass}>
            <div className="landing-hero-container">
                <div className="landing-title-container">
                    <span className="landing-title">
                        Plan your next{" "}
                        <mark className="landing-mark">EVENT</mark> anytime
                    </span>
                    <span className="landing-subtitle">
                        Always <mark className="landing-mark">HERE</mark> for
                        your next <mark className="landing-mark">PLAN</mark>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

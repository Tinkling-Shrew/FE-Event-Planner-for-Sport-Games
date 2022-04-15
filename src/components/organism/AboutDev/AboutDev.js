import React from "react";
import "./AboutDev.css";
import DevCard from "../../molecule/DevCard/DevCard";
import Title from "../../atom/Title/Title";

export const mainClass = "aboutdev-container";

const AboutDev = () => {
    return (
        <div className={mainClass}>
            <Title title="Slaves" />
            <div className="aboutdev-profile">
                <DevCard
                    devName="Adam"
                    roleName="Frontend"
                    cardInfo="Ruining the website"
                    imageLink="https://cdn.discordapp.com/avatars/185098419793035276/31a9af28685ea68f490504656c7863de.webp?size=1024"
                />
                <DevCard
                    devName="Daian"
                    roleName="Bothend"
                    cardInfo="Ruining the website"
                    imageLink="https://cdn.discordapp.com/avatars/172735768723324928/290628ba321de0f73c2975eb69fec2a9.webp?size=1024"
                />
                <DevCard
                    devName="Cristi"
                    roleName="Backend"
                    cardInfo="Ruining the website"
                    imageLink="https://cdn.discordapp.com/avatars/250670193175560193/c511e2117668d450177619a56d20c8f8.webp?size=1024"
                />
            </div>
        </div>
    );
};

export default AboutDev;

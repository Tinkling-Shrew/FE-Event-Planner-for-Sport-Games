import "./Invite.css";
import LinkButton from "../../components/atom/LinkButton/LinkButton";
import { useState, useEffect } from "react";
import api from "../../apis/KowApi";

export const mainClass = "invite-container";

const Invite = () => {
    const [host, setHost] = useState("Host");
    const [sport, setSport] = useState("Sport");
    const [eventName, setEventName] = useState("Event");

    useEffect(() => {
        api.get("/").then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className={mainClass}>
            <div>
                <h1>
                    Invitation for {eventName} : {sport}, sent from {host}.
                </h1>
                <h2>Accept?</h2>
            </div>

            <div>
                <LinkButton>Yes</LinkButton>
                <LinkButton>No</LinkButton>
            </div>
        </div>
    );
};

export default Invite;

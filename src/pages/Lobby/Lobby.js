import "./Lobby.css";
import api from "../../Axios";
import { useState, useEffect } from "react";
import SportEventList from "../../components/atom/SportEventList/SportEventList";
import Title from "../../components/atom/Title/Title";

export const mainClass = "lobby-container";

const Lobby = () => {
    const [events, setEvents] = useState([]);

    api.get("/").then((response) => {
        console.log(response.data);
        setEvents(response.data.games);
    })

    return (
        <div className={mainClass}>
            <Title title="Current events" />
            <SportEventList id="events-list" list={events} />
        </div>
    );
};

export default Lobby;

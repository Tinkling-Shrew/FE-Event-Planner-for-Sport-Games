import "./Lobby.css";
import api from "../../Axios";
import { useState, useEffect } from "react";
import SportEventList from "../../components/atom/SportEventList/SportEventList";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";

export const mainClass = "lobby-container";

const Lobby = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/events").then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div className={mainClass}>
            <Title title="Current events" loc="left" />
            <div className="lobby-upper-body">
                <span className="lobby-search-text">Search:</span>
                <Input
                    id="lobby-search-input"
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        console.log(e.target.value);
                    }}
                ></Input>
            </div>
            <div className="lobby-body">
                <SportEventList
                    id="lobby-events-list"
                    list={
                        search === ""
                            ? events
                            : events.filter(([key, value]) =>
                                  value.includes(search)
                              )
                    }
                />
            </div>
        </div>
    );
};

export default Lobby;

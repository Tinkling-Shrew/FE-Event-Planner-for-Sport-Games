import "./Lobby.css";
import List from "../../components/atom/List/List";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import LoadingObject from "../../components/atom/LoadingObject/LoadingObject";
import Button from "../../components/atom/Button/Button";
import useFetch from "../../hooks/useFetch";
import SportEvent from "../../components/atom/SportEvent/SportEvent";
import ErrorMessage from "../../components/atom/ErrorMessage/ErrorMessage";

export const mainClass = "lobby-container";

const Lobby = () => {
    const [events, loading, error] = useFetch("/events");

    return (
        <div className={mainClass}>
            <Title title="Current events" loc="left" />
            <div className="lobby-upper-body">
                <span className="lobby-search-text">Search:</span>
                <Input id="lobby-search-input" type="text"></Input>
                <Button />
            </div>
            <div className="lobby-body">
                {loading && <LoadingObject />}
                {!loading && error && <ErrorMessage errMsg={error} />}
                {!loading && !error && events && (
                    <List
                        list={events.map((obj) => (
                            <SportEvent
                                key={obj.id}
                                id={obj.id}
                                title={obj.name}
                                location={obj.location}
                                sport={obj.sport}
                                host={obj.host}
                                pass={obj.password}
                                currentParticipants={obj.participants.length}
                                maxParticipants={obj.max_participants}
                            />
                        ))}
                    />
                )}
            </div>
        </div>
    );
};

export default Lobby;

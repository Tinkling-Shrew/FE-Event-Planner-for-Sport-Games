import "./Lobby.css";
import KowApi from "../../apis/KowApi";
import { useEffect } from "react";
import List from "../../components/atom/List/List";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import LoadingObject from "../../components/atom/LoadingObject/LoadingObject";
import Button from "../../components/atom/Button/Button";
import useFetch from "../../hooks/useFetch";
import useAxiosFunction from "../../hooks/useAxiosFunction"
import SportEvent from "../../components/atom/SportEvent/SportEvent";
import ErrorMessage from "../../components/atom/ErrorMessage/ErrorMessage";

export const mainClass = "lobby-container";

const Lobby = () => {
    const [events, error, loading, axiosFetch] = useAxiosFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance: KowApi, // where api goes
            method: "GET", // where GET / POST goes
            url: "/events", // where bs link name goes
            timeout: 8000, // where boredome timer goes
        });
    };

    useEffect(() => {
        getData();
    }, []);

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
                {!loading && !error && events?.length && (
                    <List
                        list={events.map((obj) => (
                            <SportEvent
                                key={obj.id}
                                id={obj.id}
                                title={obj.name}
                                sport={obj.sport}
                                host={obj.host}
                                pass={obj.pass}
                            />
                        ))}
                    />
                )}
            </div>
        </div>
    );
};

export default Lobby;

import "./Lobby.css";
import { useState, useEffect } from "react";
import List from "../../components/atom/List/List";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import LoadingObject from "../../components/atom/LoadingObject/LoadingObject";
import Button from "../../components/atom/Button/Button";
import useFetch from "../../hooks/useFetch";
import LobbyEvent from "../../components/atom/LobbyEvent/LobbyEvent";

export const mainClass = "lobby-container";

const Lobby = () => {
	const [eventID, setEventID] = useState("");
	const [search, setSearch] = useState("");
	const [events, loading, error, fetchData] = useFetch("/events");

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={mainClass}>
			<Title title="Current events" loc="center" />
			<div className="lobby-upper-body">
				<span className="lobby-search-text">Search:</span>
				<Input
					id="lobby-search-input"
					type="text"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<Button
					children={"Search"}
					onClick={() => {
						setSearch(search);
					}}
				/>
			</div>
			<div className="lobby-body">
				{loading && <LoadingObject />}
				{!loading && !error && events && (
					<List
						list={events
							.filter((val, key) => {
								return (
									val.name.toLowerCase().includes(search.toLowerCase()) ||
									val.sport.toLowerCase().includes(search.toLowerCase())
									// val.host.username.toLowerCase().includes(search.toLowerCase()) // TO BE USED AFTER DATABASE HAS BEEN WIPED OTHERWISE GOES TO SHIT
								);
							})
							.map((obj) => (
								<LobbyEvent
									key={obj.id}
									id={obj.id}
									title={obj.name}
									location={obj.location}
									startTime={obj.start_time}
									endTime={obj.end_time}
									sport={obj.sport}
									host={obj.host.username}
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

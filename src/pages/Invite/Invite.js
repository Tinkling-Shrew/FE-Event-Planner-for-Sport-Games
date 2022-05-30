import "./Invite.css";
import LinkButton from "../../components/atom/LinkButton/LinkButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../apis/KowApi";
import useFetch from "./../../hooks/useFetch";
import usePost from "./../../hooks/usePost";
import ErrorMessage from "../../components/atom/ErrorMessage/ErrorMessage";

export const mainClass = "invite-container";

const Invite = () => {
	const inviteID = useParams().id;
	const [host, setHost] = useState("Host");
	const [sport, setSport] = useState("Sport");
	const [validEvent, setValidEvent] = useState(false);
	const [event, fLoading, fError] = useFetch("/invite/" + inviteID);
	const [aResponse, aPLoading, aPError, aPostData] = usePost("/invite/" + inviteID + "?accept=true");
	const [rResponse, rPLoading, rPError, rPostData] = usePost("/invite/" + inviteID + "?accept=false");

	return (
		<div>
			<div className="bg"></div>
			<div className="bg bg2"></div>
			<div className="bg bg3"></div>
			<div className={mainClass}>
				<>
					<h1>
						Invitation for {event.name} : {event.sport}, sent from {event.host.name}.
					</h1>
					<h1>Accept?</h1>

					<div className="invite-button-container">
						<LinkButton
							to={"/lobby/event/" + event.id}
							className="invite-yes-button"
							onClick={() => {
								return aPostData({});
							}}
						>
							Yes
						</LinkButton>
						or
						<LinkButton
							to={"/lobby"}
							className="invite-no-button"
							onClick={() => {
								return rPostData({});
							}}
						>
							No
						</LinkButton>
					</div>
				</>
			</div>
		</div>
	);
};

export default Invite;

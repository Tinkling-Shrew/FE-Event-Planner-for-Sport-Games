import "./LobbyEvent.css";
import { Link } from "react-router-dom";
export const mainClass = "sportevent-container";

const LobbyEvent = ({ id, title, location, sport, host, pass, description, currentParticipants, maxParticipants, startTime, endTime }) => {
	console.log(startTime);
	const eventLink = { pathname: "event/" + id, data: id };
	return (
		<div className={mainClass}>
			<div className="sportevent-left">
				{title && (
					<Link to={eventLink} className="sportevent-title">
						{title}
						<span style={{ color: "var(--color-dark)" }}> : </span>
						<span className="sportevent-type">{sport}</span>
					</Link>
				)}

				{host && (
					<Link to={{ pathname: "/user/" + host, data: host }} className="sportevent-host">
						<span className="sportevent-basic-text">Host: </span> {host}
					</Link>
				)}
				<span className="sportevent-description">{description}</span>
				{location && (
					<Link to={eventLink} className="sportevent-location">
						<span className="sportevent-basic-text">Location: </span>
						{location}
					</Link>
				)}

				<Link to={eventLink} className="sportevent-location">
					{startTime ? (
						<>
							<span className="sportevent-basic-text">Start time: </span>
							{new Date(startTime).toLocaleDateString()} ( {new Date(startTime).toDateString()} )
						</>
					) : (
						<span className="sportevent-basic-text">Start time: not specified</span>
					)}
				</Link>

				<Link to={eventLink} className="sportevent-location">
					{endTime ? (
						<>
							<span className="sportevent-basic-text">End time: </span>
							{new Date(endTime).toLocaleDateString()} ( {new Date(endTime).toDateString()} )
						</>
					) : (
						<span className="sportevent-basic-text">End time: not specified</span>
					)}
				</Link>
			</div>
			<div className="sportevent-right">
				{pass ? (
					<Link to={eventLink} className="private-text">
						Private event
					</Link>
				) : (
					<Link to={eventLink} className="public-text">
						Public event
					</Link>
				)}
				<div className="sportevent-players">
					<span className="sportevent-basic-text">Players:</span>
					<span className="sportevent-counter">
						{currentParticipants}/{maxParticipants}
					</span>
				</div>
			</div>
		</div>
	);
};

export default LobbyEvent;

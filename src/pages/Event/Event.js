import useFetch from "../../hooks/useFetch";
import "./Event.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import List from "../../components/atom/List/List";
import Title from "../../components/atom/Title/Title";

export const mainClass = "event-container";

const Event = () => {
	const eventID = useParams().id;
	const [event, loading, error, fetchData] = useFetch("/events/" + eventID);

	useEffect(() => {
		console.log(event);
		fetchData();
	}, [eventID]);

	return (
		<div className={mainClass}>
			<Title title={event ? event.name + " : " + event.sport : null} />
			<div className="event-body">
				<div className="left-event-body">
					Current participants:
					<List />
				</div>
				<div className="mid-event-body">
					<div className="mid-event-body-top">
						<Title title={""} />
					</div>
					<div className="mid-event-body-mid"></div>
					<div className="mid-event-body-bottom"></div>
				</div>
				<div className="right-event-body"></div>
			</div>
		</div>
	);
};

export default Event;

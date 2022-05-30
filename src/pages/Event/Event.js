import useFetch from "../../hooks/useFetch";
import "./Event.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import List from "../../components/atom/List/List";
import Title from "../../components/atom/Title/Title";
import LoadingObject from "../../components/atom/LoadingObject/LoadingObject";
import Input from "../../components/atom/Input/Input";
import ListItem from "../../components/atom/ListItem/ListItem";
import Button from "../../components/atom/Button/Button";

export const mainClass = "event-container";

const Event = () => {
	const eventID = useParams().id; // eslint-disable-next-line
	const [event, loading, error, fetchData] = useFetch("/events/" + eventID);
	// eslint-disable-next-line
	useEffect(() => {
		fetchData();
		console.log(event); // eslint-disable-next-line
	}, []);

	return event ? (
		event.password ? (
			<div className="private-event-screen">
				<h1>Event is private</h1>
				<span>Password:</span>
				<Input />
			</div>
		) : (
			<div className={mainClass}>
				<Title
					title={event ? "Event name: " + event.name : null}
					style={{ backgroundColor: "var(--color-dark)", color: "var(--color-lighter)", fontSize: "2rem" }}
					loc={"left"}
				/>
				<Title
					title={event ? "Sport: " + event.sport : null}
					style={{
						backgroundColor: "var(--color2)",
						color: "var(--color-lighter)",
						textShadow: "0 0 .1rem rgb(0, 0, 0, .5)",
						padding: ".5rem",
						fontSize: "1.5rem",
						paddingLeft: "1rem",
					}}
					loc={"left"}
				/>
				<div className="event-body">
					<div className="left-event-body">
						<Title
							title={"Event info"}
							style={{
								fontSize: "1.4rem",
								width: "100%",
								backgroundColor: "var(--color-dark)",
								color: "var(--color-lighter)",
							}}
						/>
						<div className="event-info-container">
							<span>Starts at:</span>
							<div>
								{new Date(event.start_time).toLocaleDateString()} {" | "}
								{new Date(event.start_time).toLocaleTimeString()}
							</div>
						</div>
						<div className="event-info-container">
							<span>Ends at:</span>
							<div>
								{new Date(event.end_time).toLocaleDateString()}
								{" | "}
								{new Date(event.end_time).toLocaleTimeString()}
							</div>
						</div>
						<div className="event-info-container">
							<span>State:</span>
							<div>{event.state}</div>
						</div>
						<div className="event-info-container">
							<span>Invite id:</span>
							<div style={{ fontSize: "0.8rem" }}>{event._id}</div>
						</div>
					</div>
					<div className="mid-event-body"></div>
					<div className="right-event-body">
						<Title
							title={"Current participants"}
							style={{
								fontSize: "1.4rem",
								width: "100%",
								backgroundColor: "var(--color-dark)",
								color: "var(--color-lighter)",
							}}
						/>
						<List
							list={
								event
									? event.participants.map((obj) => {
											<ListItem>
												{obj}
												<Button
													onClick={() => {
														event.participants.filter(
															(
																value
															) => {
																return (
																	value !==
																	obj
																);
															}
														);
													}}
													style={{
														width: "1rem",
														height: "1rem",
														backgroundColor:
															"var(--color-error-bright)",
														boxShadow: "none",
													}}
												>
													X
												</Button>
											</ListItem>;
									  })
									: null
							}
						/>
					</div>
				</div>
			</div>
		)
	) : (
		<div className={mainClass}>
			<LoadingObject text={"404"} />
		</div>
	);
};

export default Event;

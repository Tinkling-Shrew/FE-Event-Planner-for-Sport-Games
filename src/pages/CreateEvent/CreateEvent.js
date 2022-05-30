import "./CreateEvent.css";
import { useEffect, useRef, useState } from "react";
import usePost from "./../../hooks/usePost";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import List from "../../components/atom/List/List";
import Button from "../../components/atom/Button/Button";
import ListItem from "../../components/atom/ListItem/ListItem";
import CheckBox from "../../components/atom/CheckBox/CheckBox";
import Select from "../../components/atom/Select/Select";
import InvalidMessage from "../../components/atom/InvalidMessage/InvalidMessage";
import { Navigate, useNavigate } from "react-router-dom";

export const mainClass = "create-event-container";

const mailRegex = new RegExp("/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/");
const participantsRegex = new RegExp("/[0-9]/");

function isNumberKey(evt) {
	var charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode === 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
		evt.preventDefault();
		return false;
	}
	return true;
}

const CreateEvent = () => {
	// hook to change between pages
	const [eventId, setEventId] = useState("");
	const navigate = useNavigate();

	// hook to post JSON objects
	const [response, loading, error, postData] = usePost("/events");
	const [responsei, loadingi, errori, postDatai] = usePost("/invite");

	// useState for error messages
	const [invalidMessage, setInvalidMessage] = useState("");
	const [check, setCheck] = useState(false);

	// read data
	const [participants, setParticipants] = useState([]);
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [maxParticipants, setMaxParticipants] = useState(0);
	const [sport, setSport] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [password, setPassword] = useState("");
	const [startDate, setStartDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endDate, setEndDate] = useState("");
	const [endTime, setEndTime] = useState("");
	const [mode, setMode] = useState("daily");
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.clear();
		console.log({
			max_participants: maxParticipants,
			name: name,
			host: { username: username, email: email },
			sport: sport,
			description: description,
			location: location,
			password: password,
			start_time: new Date(startDate + "T" + startTime + "Z").valueOf(),
			end_time: new Date(endDate + "T" + endTime + "Z").valueOf(),
			repeat: { mode: mode, count: count },
		});
	}, [
		participants,
		name,
		username,
		email,
		maxParticipants,
		sport,
		description,
		location,
		password,
		startDate,
		startTime,
		endDate,
		endTime,
		mode,
		count,
	]);

	const handleSubmit = () => {
		const eventObj = {
			max_participants: maxParticipants,
			name: name,
			host: { username: username, email: email },
			sport: sport,
			description: description,
			location: location,
			password: password,
			start_time: new Date(startDate + "T" + startTime + "Z").valueOf(),
			end_time: new Date(endDate + "T" + endTime + "Z").valueOf(),
			repeat: { mode: mode, count: count },
		};
		return postData(eventObj);
	};

	return (
		<div className={mainClass}>
			<div className="create-event-body">
				<div className="create-event-body-upper">
					<div className="create-event-body-left">
						<h3>Event Host:</h3>
						<div className="input-two-container">
							<Input
								type="text"
								beforeChild={"Username:"}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							/>
							<Input
								type="text"
								beforeChild={"Mail:"}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>

						<h3>Details:</h3>

						<Input type="text" placeholder={"Event name"} onChange={(e) => setName(e.target.value)} />

						<Input type="text" placeholder={"Sport / Event type"} onChange={(e) => setSport(e.target.value)} />

						<Input
							type="number"
							placeholder={"Max Participants"}
							onChange={(e) => setMaxParticipants(e.target.value)}
							onKeyDown={(e) => {
								if (!isNumberKey(e)) {
									e.preventDefault();
									setInvalidMessage("`Max participants` needs to be a number");
								} else if (e.target.value <= 1) {
									setInvalidMessage("You need more friends");
								} else if (e.target.value > 1000) {
									setInvalidMessage("Are you gathering an army?");
								} else {
									setInvalidMessage("");
								}
							}}
						/>

						<Input
							type="text"
							placeholder={"Location"}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						/>

						<div className="input-two-container">
							<Input
								type="date"
								beforeChild={"Start:"}
								onChange={(e) => {
									setStartDate(e.target.value);
								}}
							/>
							<Input
								type="time"
								beforeChild={"Time:"}
								onChange={(e) => {
									setStartTime(e.target.value);
								}}
							/>
						</div>

						<div className="input-two-container">
							<Input
								type="date"
								beforeChild={"End:"}
								onChange={(e) => {
									setEndDate(e.target.value);
								}}
							/>
							<Input
								type="time"
								beforeChild={"Time:"}
								onChange={(e) => {
									setEndTime(e.target.value);
								}}
							/>
						</div>

						<Input
							type="text"
							placeholder={"Event description"}
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>

						<div className="input-two-container">
							<Input
								type="password"
								placeholder={"Password"}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>

						<div className="repeat-time-container">
							<CheckBox
								text={"Repeat:"}
								onChange={(e) => {
									if (!e.target.checked) {
										setCount(0);
										setMode("once");
									}
								}}
							/>

							<span>Times:</span>

							<input
								type="number"
								className="repeat-input"
								onChange={(e) => {
									setCount(e.target.value);
								}}
								style={{ width: "5rem", margin: "0 1rem" }}
							/>

							<Select
								options={["daily", "weekly", "monthly"]}
								onChange={(e) => {
									setMode(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="create-event-body-right">
						<h3>Invite users:</h3>
						<Input
							beforeChild={"Mail"}
							placeholder={"mail@domain.com"}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !participants.includes(e.target.value)) {
									setParticipants((participants) => [...participants, e.target.value]);
								}
							}}
						/>
						<List
							list={participants.map((obj) => (
								<ListItem>
									{obj}
									<Button
										onClick={() => {
											setParticipants(
												participants.filter((value) => {
													return value !== obj;
												})
											);
										}}
										style={{
											width: "1rem",
											height: "1rem",
											backgroundColor: "var(--color-error-bright)",
											boxShadow: "none",
										}}
									>
										X
									</Button>
								</ListItem>
							))}
							style={{ height: "67vh" }}
						/>
					</div>
				</div>
				<div className="create-event-body-lower">
					<InvalidMessage msg={invalidMessage ? invalidMessage : null} />
					<Button
						onClick={() => {
							handleSubmit();
							postDatai({ emails: participants, event: eventId });
							if (error) {
								if (error.response) {
									console.log("ERROR: " + error.response.data);
									setInvalidMessage(error.response.data);
								}
							} else {
								// navigate("/lobby");
							}
							console.log(response);
						}}
						style={{ width: "8rem", height: "3rem" }}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;

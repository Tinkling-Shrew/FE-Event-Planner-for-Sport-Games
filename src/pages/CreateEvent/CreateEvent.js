import "./CreateEvent.css";
import { useEffect, useRef, useState } from "react";
import usePost from "./../../hooks/usePost";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import List from "../../components/atom/List/List";
import Button from "../../components/atom/Button/Button";
import CheckBox from "../../components/atom/CheckBox/CheckBox";
import Select from "../../components/atom/Select/Select";

export const mainClass = "create-event-container";

const CreateEvent = () => {
	const [loading, error, postData] = usePost("/event");

	const [passCheck, setPassCheck] = useState(true);

	const [participants, setParticipants] = useState([]);
	const [name, setName] = useState("");
	const [maxParticipants, setMaxParticipants] = useState(0);
	const [sport, setSport] = useState("");
	const [description, setDescription] = useState("");
	const [host, setHost] = useState("");
	const [location, setLocation] = useState("");
	const [password, setPassword] = useState("");
	const [startDate, setStartDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endDate, setEndDate] = useState("");
	const [endTime, setEndTime] = useState("");
	const [repeat, setRepeat] = useState({});
	const [mode, setMode] = useState("");
	const [count, setCount] = useState(0);

	function validateDates(dateStart, dateEnd, timeStart, timeEnd) {
		return (
			new Date(dateStart + "T" + timeStart + "Z").valueOf() <
			new Date(dateEnd + "T" + timeEnd + "Z").valueOf()
		);
	}

	function validateName(eventName) {
		return eventName ? true : false;
	}

	function validateMaxParticipant(maxParticipants) {
		return maxParticipants ? true : false;
	}

	const handleSubmit = () => {
		console.log(startDate);
		console.log(startTime);
		const obj = {
			max_participants: maxParticipants,
			name: name,
			sport: sport,
			description: description,
			location: location,
			password: password,
			starttime: new Date(startDate + "T" + startTime + "Z").valueOf(),
			endtime: new Date(endDate + "T" + endTime + "Z").valueOf(),
			repeat: { mode: mode, count: count },
		};
		postData(obj);
	};

	return (
		<div className={mainClass}>
			<Title
				id="create-event-title"
				title={
					<span
						style={{
							fontSize: "2.5rem",
						}}
					>
						Create event
					</span>
				}
				loc="left"
			/>
			<div className="create-event-body">
				<div className="create-event-body-upper">
					<div className="create-event-body-left">
						<h3>Details:</h3>

						<Input
							type="text"
							placeholder={"Event name"}
							onChange={(e) => setName(e.target.value)}
						/>

						<Input
							type="text"
							placeholder={"Sport"}
							onChange={(e) => setSport(e.target.value)}
						/>

						<Input
							type="text"
							placeholder={"Max Participants"}
							onChange={(e) => setMaxParticipants(e.target.value)}
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
							<CheckBox
								onChange={() => {
									setPassCheck(true);
								}}
							/>
						</div>

						<div className="repeat-time-container">
							<CheckBox text={"Repeat:"} />

							<span>Times:</span>

							<input type="number" className="repeat-input" />

							<Select
								options={["daily", "weekly", "monthly"]}
								onChange={(e) => {
									setMode(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="create-event-body-right">
						<h3>People:</h3>
						<Input beforeChild={"Mail"} placeholder={"mail@domain.com"} />
						<List list={participants} />
					</div>
				</div>
				<div className="create-event-body-lower">
					<Button
						onClick={() => {
							handleSubmit();
						}}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;

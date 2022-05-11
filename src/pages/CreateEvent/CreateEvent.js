import "./CreateEvent.css";
import { useEffect, useState } from "react";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import List from "../../components/atom/List/List";
import Button from "../../components/atom/Button/Button";
import CheckBox from "../../components/atom/CheckBox/CheckBox";
import Select from "../../components/atom/Select/Select";

export const mainClass = "create-event-container";

const CreateEvent = () => {
    // const [errorMsgs, setErrorMsgs] = useState([]);
    // const [name, setName] = useState("");
    // const [location, setLocation] = useState("");
    // const [startDate, setStartDate] = useState("");
    // const [startTime, setStartTime] = useState("");
    // const [endTime, setEndTime] = useState("");
    // const [endDate, setEndDate] = useState("");
    // const [description, setDescription] = useState("");
    // const [invited, setInvited] = useState([]);
    // const [repeat, setRepeat] = useState({ mode: null, count: 0 });

    useEffect(() => {}, []);

    const currentDate = new Date();
    const date = `${
        currentDate.getDate() > 9
            ? currentDate.getDate()
            : "0" + currentDate.getDate()
    }/${
        currentDate.getMonth() + 1 > 9
            ? currentDate.getMonth() + 1
            : "0" + (currentDate.getMonth() + 1)
    }/${currentDate.getFullYear()}`;
    const time = `${
        currentDate.getHours() > 9
            ? currentDate.getHours()
            : "0" + currentDate.getHours()
    }:${
        currentDate.getMinutes() > 9
            ? currentDate.getMinutes()
            : "0" + currentDate.getMinutes()
    }`;

    return (
        <div className={mainClass}>
            <Title
                id="create-event-title"
                title={<span style={{ fontSize: "2.5rem" }}>Create event</span>}
                loc="left"
            />
            <div className="create-event-body">
                <div className="create-event-body-upper">
                    <div className="create-event-body-left">
                        <h3>Details:</h3>
                        <Input
                            type="text"
                            placeholder={"Event name"}
                            onChange={null}
                        ></Input>
                        <Input type="text" placeholder={"Max Participants"} />
                        <Input type="text" placeholder={"Location"}></Input>
                        <div className="input-two-container">
                            <Input
                                type="text"
                                before={"Start:"}
                                placeholder={date}
                            />
                            <Input
                                type="text"
                                before={"Time:"}
                                placeholder={time}
                            />
                        </div>
                        <div className="input-two-container">
                            <Input
                                type="text"
                                before={"End:"}
                                placeholder={date}
                            />
                            <Input
                                type="text"
                                before={"Time:"}
                                placeholder={time}
                            />
                        </div>

                        <Input type="text" placeholder={"Event description"} />
                        <div className="input-two-container">
                            <Input type="text" placeholder={"Password"} />
                            <CheckBox before={"Hide Password"} />
                        </div>
                        <Select
                            name={"Repeat"}
                            options={["daily", "weekly", "monthly"]}
                            before={
                                <>
                                    <span>Repeat:</span>
                                    <CheckBox />
                                    <span>Times:</span>
                                    <input
                                        type="number"
                                        className="repeat-input"
                                    ></input>
                                </>
                            }
                        />
                    </div>
                    <div className="create-event-body-right">
                        <h3>People:</h3>
                        <Input
                            type="text"
                            before={"Mail"}
                            placeholder={"mail@domain.com"}
                        />
                        <List list={[]} />
                    </div>
                </div>
                <div className="create-event-body-lower">
                    <Button>Save</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;

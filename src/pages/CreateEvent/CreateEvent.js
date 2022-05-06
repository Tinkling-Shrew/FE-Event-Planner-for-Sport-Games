import "./CreateEvent.css";
import { useEffect, useState } from "react";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";
import List from "../../components/atom/List/List";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import KowApi from "../../apis/KowApi";
import Button from "../../components/atom/Button/Button";
import CheckBox from "../../components/atom/CheckBox/CheckBox";
import Select from "../../components/atom/Select/Select";

export const mainClass = "create-event-container";

const CreateEvent = () => {
    const [event, error, loading, axiosFetch] = useAxiosFunction();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [invited, setInvited] = useState([]);
    const [repeat, setRepeat] = useState({ mode: null, count: 0 });

    const postData = () => {
        axiosFetch({
            axiosInstance: KowApi,
            method: "POST",
            url: "/events",
            timeout: 8000,
        });
    };

    const createEvent = (eventName, location, start) => {};

    useEffect(() => {}, []);

    const current = new Date();
    const date = `${
        current.getDate() > 9 ? current.getDate() : "0" + current.getDate()
    }/${
        current.getMonth() + 1 > 9
            ? current.getMonth() + 1
            : "0" + (current.getMonth() + 1)
    }/${current.getFullYear()}`;
    const time = `${
        current.getHours() > 9 ? current.getHours() : "0" + current.getHours()
    }:${
        current.getMinutes() > 9
            ? current.getMinutes()
            : "0" + current.getMinutes()
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

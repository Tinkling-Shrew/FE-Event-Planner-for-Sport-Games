import Title from "../../components/atom/Title/Title";
import "./Event.css";

export const mainClass = "event-container";

const Event = ({ name }) => {
    return (
        <div className={mainClass}>
            <Title title={name ? name : "undefined"} />
            <div className="event-body">
                <h1>Miau</h1>
            </div>
        </div>
    );
};

export default Event;

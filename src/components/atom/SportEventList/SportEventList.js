import "./SportEventList.css";
import SportEvent from "../../molecule/SportEvent/SportEvent";
import LoadingObject from "../LoadingObject/LoadingObject";

export const mainClass = "sportevent-list";

// needs a list of object to generate the items in the events list

const SportEventList = ({ list }) => {
    return (
        <div className={mainClass}>
            {list.length > 0 ? (
                list.map((obj) => (
                    <SportEvent
                        key={obj.id}
                        id={obj.id}
                        title={obj.name}
                        sport={obj.sport}
                        host={obj.host}
                        pass={obj.pass}
                    />
                ))
            ) : (
                <LoadingObject />
            )}
        </div>
    );
};

export default SportEventList;

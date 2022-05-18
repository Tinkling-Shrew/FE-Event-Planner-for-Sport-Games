import "./SportEvent.css";

export const mainClass = "sportevent-container";

const SportEvent = ({
    id,
    title,
    location,
    sport,
    host,
    pass,
    description,
    currentParticipants,
    maxParticipants,
}) => {
    return (
        <div className={mainClass}>
            <div className="sportevent-left">
                <a className="sportevent-title" href={"/lobby/event?:" + id}>
                    {title}
                    <span style={{ color: "var(--color-dark)" }}> : </span>
                    <span className="sportevent-type">{sport}</span>
                </a>

                <a className="sportevent-host" href="/user">
                    <span className="sportevent-basic-text">Host: </span> {host}
                </a>
                <span className="sportevent-description">{description}</span>
                <a className="sportevent-location" href="/event?:id">
                    <span className="sportevent-basic-text">Location: </span>
                    {location}
                </a>
                <a className="sportevent-id" href={"/lobby/event:" + id}>
                    <span className="sportevent-basic-text">Event id: </span>#
                    {id}
                </a>
            </div>
            <div className="sportevent-right">
                {pass ? (
                    <span className="private-text">Private event</span>
                ) : (
                    <span className="public-text">Public event</span>
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

export default SportEvent;

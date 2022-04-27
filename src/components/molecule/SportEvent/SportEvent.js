import "./SportEvent.css";

export const mainClass = "sportevent-container";

const SportEvent = ({ id, title, type, host, pass }) => {
    return (
        <div className={mainClass}>
            <div className="sportevent-left">
                <a className="sportevent-title" href="game">
                    {title}
                    <span style={{ color: "var(--color-dark)" }}> : </span>
                    <span className="sportevent-type">{type}</span>
                </a>

                <a className="sportevent-host" href="https://www.google.com">
                    Host: {host}
                </a>
                <span className="sportevent-id">Event id: #{id}</span>
            </div>
            <div className="sportevent-right">
                {pass !== "" ? (
                    <span className="private-text">Private event</span>
                ) : (
                    <span className="public-text">Public event</span>
                )}
                <div className="sportevent-players">
                    <span className="sportevent-players">Players:</span>
                    <span className="sportevent-counter">0/10</span>
                </div>
            </div>
        </div>
    );
};

export default SportEvent;

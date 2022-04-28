import "./SportEvent.css";

export const mainClass = "sportevent-container";

const SportEvent = ({ id, title, sport, host, pass }) => {
    return (
        <div className={mainClass}>
            <div className="sportevent-left">
                <a className="sportevent-title" href="game">
                    {title}
                    <span style={{ color: "var(--color-dark)" }}> : </span>
                    <span className="sportevent-type">{sport}</span>
                </a>

                <a className="sportevent-host" href="https://www.google.com">
                    <span className="sportevent-basic-text">Host:</span> {host}
                </a>
                <span className="sportevent-basic-text">Event id: #{id}</span>
            </div>
            <div className="sportevent-right">
                {pass ? (
                    <span className="private-text">Private event</span>
                ) : (
                    <span className="public-text">Public event</span>
                )}
                <div className="sportevent-players">
                    <span className="sportevent-basic-text">Players:</span>
                    <span className="sportevent-counter">0/10</span>
                </div>
            </div>
        </div>
    );
};

export default SportEvent;

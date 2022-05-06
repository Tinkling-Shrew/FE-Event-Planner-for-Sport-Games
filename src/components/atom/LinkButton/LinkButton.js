import "./LinkButton.css";

export const mainClass = "link-button";

const LinkButton = ({ children }) => {
    return (
        <a className="link-button" href="/create_event">
            {children}
        </a>
    );
};

export default LinkButton;

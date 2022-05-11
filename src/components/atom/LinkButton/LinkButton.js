import "./LinkButton.css";

export const mainClass = "link-button";

const LinkButton = ({ children, href }) => {
    return (
        <a className="link-button" href={href}>
            {children}
        </a>
    );
};

export default LinkButton;

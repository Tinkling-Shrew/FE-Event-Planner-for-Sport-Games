import "./Link.css";

export const mainClass = "Link";

const Link = ({ href, style, children }) => {
    return (
        <a href={href} style={style} className={mainClass}>
            {children}
        </a>
    );
};

export default Link;

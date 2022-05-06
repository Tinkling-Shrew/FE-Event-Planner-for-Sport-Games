import "./Button.css";

export const mainClass = "Button";

const Button = ({ children, fun, before, after }) => {
    return (
        <div className="button-container">
            {before}
            <button className={mainClass} onClick={fun}>
                {children}
            </button>
            {after}
        </div>
    );
};

export default Button;

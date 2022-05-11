import "./Button.css";

export const mainClass = "Button";

const Button = ({ children, fun, onClick }) => {
    return (
        <button className={mainClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

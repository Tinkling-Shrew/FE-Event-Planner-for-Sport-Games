import "./ErrorMessage.css";

export const mainClass = "error-message-container";

const ErrorMessage = ({ errMsg }) => {
    return (
        <div className={mainClass}>
            <span>{errMsg}</span>
        </div>
    );
};

export default ErrorMessage;

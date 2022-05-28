import "./ErrorMessage.css";

export const mainClass = "error-message-container";

const ErrorMessage = ({ errMsg }) => {
	return <div className={mainClass}>{errMsg === "Network Error" ? "Backend is offline" : errMsg}</div>;
};

export default ErrorMessage;

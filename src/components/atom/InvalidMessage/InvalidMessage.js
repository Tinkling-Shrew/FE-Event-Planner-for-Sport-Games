import "./InvalidMessage.css";

export const mainClass = "InvalidMessage";

const InvalidMessage = ({ msg }) => {
	console.log(msg);
	return msg ? (
		<div className={mainClass}>
			<span>{msg}</span>
		</div>
	) : null;
};

export default InvalidMessage;

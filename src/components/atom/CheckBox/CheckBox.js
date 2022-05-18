import "./CheckBox.css";

export const mainClass = "CheckBox";

const CheckBox = ({
	name,
	text,
	placeholder,
	onChange,
	onKeyDown,
	onFocus,
	onBlur,
	refer,
	width,
	height,
}) => {
	return (
		<div className="checkbox-container">
			{text}
			<input
				name={name}
				refer={refer}
				className={mainClass}
				type="checkbox"
				placeholder={placeholder}
				width={width}
				height={height}
				ref={refer}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default CheckBox;

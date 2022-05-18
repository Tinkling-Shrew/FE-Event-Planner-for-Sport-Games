import "./Input.css";

export const mainClass = "input-container";

const Input = ({
	name,
	placeholder,
	beforeChild,
	afterChild,
	onChange,
	onKeyDown,
	onFocus,
	onBlur,
	refer,
	type,
	width,
	height,
	disabled,
}) => {
	return (
		<div className={mainClass} onChange={onChange}>
			{beforeChild}
			<input
				name={name}
				className="Input"
				type={type ? type : "text"}
				placeholder={placeholder}
				width={width}
				height={height}
				ref={refer}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onBlur={onBlur}
				disabled={disabled}
			/>
			{afterChild}
		</div>
	);
};

export default Input;

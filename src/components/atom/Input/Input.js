import "./Input.css";

export const mainClass = "input-container";

const Input = ({ name, placeholder, beforeChild, afterChild, onChange, onKeyDown, onFocus, onBlur, refer, type, width, height, disabled, pattern, style }) => {
	return (
		<div className={mainClass} onChange={onChange} style={style} width={width} height={height}>
			{beforeChild}
			<input
				name={name}
				className="Input"
				type={type ? type : "text"}
				placeholder={placeholder}
				ref={refer}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onBlur={onBlur}
				disabled={disabled}
				pattern={pattern}
			/>
			{afterChild}
		</div>
	);
};

export default Input;

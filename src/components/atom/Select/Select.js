import "./Select.css";

export const mainClass = "Select";

const Select = ({ name, options, before, after, onChange }) => {
    return (
        <div className="select-container">
            {before ? before : null}
            <select name={name} className={mainClass} onChange={onChange}>
                {options.length > 0 ? (
                    options.map((option) => (
                        <option
                            key={option.toString()}
                            value={option.toString()}
                        >
                            {option.toString()}
                        </option>
                    ))
                ) : (
                    <></>
                )}
            </select>
            {after ? after : null}
        </div>
    );
};

export default Select;

import "./CheckBox.css";

export const mainClass = "CheckBox";

const CheckBox = ({ before, after, placeholder }) => {
    return (
        <div className="checkbox-container">
            {before}
            <input
                className={mainClass}
                type="checkbox"
                placeholder={placeholder}
            />
            {after}
        </div>
    );
};

export default CheckBox;

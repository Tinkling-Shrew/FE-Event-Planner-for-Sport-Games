import "./OptionButton.css";

export const mainClass = "optionbutton-container";

const OptionButton = ({ name, fun }) => {
    return (
        <button className={mainClass} onClick={fun}>
            {name}
        </button>
    );
};

export default OptionButton;

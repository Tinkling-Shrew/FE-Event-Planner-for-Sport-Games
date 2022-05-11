import "./VBox.css";

const VBox = ({ children, style }) => {
    return (
        <VBox className="VBox" style={style}>
            {children}
        </VBox>
    );
};

export default VBox;

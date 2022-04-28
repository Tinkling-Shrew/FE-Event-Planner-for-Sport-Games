import "./LoadingObject.css";

export const mainClass = "loading-object";

const LoadingObject = () => {
    return (
        <div className={mainClass}>
            <span style={{ "--i": 1 }}>L</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>a</span>
            <span style={{ "--i": 4 }}>d</span>
            <span style={{ "--i": 5 }}>i</span>
            <span style={{ "--i": 6 }}>n</span>
            <span style={{ "--i": 7 }}>g</span>
            <span style={{ "--i": 8 }}>.</span>
            <span style={{ "--i": 9 }}>.</span>
            <span style={{ "--i": 10 }}>.</span>
        </div>
    );
};

export default LoadingObject;

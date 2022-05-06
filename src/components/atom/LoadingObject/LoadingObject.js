import "./LoadingObject.css";

export const mainClass = "loading";

const LoadingObject = () => {
    return (
        <div className={mainClass}>
            <span>Loading</span>
        </div>
    );
};

export default LoadingObject;

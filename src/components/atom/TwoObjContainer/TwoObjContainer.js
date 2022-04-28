import "./TwoObjContainer.css";

export const mainClass = "twoobj-container";

const TwoObjContainer = ({ child1, child2 }) => {
    return (
        <div className={mainClass}>
            {child1} {child2}
        </div>
    );
};

export default TwoObjContainer;

import "./CreateEvent.css";
import TwoObjContainer from "../../components/atom/TwoObjContainer/TwoObjContainer";
import Title from "../../components/atom/Title/Title";
import Input from "../../components/atom/Input/Input";

export const mainClass = "createevent-container";

const CreateEvent = () => {
    return (
        <div className={mainClass}>
            <Title
                title={
                    <span style={{ fontSize: "2.5rem" }}>Creation Font</span>
                }
                loc="left"
            />
            <div className="createevent-body">
                <TwoObjContainer
                    child1={<span className="createevent-label">Name:</span>}
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={
                        <span className="createevent-label">
                            Max-participants:
                        </span>
                    }
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={<span className="createevent-label">Sport:</span>}
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={
                        <span className="createevent-label">Description:</span>
                    }
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={
                        <span className="createevent-label">Location:</span>
                    }
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={<span className="createevent-label">Pass:</span>}
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={
                        <span className="createevent-label">Start date:</span>
                    }
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
                <TwoObjContainer
                    child1={
                        <span className="createevent-label">End date:</span>
                    }
                    child2={
                        <Input
                            className="createevent-input"
                            type="text"
                        ></Input>
                    }
                />
            </div>
        </div>
    );
};

export default CreateEvent;

import { useContext } from "react";
import { TaskModalContext } from "../../../contexts/TaskModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const TimeframeField = () => {
  const { timeframe, setTimeframe } = useContext(TaskModalContext);

  return (
    <>
      <label>Timeframe: </label>
      <input
        type="number"
        className="border rounded-md p-1 outline-none border-gray-400"
        value={timeframe}
        onChange={(e) => setTimeframe(parseInt(e.target.value))}
      />
      <div className="group">
        <FontAwesomeIcon className="pr-1 group" icon={faInfoCircle} />
        <span className="absolute scale-0 bg-black text-xs text-white rounded-lg p-2 mt-2 group-hover:scale-100">
          The amount of days before the next deadline the task becomes active
        </span>
      </div>
    </>
  );
};

export default TimeframeField;

import { useRef } from "react";
import TaskList from "./TaskList";

const Task = ({ taskInput, existTasks }) => {
  const input = useRef();

  return (
    <div className="border-t-2">
      <h1 className="font-raleway font-bold text-stone-900 text-3xl mt-4">
        Tasks
      </h1>
      <div className="flex items-center mt-4">
        <input
          type="text"
          id="task"
          ref={input}
          className="bg-gray-300 border-b-2 border-stone-200 focus:border-stone-700 outline-none py-1 ps-2 w-2/5"
        />
        <button
          onClick={(taskInput)(input.current)}
          className="text-stone-700 font-inter font-semibold ps-4"
        >
          Add Task
        </button>
      </div>
      <TaskList taskLists={existTasks} />
    </div>
  );
};

export default Task;

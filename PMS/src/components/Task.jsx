import TaskList from "./TaskList";
import { useRef, useState } from "react";

const Task = ({ showingProject }) => {
  const input = useRef();
  const [tasks, setTasks] = useState([]);
  function handleTaskInput() {
    const task = input.current.value;
    if (task) {
      const newTask = { value: task };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      input.current.value = "";
    }
    showingProject.tasks.push(task);
  }
  console.log(`Project that is showing ${showingProject}`);
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
          onClick={handleTaskInput}
          className="text-stone-700 font-inter font-semibold ps-4"
        >
          Add Task
        </button>
      </div>
      <TaskList currentProjectTasks={showingProject} />
    </div>
  );
};

export default Task;

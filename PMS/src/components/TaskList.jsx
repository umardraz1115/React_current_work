const TaskList = ({ currentProjectTasks }) => {
  return (
    <>
      <ol className="mt-5 bg-gray-100 px-5 py-7">
        {currentProjectTasks.tasks.map((currentTask, index) => (
          <li
            key={index}
            className="flex justify-between py-2 font-inter font-medium"
          >
            <p>{currentTask}</p>
            <button>Clear</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TaskList;

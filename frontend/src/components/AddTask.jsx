import React, { useContext } from "react";

import { TaskContext } from "../contextapi/TaskContext";

const AddTask = () => {
  const { setAddTask, task, setTask, time, setTime, handleTask } = useContext(TaskContext);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10 h-4/5 w-4/5 shadow-md shadow-gray-100 rounded-md"
      >
        <input
          type="text"
          placeholder="Enter your task here..."
          className="py-5 px-4 outline-none border-2 border-gray-400 rounded-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the time..."
          className="py-5 px-4 outline-none border-2 border-gray-400 rounded-md"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className="uppercase bg-green-800 py-4 rounded-lg text-white font-bold w-64 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            handleTask();
            setAddTask(false);
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

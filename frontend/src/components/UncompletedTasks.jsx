import React from "react";

const UncompletedTasks = ({ tasks, handleCheck }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          className="flex justify-between uppercase gap-5 text-black shadow-md px-4 py-4"
          key={task.task}
        >
          <div className="flex gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                handleCheck(e.target.parentElement.lastChild.innerText)
              }
            />

            <p>{task.task}</p>
          </div>
          <p>{task.time}</p>
        </div>
      ))}
    </div>
  );
};

export default UncompletedTasks;

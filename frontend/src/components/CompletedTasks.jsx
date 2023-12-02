import React from "react";

const CompletedTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div className="flex justify-between uppercase gap-5 text-black shadow-md px-4 py-4"
        key={index}
        >
          <p>{task.task}</p>
          <p>{task.time}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;

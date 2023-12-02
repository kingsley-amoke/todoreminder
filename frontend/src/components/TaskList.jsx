import React, { useEffect, useState } from "react";
import axios from "axios";

import CompletedTasks from "./CompletedTasks";
import UncompletedTasks from "./UncompletedTasks";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheck = async (data) => {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    let path = data.toLowerCase();

    await axios
      .put(`http://localhost:3001/api/tasks/${path}`, { completed: isChecked })
      .then((res) => {
        console.log(res.data);
        let username = JSON.parse(sessionStorage.getItem("user"));
        axios
          .get(`http://localhost:3001/api/tasks?user=${username}`)
          .then((res) => {
            setTasks(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTasks = async () => {
    let username = JSON.parse(sessionStorage.getItem("user"));

    await axios
      .get(`http://localhost:3001/api/tasks?user=${username}`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleTasks();
  }, []);

  const completedTasks = tasks.filter((task) => task.completed === "true");
  const unCompletedTasks = tasks.filter((task) => task.completed === "false");

  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-5 ">
        <button
          className={`py-5 rounded-t-md  text-white hover:bg-gray-400 hover:text-black uppercase ${
            !isCompleted
              ? "bg-gray-400 text-black font-bold px-10"
              : "px-5 bg-green-800"
          }`}
          onClick={() => setIsCompleted(false)}
        >
          Uncompleted
        </button>
        <button
          className={`py-5 rounded-t-md  text-white hover:bg-gray-400 hover:text-black uppercase ${
            isCompleted
              ? "bg-gray-400 text-black font-bold px-10"
              : "px-5 bg-green-800"
          }`}
          onClick={() => setIsCompleted(true)}
        >
          Completed
        </button>
      </div>
      <div className="shadow-md overflow-y-scroll shadow-black rounded-sm min-w-[70%] max-h-[60%] mx-10 ">
        {isCompleted ? (
          <CompletedTasks tasks={completedTasks} />
        ) : (
          <UncompletedTasks
            tasks={unCompletedTasks}
            handleCheck={handleCheck}
          />
        )}
      </div>
    </>
  );
};

export default TaskList;

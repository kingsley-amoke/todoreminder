import React, { useContext, useState } from "react";
import axios from "axios";

import { UserContext } from "../contextapi/UserContext";
import { TaskContext } from "../contextapi/TaskContext";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";

const Home = () => {
  const { username } = useContext(UserContext);

  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const clearInput = () => {
    setTask("");
    setTime("");
  };

  const handleTask = async () => {
    const newTask = {
      task: task,
      time: time,
      completed: false,
      created_by: username,
    };

    await axios
      .post("http://localhost:3001/api/tasks", newTask)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    clearInput();
  };

  return (
    <div className="h-screen w-screen">
      <Header username={username} addTask={addTask} setAddTask={setAddTask} />
      <TaskContext.Provider
        value={{
          username,
          setAddTask,
          task,
          setTask,
          time,
          setTime,
          handleTask,
        }}
      >
        {!addTask ? <TaskList /> : <AddTask />}
        <Footer />
      </TaskContext.Provider>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [tasks, setTasks] = useState([]);

  const username = JSON.parse(sessionStorage.getItem("user"));

  axios
    .get(`http://localhost:3001/api/tasks?user=${username}`)
    .then((res) => {
      setTasks(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });

  return (
    <div className="fixed bottom-0 flex justify-center items-center w-screen py-6">
      <p>You have a total number of {tasks.length} tasks</p>
    </div>
  );
};

export default Footer;

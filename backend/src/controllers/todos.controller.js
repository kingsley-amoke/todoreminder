const { Tasks } = require("../models/tasks.model");

//Get All Tasks by User
const getUserTasks = async (req, res) => {
  let { user } = req.query;

  try {
    if (user) {
      user = user.toLowerCase();
      const allTasks = await Tasks.find({ created_by: user });
      res.status(200).json(allTasks);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
};

//Get Specific Task
const getOneTask = async (req, res) => {
  let { task } = req.params;
  task = task.toLowerCase();
  try {
    const yourTask = await Tasks.findOne({ task });
    if (yourTask) {
      res.status(200).json(yourTask);
    } else {
      res.status(204).json("This task hasn't been created yet");
    }
  } catch (error) {
    console.log(error);
  }
};

//Add New Task
const addTask = async (req, res) => {
  let { task, time, completed, created_by } = req.body;
  task = task.toLowerCase();
  created_by = created_by.toLowerCase();
  try {
    await Tasks.insertMany({
      task: task,
      time: time,
      completed: completed,
      created_by: created_by,
    });
    res.status(201).json(`${task} added successfully by ${created_by}`);
  } catch (error) {
    console.log(error);
  }
};

//Delete Task
const deleteTask = async (req, res) => {
  let { task } = req.params;
  task = task.toLowerCase();
  try {
    await Tasks.deleteOne({ task: task });
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

//Update Task
const updateTask = async (req, res) => {
  let { task } = req.params;

  let completed = req.body.completed;

  try {
    task = task.toLowerCase();
    await Tasks.updateOne(
      { task: task },
      {
        $set: {
          completed: completed,
        },
      }
    );
    res.status(200).json("Task updated successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserTasks,
  getOneTask,
  addTask,
  deleteTask,
  updateTask,
};

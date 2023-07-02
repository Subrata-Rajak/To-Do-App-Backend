const express = require('express');
const { getSingleTask, addSingleTask, deleteSingleTask, getAllTasks, deleteAllTasks, updateTitle, updateDesc, updateStatus } = require('../controllers/task_controllers');

const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.send("Hello from Server");
})

taskRouter.get("/tasks", getAllTasks);
taskRouter.get("/task", getSingleTask);
taskRouter.post("/task/add", addSingleTask);
taskRouter.patch("/task/title", updateTitle);
taskRouter.patch("/task/desc", updateDesc);
taskRouter.patch("/task/status", updateStatus);
taskRouter.delete("/task", deleteSingleTask);
taskRouter.delete("/tasks/delete", deleteAllTasks);

module.exports = taskRouter;
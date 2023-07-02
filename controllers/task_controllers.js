const Task = require("../models/task_model");

const getSingleTask = async (req, res) => {
    var task_id = req.query.taskId;

    try {
        const existingTask = await Task.findOne({ task_id });

        if (!existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "No Task Exist with this task id" });
        }

        res.status(200).send({ ...existingTask._doc });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const addSingleTask = async (req, res) => {
    var task_id = req.query.taskId;
    var task_title = req.query.taskTitle;
    var task_desc = req.query.taskDesc;
    var is_completed = req.query.isCompleted;

    try {
        const existingTask = await Task.findOne({ task_id });

        if (existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "A Task with the same id already exist" });
        }

        const newTask = new Task({
            task_id,
            task_title,
            task_desc,
            is_completed,
        });

        const savedTask = await newTask.save();

        res.status(201).send({ ...savedTask._doc });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

// update in building

const updateTitle = async (req, res) => {
    var task_title = req.query.taskTitle;
    var task_id = req.query.taskId;

    try {
        var existingTask = Task.findOne({ task_id });

        if (!existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "No task exist with this task Id" });
        }

        const updatedTask = await existingTask.updateOne({ $set: { task_title } });

        res.status(200).send({ "Status": "Task Updated Successfully", ...updatedTask._doc });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const updateDesc = async (req, res) => {
    var task_id = req.query.taskId;
    var task_desc = req.query.taskDesc;

    try {
        var existingTask = Task.findOne({ task_id });

        if (!existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "No task exist with this task Id" });
        }

        const updatedTask = await existingTask.updateOne({ $set: { task_desc } });

        res.status(200).send({ "Status": "Task Updated Successfully", ...updatedTask._doc });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const updateStatus = async (req, res) => {
    var task_id = req.query.taskId;
    var is_completed = req.query.taskStatus;

    try {
        var existingTask = Task.findOne({ task_id });

        if (!existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "No task exist with this task Id" });
        }

        const updatedTask = await existingTask.updateOne({ $set: { is_completed } });

        res.status(200).send({ "Status": "Task Updated Successfully", ...updatedTask._doc });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const deleteSingleTask = async (req, res) => {
    var task_id = req.query.taskId;

    try {
        const existingTask = await Task.findOne({ task_id });

        if (!existingTask) {
            res.status(404).send({ "StatusCode": "400", "Message": "No task exist with this task Id" });
        }

        const result = await Task.deleteOne({ task_id });

        res.status(200).send({ "Status": "Task Deleted" });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const deleteAllTasks = async (req, res) => {
    try {
        const result = await Task.deleteMany({});

        res.status(200).send({ "Status": "All Tasks Deleted" });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();

        res.status(200).send({
            ...allTasks
        });
    } catch (error) {
        res.status(500).send({ "Error": error.message });
    }
}

module.exports = { getSingleTask, addSingleTask, updateTitle, updateDesc, updateStatus, deleteSingleTask, deleteAllTasks, getAllTasks };
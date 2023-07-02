const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task_id: {
        type: Number,
        required: true,
        unique: true
    },
    task_title: {
        type: String,
        required: true,
        unique: true
    },
    task_desc: {
        type: String,
        required: true,
        unique: true
    },
    is_completed: {
        type: Boolean,
        required: true,
    }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task
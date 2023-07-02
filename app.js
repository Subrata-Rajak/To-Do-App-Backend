const express = require('express');
const connectDb = require('./db/connectdb');
const taskRouter = require('./routes/task_routes');

require('dotenv').config();


const app = express();

app.use(express.json());
app.use(taskRouter);
connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
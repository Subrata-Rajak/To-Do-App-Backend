const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected to Db"));
}

module.exports = connectDb;
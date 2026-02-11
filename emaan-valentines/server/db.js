

const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB!");
    } catch (err) {
        console.log("Couldn't connect to MongoDB. Error: ", err);
        process.exit(1);
    }
}

module.exports = connectDB;
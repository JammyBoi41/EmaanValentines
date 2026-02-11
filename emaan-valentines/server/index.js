require('dotenv').config();

const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.port || 3000;
const dbConn = require('./db');

//connect to db
//want this up first before server starts so ready to receive incoming reqs by the time the server is up
dbConn();

//use CORS
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//use json
app.use(express.json());

//debugging + listener
app.get("/", (req, res) => {
    res.send("server is running!");
});

app.listen(3000, () => {
    console.log("server running on port 3000!");
});
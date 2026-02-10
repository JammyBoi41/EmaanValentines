const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running!");
});

app.listen(3000, () => {
    console.log("server running on port 3000!");
});
const express = require("express");
const router = express.Router();
const Grievance = require('../models/Grievance');
const jwt = require("jsonwebtoken");

router.get("/", async(req, res)=> {
    try {
        const {token} = req.body;
        jwt.verify(token, process.env.JWT_SECRET);

        const grievances = await Grievance
            .find({})
            .sort({ createdAt: -1 });

        res.json(grievances);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to fetch grievances: ", err});
    }
});

router.post("/create", async (req, res) => {
  try {
    const {token} = req.body;
    jwt.verify(token, process.env.JWT_SECRET);
    
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Grievance text cannot be empty" });
    }

    const newGrievance = new Grievance({ text });
    const savedGrievance = await newGrievance.save();

    res.status(201).json(savedGrievance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create grievance" });
  }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const {token} = req.body;
        jwt.verify(token, process.env.JWT_SECRET);

        const deletedNote = await Grievance.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete note" });
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Grievance = require('../models/Grievance');

router.get("/", async(req, res)=> {
    try {
        const grievances = await Grievance
            .find({})
            .sort({ createdAt: -1 });

        res.json(grievances);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "Failed to fetch grievances: ", err});
    }
});

module.exports = router;
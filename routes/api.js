//require router
const router = require('express').Router();
// require model track.js
const WorkOuts = require('../models/track.js');

//get all, sum duration, sort by date
router.get("/api/workouts", (req, res) => {
    WorkOuts.aggregate([
        { $addFields: { totDuration: { $sum: '$excersize.duration' } } }
    ])
        .sort({ date: -1 })
        .then(dbWorkout => { res.json(dbWorkout) })
        .catch((err) => { res.json(err) })
})

//get date range, sum duration, sort by day, limit to 7 results
router.get("/api/workouts/range", (req, res) => {
    WorkOuts.aggregate([
        { $addFields: { totDuration: { $sum: '$excersize.duration' } } }
    ])
        .sort({ day: 1 }).limit(7)
        .then(dbWorkout => { res.json(dbWorkout) })
        .catch((err) => { res.json(err) })
})

//add new
router.post("/api/workouts", ({body}, res) => {
    WorkOuts.create(body)
    .then(dbWorkout => { res.json(dbWorkout)})
    .catch((err) => {res.status(400).json(err)})
})

//find workout and update
router.put("/api/workouts/:id", (req, res) => { //{body, params}
    WorkOuts.findByIdAndUpdate(req.params.id, { $push: {excersize: req.body}}) //,{new:true}
    .then(dbWorkout => { res.json(dbWorkout) })
    .catch((err) => { res.json(err) })
})

//delete workout, don't know if we need this one. 

module.exports = router;

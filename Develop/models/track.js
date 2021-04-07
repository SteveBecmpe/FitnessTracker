const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    // Enter reverse engineer here
    day: { type: Date, default: Date.now },
    excersize: [{
        type: { type: String, trim: true, required: "Choose a type" },
        name: { type: String, trim: true, required: "Enter name" },
        duration: { type: Number, trim: true, required: "Enter duration as number of minutes" },
        weight: { type: Number, trim: true, default: 0},
        reps: { type: Number, trim: true, default: 0},
        sets: { type: Number, trim: true, default: 0},
        distance: {type: Number, trim: true, default: 0},
    }]
});

const WorkOuts = mongoose.model("WorkOuts", WorkOutSchema);

module.exports = WorkOuts;
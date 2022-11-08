const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
	Title: { type: String, required: true },
	Status: { type: String, required: false },
},{
    timestamps: true
});

module.exports = mongoose.model("todo", todoSchema);
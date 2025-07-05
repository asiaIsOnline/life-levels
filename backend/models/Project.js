const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ["Low", "Moderate", "High", "Critical"], default: "Moderate"},
    status: { type: String, enum: ["Not started", "Paused", "In progress", "Completed"], default: "In progress"},
    startDate: { type: Date },
    dueDate: { type: Date },
    createdBy: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    assignedUser: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    assignedCharacter: [{type: mongoose.Schema.Types.ObjectId, ref: "Character"}],
    assignedTasks: [{type: mongoose.Schema.Types.ObjectId, ref: "Task"}],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
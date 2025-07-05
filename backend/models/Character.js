const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
    {
    title: { type: String, required: true },
    description: { type: String },
    level: {type: Number, default: 0},
    experience: {type: Number , default: 0},
    },
);

module.exports = mongoose.model("Character", CharacterSchema);
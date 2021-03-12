const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Character = new Schema(
    {
        name: { type: String, required: true },
        
    }
)

module.exports = mongoose.model("characters", Character)
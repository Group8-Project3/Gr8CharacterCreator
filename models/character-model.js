const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Character = new Schema(
    {
        name: { type: String, required: true },
        race: { type: String, required: true },
        class: { type: String, required: true },
        strength: { type: Number, required: true },
        dexterity : { type: Number, required: true },
        constitution: { type: Number, required: true },
        intelligence: { type: Number, required: true },
        wisdom: { type: Number, required: true },
        charisma: { type: Number, required: true },
        equipment: { type: String, required: true },
        skills: { type: String, required: true },
        spells: { type: String, required: true }


        
    }
)

module.exports = mongoose.model("characters", Character)
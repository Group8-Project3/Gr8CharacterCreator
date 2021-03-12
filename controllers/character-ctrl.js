const Character = require("../models/character-model");

createCharacter = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a name",
        })
    }

    const character = new Character(body)

    if (!character) {
        return res.status(400).json({ success: false, error: err })
    }

    character
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: character._id,
                message: "Character created!",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Character not created!",
            })
        })
}

deleteCharacter = async (req, res) => {
    await Character.findOneAndDelete({ _id: req.params.id }, (err, character) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!character) {
            return res
                .status(404)
                .json({ success: false, error: `Character not found` })
        }

        return res.status(200).json({ success: true, data: character })
    }).catch(err => console.log(err))
}

getCharacters = async (req, res) => {
    await Character.find({}, (err, characters) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!characters.length) {
            return res
                .status(404)
                .json({ success: false, error: `Character not found` })
        }
        return res.status(200).json({ success: true, data: characters })
    }).catch(err => console.log(err))
}

module.exports = {
    createCharacter,
    deleteCharacter,
    getCharacters,
}
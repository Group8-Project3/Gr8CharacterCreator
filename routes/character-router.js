const express = require("express");
const CharacterCtrl = require("../controllers/character-ctrl");
const router = express.Router()

router.post("/character", CharacterCtrl.createCharacter);
router.delete('/character/:id', CharacterCtrl.deleteCharacter);
router.get("/characters", CharacterCtrl.getCharacters);

module.exports = router;
const express = require("express");
const CharacterCtrl = require("../../controllers/character-ctrl");
const router = express.Router()


router.route("/")
  .get(CharacterCtrl.findAll)
  .post(CharacterCtrl.create);

module.exports = router;
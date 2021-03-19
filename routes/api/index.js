const path = require("path");
const router = require("express").Router();
const characterRoutes = require("./character-router");

router.use("/character", characterRoutes);

module.exports = router
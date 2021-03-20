const path = require("path");
const router = require("express").Router();
const characterRoutes = require("./character-router");
const authRoutes = require("./auth");

router.use("/character", characterRoutes);
router.use("/auth", authRoutes);

module.exports = router
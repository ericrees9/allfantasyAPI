const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const Picks = sequelize.import("../models/picks");

module.exports = router;

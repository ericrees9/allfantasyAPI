const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const Drafter = sequelize.import("../models/drafter");

module.exports = router;

const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const Bits = sequelize.import("../models/bit");

module.exports = router;

const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Episode = sequelize.import('../models/episode');

router.post("/create", (req, res) => {
    res.status(200).send({
        message: "This is your post episode endpoint.",
    })
})

router.get("/", (req, res) => {
    res.status(200).send({
        message: "This is your get episode endpoint.",
    })
})

router.delete("/delete/:id", (req, res) => {
    res.status(200).send({
        message: "This is your delete episode endpoint.",
    })
})

router.put("/update/:id", (req, res) => {
    res.status(200).send({
        message: "This is your update episode endpoint.",
    })
})


module.exports = router;
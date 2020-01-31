const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const Episode = sequelize.import("../models/episode");

router.post("/create", (req, res) => {
  let title = req.body.episode.title;
  let number = req.body.episode.number;
  let date = req.body.episode.date;
  let recordingLocation = req.body.episode.recordingLocation;
  let length = req.body.episode.length;
  let description = req.body.episode.description;
  let drafters = req.body.episode.drafters;
  let rpsWinner = req.body.episode.rpsWinner;
  let draftOrder = req.body.episode.draftOrder;
  let draftPicks = req.body.episode.draftPicks;
  let bitsCreated = req.body.episode.bitsCreated;
  let bitsReferenced = req.body.episode.bitsReferenced;
  let iansApp = req.body.episode.iansApp;
  let draftDescription = req.body.episode.draftDescription;
  let shoutouts = req.body.episode.shoutouts;

  Episode.create({
    title: title,
    number: number,
    date: date,
    recordingLocation: recordingLocation,
    length: length,
    description: description,
    drafters: drafters,
    rpsWinner: rpsWinner,
    draftOrder: draftOrder,
    draftPicks: draftPicks,
    bitsCreated: bitsCreated,
    bitsReferenced: bitsReferenced,
    iansApp: iansApp,
    draftDescription: draftDescription,
    shoutouts: shoutouts
  }).then(
    (createSuccess = () => {
      res.json({
        message: `Episode ${number} has successfully been created!`
      });
    }),
    (createError = err => res.status(500).send(err))
  );
});

router.get("/", (req, res) => {
  res.status(200).send({
    message: "This is your get episode endpoint."
  });
});

router.delete("/delete/:id", (req, res) => {
  res.status(200).send({
    message: "This is your delete episode endpoint."
  });
});

router.put("/update/:id", (req, res) => {
  res.status(200).send({
    message: "This is your update episode endpoint."
  });
});

module.exports = router;

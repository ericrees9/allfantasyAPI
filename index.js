// .ENV Linking
require("dotenv").config();

// Express Linking
const express = require("express");
const app = express();
const sequelize = require("./db");
const cors = require("cors");
const episode = require("./controllers/episodeController");
const drafters = require("./controllers/drafterController");
const bits = require("./controllers/bitsController");
const picks = require("./controllers/picksController");

app.use(express.json());
app.use(cors());

// Connecting to PGAdmin
sequelize.sync();
//sequelize.sync({ force: true });

app.use("/episode", episode);
app.use("/bits", bits);
app.use("/picks", picks);
app.use("/drafters", drafters);

// Listening Message
app.listen(process.env.PORT, function() {
  console.log(`App is listening on port ${process.env.PORT}!`);
});

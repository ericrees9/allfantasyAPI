// .ENV Linking
require("dotenv").config();

// Express Linking
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Controller Linking
const episode = require("./controllers/episodeController");
const drafters = require("./controllers/drafterController");
const bits = require("./controllers/bitsController");
const picks = require("./controllers/picksController");

// Database Linking
const sequelize = require("./db");

// Connecting to PGAdmin
sequelize.sync();
//sequelize.sync({ force: true });

/******************
 * EXPOSED ROUTES *
 *******************/
app.use("/episode", episode);
app.use("/bits", bits);
app.use("/picks", picks);
app.use("/drafters", drafters);

// Listening Message
app.listen(process.env.PORT, function() {
  console.log(`App is listening on port ${process.env.PORT}!`);
});

// .ENV Linking
require("dotenv").config();

// Express Linking
const express = require("express");
const app = express();
const sequelize = require("./db");
const cors = require("cors");
const episode = require("./controllers/episodeController");

app.use(express.json());
app.use(cors());

// Connecting to PGAdmin
sequelize.sync();
//sequelize.sync({ force: true });

app.use("/episode", episode);

// Listening Message
app.listen(process.env.PORT, function() {
  console.log(`App is listening on port ${process.env.PORT}!`);
});

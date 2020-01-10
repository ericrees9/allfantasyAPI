// .ENV Linking
require("dotenv").config();

// Express Linking
let express = require("express");
let app = express();
var sequelize = require('./db');
let cors = require("cors");

app.use(express.json());
app.use(cors());

// Connecting to PGAdmin
sequelize.sync(); // {force: true} for resetting tables

// Listening Message
app.listen(process.env.PORT, function(){
    console.log(`App is listening on port ${process.env.PORT}!`)
});
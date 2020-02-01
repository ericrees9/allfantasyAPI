const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "afeapi",
  `${process.env.DATABASE}`,
  `${process.env.DATABASEPW}`,
  {
    host: "localhost",
    dialect: `${process.env.DATABASE}`
  }
);

sequelize.authenticate().then(
  function() {
    console.log("Connected to AFEAPI database!");
  },
  function(err) {
    console.log(err);
  }
);

module.exports = sequelize;

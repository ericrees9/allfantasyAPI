module.exports = (sequelize, DataTypes) => {
  const Picks = sequelize.define("picks", {
    episodeNumber: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    allPicks: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    roundOne: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    roundTwo: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    roundThree: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    roundFour: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    roundFive: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    }
  });
  return Picks;
};

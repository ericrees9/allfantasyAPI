module.exports = (sequelize, DataTypes) => {
  const Drafter = sequelize.define("drafter", {
    firstName: {
      type: DataTypes.STRING
      // allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    socialHandles: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    firstEpisode: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    appearedOn: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    picks: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    }
  });
  return Drafter;
};

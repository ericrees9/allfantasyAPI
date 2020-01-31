module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define("episode", {
    title: {
      type: DataTypes.STRING
      // allowNull: false
    },
    number: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    date: {
      type: DataTypes.STRING
      // allowNull: false
    },
    recordingLocation: {
      type: DataTypes.STRING
      // allowNull: false
    },
    length: {
      type: DataTypes.INTEGER
      // allowNull: false
    },
    description: {
      type: DataTypes.STRING
      // allowNull: false
    },
    drafters: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    rpsWinner: {
      type: DataTypes.STRING
      // allowNull: false
    },
    draftOrder: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    draftPicks: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    bitsCreated: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    bitsReferenced: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    iansApp: {
      type: DataTypes.STRING
      // allowNull: false
    },
    draftDescription: {
      type: DataTypes.STRING
      // allowNull: false
    },
    shoutouts: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    }
  });
  return Episode;
};

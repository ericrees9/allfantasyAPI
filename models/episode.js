module.exports = function(sequelize, DataTypes){
    return sequelize.define('episode', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      recordingLocation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      descriptio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      drafters: {
        type: DataTypes.ARRAY,
        allowNull: false
      },
      rpsWinner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      draftOrder: {
        type: DataTypes.ARRAY,
        allowNull: false
      },
      draftPicks: {
        type: DataTypes.ARRAY,
        allowNull: false
      },
      bitsCreated: {
        type: DataTypes.ARRAY,
        allowNull: false
      },
      bitsReferenced: {
        type: DataTypes.ARRAY,
        allowNull: false
      },
      iansApp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      draftDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shoutouts: {
        type: DataTypes.ARRAY,
        allowNull: false
      }
    })
  }
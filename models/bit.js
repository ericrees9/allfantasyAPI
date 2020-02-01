module.exports = (sequelize, DataTypes) => {
  const Bits = sequelize.define("bits", {
    name: {
      type: DataTypes.STRING
      // allowNull: false
    },
    debutedOn: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    appearedOn: {
      type: DataTypes.ARRAY(DataTypes.STRING)
      // allowNull: false
    },
    timestamp: {
      type: DataTypes.STRING
      // allowNull: false
    },
    description: {
      type: DataTypes.STRING
      // allowNull: false
    }
  });
  return Bits;
};

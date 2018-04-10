module.exports = (sequelize, DataTypes) => {
  return sequelize.define("role", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    },

    description: {
      type: DataTypes.TEXT
    },
  })
}

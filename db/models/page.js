module.exports = (sequelize, DataTypes) => {
  return sequelize.define("page", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT
    },
  })
}

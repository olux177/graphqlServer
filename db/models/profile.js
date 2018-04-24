import Sequelize from "sequelize"
module.exports = (sequelize, DataTypes) => {
  return sequelize.define("profile", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    }
  })
}

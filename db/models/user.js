import Sequelize from "sequelize"
export default function (sequelize, DataTypes) {
  return sequelize.define("user1", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      underscored: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
  });
}
